const projects = [
  {
    name: 'Bella Pasta',
    category: 'Restaurant • Hospitality • Multilingual Website',
    description: 'A warm and elegant restaurant website designed to showcase the brand, menu, atmosphere and dining experience.',
    objective: 'Create a refined restaurant landing experience with a premium, welcoming feel and strong conversion-focused calls to action.',
    features: ['Custom home page and booking flow', 'Elegant restaurant branding', 'Responsive mobile-first layout', 'Hospitality-focused messaging'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    url: '#',
    image: 'assets/mockup bella pasta.png'
  },
  {
    name: 'Aurelia',
    category: 'Luxury Resort • Hospitality • Premium UI',
    description: 'A premium boutique resort experience focused on visual storytelling, elegant interactions and a high-end hospitality feel.',
    objective: 'Deliver a luxury resort presentation that feels immersive, modern and conversion-ready across all screen sizes.',
    features: ['Immersive resort storytelling', 'Luxury visual direction', 'Premium hospitality brand styling', 'Responsive desktop and mobile experience'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    url: '#',
    image: 'assets/Mockup Aurelia.png'
  },
  {
    name: 'NEXA AI',
    category: 'SaaS • AI • Automation • B2B',
    description: 'A modern SaaS landing page designed for an AI-powered workflow automation platform, combining product UI, interaction and conversion elements.',
    objective: 'Design a polished AI product presentation that communicates efficiency, innovation and trust to business buyers.',
    features: ['AI SaaS product layout', 'Clear value proposition', 'Modern dashboard-inspired visuals', 'Sales-oriented conversion sections'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    url: '#',
    image: 'assets/Mockup NEXA AI.png'
  }
];

const projectGrid = document.getElementById('projectGrid');
const renderProjectCard = (project) => `
  <article class="col-lg-4 reveal fade-up">
    <div class="project-card h-100" data-project-name="${project.name}">
      <div class="project-visual">
        <img src="${project.image}" alt="${project.name} mockup" class="project-mockup" />
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
