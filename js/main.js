const LB_TECH_CONFIG = { email: "hello@lbtech.dev", github: "", linkedin: "", upwork: "", whatsapp: "" };
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const handleNavbarState = () => { if (window.scrollY > 18) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); };
window.addEventListener('scroll', handleNavbarState); handleNavbarState();
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
      bsCollapse.hide();
    }
  });
});
const contactEmailLink = document.getElementById('contactEmailLink');
if (contactEmailLink) { contactEmailLink.href = `mailto:${LB_TECH_CONFIG.email}`; contactEmailLink.textContent = LB_TECH_CONFIG.email; }
const socialLinks = document.querySelectorAll('[data-config]');
socialLinks.forEach((link) => {
  const key = link.getAttribute('data-config');
  const value = LB_TECH_CONFIG[key];
  if (!value) { link.setAttribute('href', '#'); link.setAttribute('aria-disabled', 'true'); link.setAttribute('tabindex', '-1'); link.addEventListener('click', (event) => event.preventDefault()); return; }
  link.setAttribute('href', value); link.setAttribute('target', '_blank'); link.setAttribute('rel', 'noopener noreferrer');
});
const projectModal = document.getElementById('projectModal');
const modalCloseButton = document.querySelector('.modal-close');
const modalBackdrop = document.querySelector('[data-close-modal="true"]');
const openProjectModal = (project) => {
  if (!projectModal) return;
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalObjective = document.getElementById('modalObjective');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTechnologies = document.getElementById('modalTechnologies');
  const modalLink = document.getElementById('modalLink');
  modalTitle.textContent = project.name;
  modalCategory.textContent = project.category;
  modalObjective.textContent = project.objective;
  modalFeatures.innerHTML = project.features.map((item) => `<li>${item}</li>`).join('');
  modalTechnologies.innerHTML = project.technologies.map((tech) => `<span>${tech}</span>`).join('');
  modalLink.href = project.url;
  modalLink.textContent = 'Open Live Project';
  projectModal.classList.add('is-open');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};
const closeProjectModal = () => {
  if (!projectModal) return;
  projectModal.classList.remove('is-open');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};
if (modalCloseButton) modalCloseButton.addEventListener('click', closeProjectModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && projectModal && projectModal.classList.contains('is-open')) closeProjectModal();
});
