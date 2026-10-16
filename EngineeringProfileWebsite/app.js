import { profile, projects } from './content.js';

const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const dialogBody = document.querySelector('#dialog-body');
let opener = null;

// All dynamic content comes from this site's local content file. Escaping keeps
// text safe when editing descriptions, captions, and other résumé content later.
function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
const esc = escapeHTML;
function tags(values) { return `<div class="tags">${values.map(value => `<span>${esc(value)}</span>`).join('')}</div>`; }

function renderProjects(category = 'all') {
  const selected = projects.filter(project => category === 'all' || project.category === category);
  grid.innerHTML = selected.map(project => `
    <article class="project-card">
      <button class="project-image-button" type="button" data-project="${esc(project.id)}" aria-label="Explore ${esc(project.shortTitle)}">
        <img src="${esc(project.image)}" alt="${esc(project.imageAlt)}" width="800" height="450" loading="lazy">
        <span class="project-image-arrow" aria-hidden="true">↗</span>
      </button>
      <div class="project-card-meta"><span>${esc(project.number)} / ${esc(project.categoryLabel)}</span><span>${esc(project.date)}</span></div>
      <h3><button class="project-title-button" type="button" data-project="${esc(project.id)}">${esc(project.title)}</button></h3>
      <p class="project-card-summary">${esc(project.summary)}</p>
      ${tags(project.tags)}
    </article>`).join('');
  document.querySelector('#filter-status').textContent = `${selected.length} ${selected.length === 1 ? 'project' : 'projects'} displayed.`;
}

function renderMedia(item) {
  // Videos are native, keyboard-accessible controls with no autoplay. Supply a
  // caption file with a video entry when narration or dialogue is present.
  const media = item.type === 'video'
    ? `<video controls preload="metadata" playsinline${item.poster ? ` poster="${esc(item.poster)}"` : ''} aria-label="${esc(item.alt || item.caption)}"><source src="${esc(item.src)}"${item.mime ? ` type="${esc(item.mime)}"` : ''}>${item.captions ? `<track kind="captions" src="${esc(item.captions)}" srclang="en" label="English" default>` : ''}Your browser does not support embedded video. <a href="${esc(item.src)}">Download the video</a>.</video>`
    : `<img src="${esc(item.src)}" alt="${esc(item.alt)}" loading="lazy">`;
  return `<figure class="media-figure">${media}<figcaption>${esc(item.caption)}</figcaption></figure>`;
}

function openProject(id, trigger, updateHash = true) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  opener = trigger || document.querySelector(`[data-project="${project.id}"]`);
  dialogBody.innerHTML = `<article class="dialog-content">
    <p class="dialog-category">${esc(project.categoryLabel)} / ${esc(project.number)}</p>
    <h2 id="dialog-title">${esc(project.shortTitle)}</h2>
    <p class="dialog-org">${esc(project.organization)}<br>${esc(project.date)}</p>
    <p>${esc(project.context)}</p>
    <h3>My contribution</h3><ul>${project.contributions.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
    <div class="dialog-takeaway"><span class="small-label">ENGINEERING TAKEAWAY</span><p>${esc(project.takeaway)}</p></div>
    <h3>Tools & methods</h3>${tags(project.tools)}
    ${project.media?.length ? `<h3>Project visuals</h3>${project.media.map(renderMedia).join('')}` : ''}
    <div class="dialog-bottom"><a href="mailto:${esc(profile.email)}?subject=${encodeURIComponent(`Let's talk about ${project.shortTitle}`)}">Ask me about this project ↗</a><a href="${esc(profile.resume)}" target="_blank" rel="noopener">Read my résumé ↗</a></div>
  </article>`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
  if (updateHash) history.replaceState(null, '', `#project-${project.id}`);
  document.querySelector('#dialog-close').focus({ preventScroll: true });
}

function closeProject() { if (dialog.open) dialog.close(); }
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-project]');
  if (trigger) openProject(trigger.dataset.project, trigger);
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  renderProjects(button.dataset.filter);
}));
document.querySelector('#dialog-close').addEventListener('click', closeProject);
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject();
});
dialog.addEventListener('close', () => {
  dialog.querySelectorAll('video').forEach(video => video.pause());
  document.body.classList.remove('dialog-open');
  if (location.hash.startsWith('#project-')) history.replaceState(null, '', '#work');
  if (opener?.isConnected) opener.focus({ preventScroll: true });
});

document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(profile.email);
    status.textContent = 'Email address copied.';
  } catch {
    // Browsers can disallow clipboard writes; keep the address available and
    // select it so the visitor can use their normal copy shortcut.
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.contact-email'));
    selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Select and copy the email address above.';
  }
});
document.querySelectorAll('[data-linkedin]').forEach(link => { link.href = profile.linkedin; });
document.querySelectorAll('[data-orcid]').forEach(link => {
  if (profile.orcid) { link.href = profile.orcid; link.hidden = false; }
});
renderProjects();
function openHashProject() {
  if (location.hash.startsWith('#project-')) openProject(location.hash.slice(9), null, false);
}
window.addEventListener('hashchange', () => {
  if (location.hash.startsWith('#project-')) openHashProject();
  else if (dialog.open) closeProject();
});
openHashProject();
