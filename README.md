# David Torck — Engineering Portfolio

Source repository: https://github.com/DavidTorq/EngineeringProfileWebsite

A responsive engineering portfolio built with HTML, CSS, and JavaScript.

## Publish with GitHub Pages

1. Use the repository https://github.com/DavidTorq/EngineeringProfileWebsite.
2. Upload these extracted files and the assets directory to the top level of the repository. Upload the extracted contents, not the ZIP file.
3. Open repository Settings → Pages.
4. Under Build and deployment, select Deploy from a branch.
5. Select the main branch and /(root), then save.
6. GitHub Pages will display the published address and deployment status. The intended address is https://davidtorq.github.io/EngineeringProfileWebsite/.

Public repositories can use GitHub Pages on GitHub Free. The portfolio becomes public when published.

## Make changes

- `index.html`: welcome, experience, education, contact information, and page structure.
- `content.js`: professional links, project descriptions, tools, and media entries.
- `styles.css`: colors, type, spacing, and responsive layout.
- `app.js`: project filters, case-study dialog, and email-copy behavior.
- `assets/David-Torck-Resume.pdf`: downloadable résumé. Replace this file to update it.

Commit changes to the publishing branch to update the live site.

## Add photos or videos

Current project graphics are clearly labeled concept illustrations. Add project media to assets, then add an entry to the project's media array in content.js:

```js
{ type: 'image', src: 'assets/project-photo.jpg', alt: 'Description of the photo', caption: 'Photo caption' }
{ type: 'video', src: 'assets/project-demo.mp4', mime: 'video/mp4', poster: 'assets/demo-poster.jpg', captions: 'assets/demo-en.vtt', alt: 'Demonstration title', caption: 'Demonstration caption' }
```

Add caption tracks for video with spoken content. Set each project's image and imageAlt to replace its card illustration.

## Professional links

The LinkedIn link is configured. Add the exact ORCID URL to profile.orcid in content.js to display the ORCID links.

## Checks

JavaScript syntax, local links, source assets, and SVG files were checked. Browser visual and interactive review is still needed. The site does not need a build step or server-side runtime.

## Project-site paths

All stylesheet, script, résumé, and project-media references use relative paths, so they work under /EngineeringProfileWebsite/. If you rename the repository again or use a custom domain, update the canonical and og:url fields in index.html.
