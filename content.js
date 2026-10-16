export const profile = {
  name: 'David Torck',
  email: 'davidtorck0@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-torck-1b955923b/',
  // Add David's exact ORCID profile URL when supplied. The site only displays verified links.
  orcid: null,
  resume: 'assets/David-Torck-Resume.pdf',
};

// Text is based on David's supplied résumé. Project images are labeled concept
// illustrations, not photographs of the actual hardware. To add real media,
// add local photo/video paths to media; the detail view supports both formats.
export const projects = [
  {
    id: 'tvc', number: '01', category: 'controls', categoryLabel: 'Controls & test',
    title: 'Recreating flight loads, on the ground.',
    shortTitle: 'Thrust vector control',
    organization: 'Amentum · NASA Marshall Space Flight Center',
    date: 'May – Aug 2025',
    summary: 'A single-axis active inertial loading simulator for thrust vector control development.',
    image: 'assets/tvc.svg', imageAlt: 'Concept illustration of a linear actuator and loading assembly.',
    tags: ['MATLAB', 'LabVIEW', 'Dynamic modeling'],
    context: 'Thrust vector control hardware must be evaluated under loads that represent its operating environment. During my Amentum internship at NASA Marshall Space Flight Center, I worked on bringing mission-representative loading into a ground-test architecture.',
    contributions: [
      'Engineered and integrated a single-axis active inertial loading simulator into an existing thrust vector control architecture.',
      'Used MATLAB for dynamic system modeling and LabVIEW for real-time data acquisition and hardware-in-the-loop control.',
      'Developed active control to reproduce load, friction, and force profiles supporting Mars Ascent Vehicle and Space Launch System work.'
    ],
    takeaway: 'Connected dynamic modeling, control development, and physical test hardware in a propulsion engineering environment.',
    tools: ['MATLAB', 'LabVIEW', 'Hardware-in-the-loop control', 'Data acquisition', 'Dynamic system modeling'],
    media: [{type: 'image', src: 'assets/tvc.svg', alt: 'Illustrative actuator and test-load assembly.', caption: 'Concept illustration · actuator loading test arrangement'}]
  },
  {
    id: 'riptide', number: '02', category: 'robotics', categoryLabel: 'Robotics & metrology',
    title: 'Connecting a robot to precision inspection.',
    shortTitle: 'R.I.P.T.I.D.E.',
    organization: 'Texas A&M University · Senior design',
    date: 'Jan – Dec 2024',
    summary: 'A semi-autonomous workflow connecting robotic handling, 3D scanning, and digital part inspection.',
    image: 'assets/riptide.svg', imageAlt: 'Concept illustration of a robotic arm, scanner, and part inspection station.',
    tags: ['C++', 'Robotic integration', '3D metrology'],
    context: 'R.I.P.T.I.D.E. brought robotic handling and dimensional inspection into one workflow for manufactured parts. The project combined a six-degree-of-freedom robotic arm, end-of-arm tooling, and Creaform scanning software.',
    contributions: [
      'Built a custom C++ intermediate controller to establish communication between the robotic arm, tooling, and Creaform HandySCAN software.',
      'Integrated robotic part handling with 3D scanning and inspection workflows.',
      'Compared scanned digital twins with source CAD models to generate deviation heatmaps.'
    ],
    takeaway: 'Integrated mechanical motion, software communication, and metrology into a semi-autonomous inspection system.',
    tools: ['C++', 'Universal Robots', 'PolyScope', 'Creaform HandySCAN', 'VXmodel', 'VXinspect', 'CAD comparison'],
    media: [{type: 'image', src: 'assets/riptide.svg', alt: 'Illustrative robotic arm and inspection workflow.', caption: 'Concept illustration · robotic handling and optical inspection'}]
  },
  {
    id: 'raman', number: '03', category: 'robotics', categoryLabel: 'Automation & sensing',
    title: 'Taking spectroscopy into the greenhouse.',
    shortTitle: 'Bio-photonic robotics',
    organization: 'Texas A&M University · Research internship',
    date: 'Nov 2023 – Aug 2024',
    summary: 'Mobile robotic positioning and Raman spectroscopy for plant research across 96 corn stalks.',
    image: 'assets/raman.svg', imageAlt: 'Concept illustration of a spectroscopy probe examining plants.',
    tags: ['Robotic positioning', 'Raman spectroscopy', 'Data analysis'],
    context: 'Repeated spectroscopy measurements in a greenhouse require consistent positioning and acquisition. This research internship combined a mobile robotic platform with Raman measurements to support phytopathology research.',
    contributions: [
      'Designed a mobile robotic system to position and trigger Raman spectroscopy scans across 96 corn stalks in a climate-controlled greenhouse.',
      'Worked to reduce manual intervention and variability in repeated measurements.',
      'Collected and quantitatively analyzed Raman wavenumber data from hard-stalk grass samples.'
    ],
    takeaway: 'Applied robotic automation to a measurement task at the intersection of engineering, optics, and plant science.',
    tools: ['Robotic positioning', 'Raman spectroscopy', 'Measurement automation', 'Quantitative data analysis'],
    media: [{type: 'image', src: 'assets/raman.svg', alt: 'Illustrative measurement probe and plants.', caption: 'Concept illustration · automated plant spectroscopy'}]
  },
  {
    id: 'imaging', number: '04', category: 'research', categoryLabel: 'Optics & research',
    title: 'Exploring a different way to form an image.',
    shortTitle: 'Ghost imaging research',
    organization: 'Texas A&M University · Graduate research',
    date: '2025 – present',
    summary: 'Investigating correlation-based imaging and the physical foundations behind optical measurement.',
    image: 'assets/imaging.svg', imageAlt: 'Concept illustration of illumination patterns and a reconstructed image.',
    tags: ['Optical modeling', 'Photon correlations', 'Imaging'],
    context: 'Ghost imaging uses correlations between known or measured illumination patterns and collected light to recover spatial information. My graduate research investigates the optical foundations and potential architectures of these imaging systems.',
    contributions: [
      'Investigated ghost imaging architectures and potential integration approaches.',
      'Modeled foundational quantum-optics concepts, including photon correlations, two-path interference, and measurement theory.',
      'Used theoretical modeling and literature review to develop the mathematical basis for continued imaging research.'
    ],
    takeaway: 'Ongoing graduate research connecting optical theory, mathematical modeling, and imaging-system design.',
    tools: ['Optical modeling', 'Correlation-based imaging', 'Quantum measurement theory', 'Literature review'],
    media: [{type: 'image', src: 'assets/imaging.svg', alt: 'Illustrative patterned illumination and reconstructed target.', caption: 'Concept illustration · pattern-based image reconstruction'}]
  }
];
