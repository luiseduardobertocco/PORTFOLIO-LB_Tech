const translations = {
  'pt-br': {
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.process': 'Processo',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.cta': 'Começar um projeto',
    'hero.eyebrow': 'Soluções digitais para negócios modernos',
    'hero.title': 'Soluções digitais que transformam ideias em resultados.',
    'hero.lead': 'Sites modernos, software personalizado e automação inteligente construídos para ajudar seu negócio a crescer.',
    'hero.primary': 'Começar um projeto',
    'hero.secondary': 'Ver nosso trabalho',
    'hero.trust': 'Desenvolvimento Web • Software personalizado • Automação',
    'section.services.eyebrow': 'O que construímos',
    'section.services.title': 'Do design de alto impacto à execução digital prática.',
    'section.projects.eyebrow': 'Trabalhos selecionados',
    'section.projects.title': 'Alguns exemplos do que podemos criar.',
    'section.why.eyebrow': 'Por que escolher a LB Tech?',
    'section.why.title': 'Tecnologia prática, execução clara e foco no negócio.',
    'section.process.eyebrow': 'Da ideia ao lançamento',
    'section.process.title': 'Processo simples, confiável e orientado ao negócio.',
    'cta.eyebrow': 'Tem uma ideia? Vamos construir.',
    'cta.title': 'Tem uma ideia? Vamos construir.',
    'cta.text': 'Conte-nos o que você precisa e vamos transformar isso em uma solução digital prática.',
    'cta.button': 'Começar um projeto',
    'contact.eyebrow': 'Vamos construir algo que faça diferença.',
    'contact.title': 'Vamos construir algo que faça diferença.',
    'contact.text': 'Tem um site, um software ou um projeto de automação em mente? Conte-nos sua ideia.',
    'contact.label.name': 'Nome',
    'contact.label.email': 'E-mail',
    'contact.label.company': 'Empresa',
    'contact.label.service': 'Serviço',
    'contact.label.details': 'Detalhes do projeto',
    'contact.placeholder.name': 'Seu nome',
    'contact.placeholder.email': 'seu@email.com',
    'contact.placeholder.company': 'Sua empresa',
    'contact.placeholder.details': 'Conte-nos sobre o seu projeto',
    'contact.submit': 'Enviar solicitação',
    'lang.label': 'Idioma',
    'lang.pt': 'PT-BR',
    'lang.en': 'EN'
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Start a project',
    'hero.eyebrow': 'Digital solutions for modern businesses',
    'hero.title': 'Digital solutions that turn ideas into results.',
    'hero.lead': 'Modern websites, custom software and smart automation built to help your business grow.',
    'hero.primary': 'Start Your Project',
    'hero.secondary': 'View Our Work',
    'hero.trust': 'Web Development • Custom Software • Automation',
    'section.services.eyebrow': 'What We Build',
    'section.services.title': 'From high-impact design to practical digital execution.',
    'section.projects.eyebrow': 'Selected Work',
    'section.projects.title': 'A few examples of what we can build.',
    'section.why.eyebrow': 'Why Work With LB Tech?',
    'section.why.title': 'Practical technology, clear execution and business focus.',
    'section.process.eyebrow': 'From Idea to Launch',
    'section.process.title': 'Simple, reliable and business-oriented development.',
    'cta.eyebrow': 'Have an idea? Let\'s build it.',
    'cta.title': 'Have an idea? Let\'s build it.',
    'cta.text': 'Tell us what you need and let\'s turn it into a practical digital solution.',
    'cta.button': 'Start Your Project',
    'contact.eyebrow': 'Let\'s build something that matters.',
    'contact.title': 'Let\'s build something that matters.',
    'contact.text': 'Have a website, software or automation project in mind? Tell us what you need.',
    'contact.label.name': 'Name',
    'contact.label.email': 'Email',
    'contact.label.company': 'Company',
    'contact.label.service': 'Service',
    'contact.label.details': 'Project details',
    'contact.placeholder.name': 'Your name',
    'contact.placeholder.email': 'your@email.com',
    'contact.placeholder.company': 'Your company',
    'contact.placeholder.details': 'Tell us about your project',
    'contact.submit': 'Send Project Request',
    'lang.label': 'Language',
    'lang.pt': 'PT-BR',
    'lang.en': 'EN'
  }
};

const defaultLanguage = 'pt-br';
const languageSelector = document.getElementById('languageSelector');
const applyTranslations = (language) => {
  const currentTranslations = translations[language] || translations[defaultLanguage];
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (currentTranslations[key]) {
      element.textContent = currentTranslations[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (currentTranslations[key]) {
      element.setAttribute('placeholder', currentTranslations[key]);
    }
  });

  if (languageSelector) {
    languageSelector.value = language;
  }
};

if (languageSelector) {
  languageSelector.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    applyTranslations(selectedLanguage);
    localStorage.setItem('lbtech-language', selectedLanguage);
  });

  const savedLanguage = localStorage.getItem('lbtech-language') || defaultLanguage;
  applyTranslations(savedLanguage);
} else {
  applyTranslations(defaultLanguage);
}
