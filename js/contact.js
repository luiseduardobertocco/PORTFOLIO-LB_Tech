const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const setFieldError = (fieldName, message) => {
  const field = document.getElementById(fieldName);
  const error = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (field) field.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (error) error.textContent = message || '';
};
const validateField = (fieldName, value) => {
  switch (fieldName) {
    case 'name': return value.trim().length >= 2 ? '' : 'Please enter your name.';
    case 'email': {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value.trim()) ? '' : 'Please enter a valid email address.';
    }
    case 'service': return value.trim() ? '' : 'Please select a service.';
    case 'details': return value.trim().length >= 20 ? '' : 'Please share a few more details about your project.';
    default: return '';
  }
};
if (contactForm) {
  const fields = ['name', 'email', 'service', 'details'];
  fields.forEach((fieldName) => {
    const field = document.getElementById(fieldName);
    if (!field) return;
    field.addEventListener('blur', () => {
      const error = validateField(fieldName, field.value);
      setFieldError(fieldName, error);
    });
  });
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = { name: document.getElementById('name')?.value || '', email: document.getElementById('email')?.value || '', service: document.getElementById('service')?.value || '', details: document.getElementById('details')?.value || '' };
    let hasError = false;
    Object.keys(values).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName]);
      setFieldError(fieldName, error);
      if (error) hasError = true;
    });
    if (hasError) {
      if (formStatus) { formStatus.textContent = 'Please correct the highlighted fields and try again.'; formStatus.className = 'form-status error'; }
      return;
    }
    if (formStatus) { formStatus.textContent = "Thanks! Your project request has been received. We'll get back to you soon."; formStatus.className = 'form-status success'; }
    contactForm.reset();
    fields.forEach((fieldName) => setFieldError(fieldName, ''));
    // FUTURE INTEGRATION:
    // Connect this form to Formspree, EmailJS, a custom backend or another service.
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) });
  });
}
