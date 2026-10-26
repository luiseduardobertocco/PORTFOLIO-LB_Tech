const projects = [
  { name: 'Bella Pasta', category: 'Restaurant • Hospitality • Multilingual Website', description: 'A warm and elegant restaurant website designed to showcase the brand, menu, atmosphere and dining experience while making reservations and contact easily accessible.', url: 'https://luiseduardobertocco.github.io/bella_pasta_italian_restaurant/', objective: 'Built to create a welcoming restaurant brand presence with clear menu, location and reservation-focused user experience.', features: ['Responsive restaurant presentation', 'Menu and gallery sections', 'Testimonials and local details', 'WhatsApp call-to-action and contact access', 'Multilingual experience with business-ready layout'], technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'], accent: 'restaurant' },
  { name: 'Aurelia', category: 'Luxury Resort • Hospitality • Premium UI', description: 'A premium boutique resort experience focused on visual storytelling, elegant interactions and a high-end user experience.', url: 'https://luiseduardobertocco.github.io/AURELIA-Boutique-Resort-Spa/', objective: 'Designed to present a luxury resort brand with premium visual storytelling, room browsing and a polished booking-inspired interface.', features: ['Luxury visual design and story-driven layout', 'Responsive interface for all devices', 'Room filtering and gallery sections', 'Lightbox and interactive UI details', 'Accessibility-conscious layout and polished experience'], technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'], accent: 'resort' },
  { name: 'NEXA AI', category: 'SaaS • AI • Automation • B2B', description: 'A modern SaaS landing page designed for an AI-powered workflow automation platform, combining product UI, interactive demonstrations and conversion-focused sections.', url: 'https://luiseduardobertocco.github.io/NEXA-AI-Intelligent-Automation-SaaS/', objective: 'Built to demonstrate how a modern SaaS product can combine product UI, workflow automation and conversion-focused design.', features: ['SaaS product presentation with dashboard view', 'Workflow and automation showcase', 'Pricing and integration-focused sections', 'Interactive conversion-oriented layout', 'Responsive product storytelling for business audiences'], technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'], accent: 'saas' }
];
const projectGrid = document.getElementById('projectGrid');
const renderProjectCard = (project) => `
  <article class="col-lg-4 reveal fade-up">
    <div class="project-card h-100" data-project-name="${project.name}">
      <div class="project-visual">
        <div class="project-window">
          <div class="project-window-top"><span></span><span></span><span></span></div>
          <div class="project-window-body">
            <div class="project-aside"><div class="project-line long"></div><div class="project-line mid"></div><div class="project-line short"></div></div>
            <div class="project-main"><div class="project-line long"></div><div class="project-line mid"></div><div class="project-line short"></div></div>
          </div>
        </div>
      </div>
      <div class="project-body">
        <span class="project-category">${project.category}</span>
        <h3>${project.name}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-techs">${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}</div>
        <div class="project-card-actions"><span class="project-meta">Portfolio project</span><button class="btn-project project-open" type="button">View Live Project →</button></div>
      </div>
    </div>
  </article>
`;
if (projectGrid) {
  projectGrid.innerHTML = projects.map(renderProjectCard).join('');
  const openButtons = document.querySelectorAll('.project-open');
  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.project-card');
      const selectedProject = projects.find((project) => project.name === card.dataset.projectName);
      if (selectedProject) openProjectModal(selectedProject);
    });
  });
}
