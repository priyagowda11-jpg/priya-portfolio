# 🚀 Priya G — Personal Portfolio Website

A **modern, professional developer portfolio** built with **React + Vite + Tailwind CSS**, featuring a fixed left sidebar navigation, dark theme, smooth animations, and full responsiveness.

---

## ✨ Features

- **Left Sidebar Navigation** — Fixed sidebar with smooth active section tracking
- **Typing Animation** — Dynamic hero with multi-text cycling animation
- **Animated Progress Bars** — Skill bars that animate on scroll into view
- **Timeline Education** — Visual timeline layout for education history
- **Project Cards** — Glassmorphism-style project showcase cards
- **Certificate Grid** — Color-coded 3-column certificates grid
- **Contact Form** — Functional contact form (ready to wire to EmailJS/Formspree)
- **Dark Theme** — Professional navy dark theme (`#0F172A` base)
- **Responsive Design** — Mobile, tablet, and desktop support
- **Smooth Scroll** — Section-based smooth scrolling with active nav tracking
- **Floating Particles** — Subtle animated particles in the hero section

---

## 🎨 Design System

| Property        | Value       |
|----------------|-------------|
| Background      | `#0F172A`   |
| Primary Accent  | `#3B82F6`   |
| Secondary Accent| `#14B8A6`   |
| Card Background | `#162032`   |
| Sidebar BG      | `#1E293B`   |
| Display Font    | Syne        |
| Body Font       | DM Sans     |
| Mono Font       | JetBrains Mono |

---

## 📁 Project Structure

```
priya-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx       # Fixed left sidebar navigation
│   │   ├── Hero.jsx          # Hero section with typing animation
│   │   ├── About.jsx         # About me section
│   │   ├── Education.jsx     # Timeline education section
│   │   ├── Skills.jsx        # Animated skill progress bars
│   │   ├── Internship.jsx    # Internship experience section
│   │   ├── Projects.jsx      # Project showcase cards
│   │   ├── Certificates.jsx  # Certifications grid
│   │   └── Contact.jsx       # Contact section with form
│   ├── App.jsx               # Root app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global Tailwind + custom styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool (fast HMR)
- **Tailwind CSS 3** — Utility-first styling
- **react-icons** — Icon library
- **Google Fonts** — Syne, DM Sans, JetBrains Mono

---

## ⚡ Getting Started

### Prerequisites

Make sure you have installed:
- **Node.js** v18+ → [nodejs.org](https://nodejs.org)
- **npm** v9+ (comes with Node)

### Step 1 — Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/priya-portfolio.git
cd priya-portfolio
```

Or if you downloaded the ZIP — extract it and navigate into the folder:

```bash
cd priya-portfolio
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Start development server

```bash
npm run dev
```

Open your browser and go to: **http://localhost:5173**

The site auto-reloads whenever you edit files. 🔥

---

## 🏗️ Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview production build locally

```bash
npm run preview
```

---

## 🚀 Deployment

### Option 1: Netlify (Recommended — Free)

1. Create a free account at [netlify.com](https://netlify.com)
2. Drag and drop the `dist/` folder into Netlify's deploy zone
3. ✅ Site is live instantly!

Or connect GitHub and enable auto-deploy:
- Build command: `npm run build`
- Publish directory: `dist`

### Option 2: Vercel

```bash
npm install -g vercel
vercel --prod
```

### Option 3: GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"deploy": "gh-pages -d dist"
```

Then:
```bash
npm run build
npm run deploy
```

---

## 🔧 Customization Guide

### 1. Replace Profile Photo

In `src/components/Sidebar.jsx`, find the avatar section and replace with:
```jsx
<img
  src="/your-photo.jpg"
  alt="Priya G"
  className="w-full h-full rounded-full object-cover"
/>
```
Place your photo in the `public/` folder.

### 2. Add Resume Download

In `src/components/Hero.jsx`, replace the alert with:
```jsx
href="/Priya_G_Resume.pdf"
download
```
Place your resume PDF in the `public/` folder.

### 3. Connect Contact Form to EmailJS

1. Sign up at [emailjs.com](https://emailjs.com) (free)
2. Install: `npm install @emailjs/browser`
3. Replace the mock `handleSubmit` in `Contact.jsx` with EmailJS call

### 4. Update Project GitHub Links

In `src/components/Projects.jsx`, update the `github` field in the projects array.

---

## 🧩 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:5173` |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Preview production build locally |

---

## 📸 Sections Overview

| # | Section | Description |
|---|---------|-------------|
| 1 | **Home** | Hero with typing animation, stats, CTA buttons |
| 2 | **About** | Bio, code snippet card, interest areas |
| 3 | **Education** | Visual timeline — BE, PU, 10th |
| 4 | **Skills** | Animated bars — technical + soft skills |
| 5 | **Internship** | Pantech AI experience details |
| 6 | **Projects** | AI Fraud Detection + Secure Voting cards |
| 7 | **Certificates** | 9-certificate grid with icons |
| 8 | **Contact** | Social links + functional contact form |

---

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Styles not loading?**
Make sure `index.css` is imported in `main.jsx` and Tailwind config points to `./src/**/*.{js,ts,jsx,tsx}`.

**Icons not showing?**
```bash
npm install react-icons
```

---

## 📄 License

This project is open-source and free to use for personal portfolios.

---

<div align="center">
  <p>Built with ❤️ by <strong>Priya G</strong></p>
  <p>EEE Student · AI & IoT Developer · Python Developer</p>
  <a href="https://priya-11.netlify.app/">Portfolio Link(depolyed)</a> ·
  <a href="https://www.linkedin.com/in/priya-g-07422429a/">LinkedIn</a> ·
  <a href="https://github.com/priyagowda11-jpg/">GitHub</a> ·
  <a href="mailto:priyag11032005@gmail.com">Email</a>
</div>
