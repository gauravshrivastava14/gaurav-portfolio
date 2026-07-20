# Portfolio — Gaurav Shrivastava

Personal portfolio site built with React, Vite, and Tailwind CSS.

**Live:** [portfolio-h2qi.onrender.com](https://portfolio-h2qi.onrender.com)

## Features

- Light/dark theme toggle with persisted preference
- Animated sections (Hero, About, Skills, Projects, Experience, Contact) powered by Framer Motion
- Contact form wired to [EmailJS](https://www.emailjs.com/) — no backend required
- Built-in AI chatbot assistant with a knowledge base, typing animation, and suggested prompts
- Fully responsive, scroll-based navigation and progress indicator

## Tech Stack

- **React 18** + **Vite** — UI and build tooling
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **Lucide React** — icons
- **EmailJS** — contact form delivery

## Getting Started

```bash
npm install
cp .env.example .env   # fill in your EmailJS credentials
npm run dev
```

### Environment Variables

See [.env.example](.env.example) for the required EmailJS keys (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`).

## Build

```bash
npm run build
npm run preview
```

## Contact

- Email: gauravshrivastava.web@gmail.com
- LinkedIn: [gaurav-shrivastava-ba0316253](https://www.linkedin.com/in/gaurav-shrivastava-ba0316253)
