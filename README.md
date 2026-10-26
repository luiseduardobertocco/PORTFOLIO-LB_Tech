# LB Tech

LB Tech is a modern landing page and conversion-focused portfolio for a web development, software and IT solutions business.

## Objective

Present the business as a professional digital partner capable of delivering modern websites, custom software and automation solutions for business growth.

## Main features

- Professional conversion-focused landing page
- Responsive layout for desktop, tablet and mobile
- Project portfolio section with modal details
- Contact form with validation and future-ready integration notes
- SEO metadata and accessibility basics
- GitHub Pages-friendly static structure

## Technology stack

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5

## Run locally

1. Open the project folder in any local web server.
2. A simple option is to run a local static server using Python:

```bash
python -m http.server 8000
```

3. Open `http://localhost:8000` in the browser.

## Publish on GitHub Pages

1. Push the repository to GitHub.
2. In the repository, go to Settings → Pages.
3. Select the branch to publish, usually `main`.
4. Set the folder to `/root`.
5. Save the configuration.
6. Publish and access the generated GitHub Pages URL.

## Update contact information

The site centralizes contact data in `js/main.js`:

```javascript
const LB_TECH_CONFIG = {
  email: "hello@lbtech.dev",
  github: "",
  linkedin: "",
  upwork: "",
  whatsapp: ""
};
```

Replace the values with your real links or email address.

## Add new projects

Update the `projects` array in `js/projects.js`.

## QA checklist

- [ ] Desktop
- [ ] Tablet
- [ ] Mobile
- [ ] 320px
- [ ] 375px
- [ ] 390px
- [ ] 430px
- [ ] 768px
- [ ] 1024px
- [ ] 1280px
- [ ] 1440px
- [ ] 1920px

## Accessibility and quality

- [ ] Keyboard navigation
- [ ] Visible focus state
- [ ] Labels
- [ ] Contrast
- [ ] ARIA usage
- [ ] Reduced motion support
- [ ] No console errors
- [ ] No broken links
- [ ] No horizontal overflow
