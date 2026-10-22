# Rakshitha Kotian — Personal Developer Portfolio

> **Aspiring Software Developer | AI & ML Student**  
> Location: Mangaluru, Karnataka, India  
> Email: [rakshitha.kotian.in@gmail.com](mailto:rakshitha.kotian.in@gmail.com)  
> LinkedIn: [linkedin.com/in/rakshitha-r-kotian-a5566637b](https://www.linkedin.com/in/rakshitha-r-kotian-a5566637b)

A complete, modern, responsive, and recruiter-ready developer portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**, styled with subtle dark charcoal backgrounds, refined violet/blue accents, and accessible typography.

---

## 🌟 Key Features

- **Dark Minimal Aesthetic**: Dark charcoal background (`#0b0f17`) with subtle violet and blue glowing accents.
- **Section Architecture**:
  - **Hero Section**: Strong visual presence, headline, quick tech pills, quick contact badge, and CTA buttons.
  - **About Me**: Professional summary, 4 core pillars (Programming Foundations, AI & ML Exploration, Practical Project Development, Continuous Growth), and quick stats cards.
  - **Technical Skills**: Structured categories (*Programming Languages*, *Computer Science Fundamentals*, *AI & Development*) with no arbitrary percentages or exaggerated ratings.
  - **Featured Projects**: Detailed cards for *AI Lecture Summariser* (Ongoing, speech-to-text, NLP) and *Interview Management System* (Relational DB, SQL), complete with status badges and capability breakdowns.
  - **Education**: Detailed academic timeline featuring B.E. in CSE (AI & ML) at A.J. Institute of Engineering and Technology (CGPA: 8.67), Pre-University at Canara PUC (88.0%), and Secondary School at Nithyadar (94.72%).
  - **Soft Skills**: Clean cards highlighting Problem Solving, Communication, Teamwork, Quick Learning, Adaptability, and Time Management.
  - **Interests & Languages**: Dual-column layout presenting areas of technological curiosity and spoken languages (English, Kannada, Hindi, Tulu).
  - **Contact & Connect**: Direct `mailto:` and `tel:` links, LinkedIn profile connection, interactive copy-to-clipboard buttons, and a client-side email composer.
  - **Footer**: Clean copyright, quick links, and smooth back-to-top scroll.
- **Accessible & Responsive**: Fully responsive across mobile, tablet, and desktop viewports, with keyboard focus states and reduced-motion support.
- **Zero-Dependency Instant Preview**: Includes a standalone `preview.html` file that can be double-clicked on any computer to run immediately in any web browser without needing `npm install`.

---

## 📁 Project Architecture

```
rakshitha-portfolio/
├── index.html                   # Vite HTML entry point
├── preview.html                 # Standalone instant browser preview
├── package.json                 # Dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme & color extensions
├── tsconfig.json                # TypeScript compiler config
├── tsconfig.node.json           # TypeScript config for Vite
├── vite.config.ts               # Vite configuration
├── README.md                    # Project documentation & guides
└── src/
    ├── main.tsx                 # React DOM mount point
    ├── App.tsx                  # Root app layout
    ├── index.css                # Tailwind directives & custom utilities
    ├── types/
    │   └── index.ts             # TypeScript interfaces (Project, Education, Skills, etc.)
    ├── data/
    │   └── portfolio.ts         # Single source of truth for all portfolio content
    └── components/
        ├── Navbar.tsx           # Sticky responsive navbar with mobile menu
        ├── Hero.tsx             # Hero section with headline and CTAs
        ├── SplineHero.tsx       # Reusable Spline 3D component with lazy loading & fallback
        ├── About.tsx            # Professional narrative & core pillars
        ├── Skills.tsx           # Grouped technical competencies
        ├── Projects.tsx         # Featured project cards & detail modal
        ├── Education.tsx        # Academic timeline with verified metrics
        ├── SoftSkills.tsx       # Soft skill cards
        ├── Interests.tsx        # Passions & languages known
        ├── Contact.tsx          # Direct contact cards & email composer
        └── Footer.tsx           # Minimal footer with quick links
```

---

## 🚀 Running the Project Locally

### Option 1: Instant Browser Preview (Zero Installation)
Simply double-click `preview.html` or open it with Google Chrome, Microsoft Edge, or Firefox. The full website will load immediately with all styling, interactivity, and icons enabled.

### Option 2: Vite Development Server
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended):

1. Open PowerShell or Terminal in the project directory:
   ```bash
   cd "C:\Users\Rakshitha\.gemini\antigravity\scratch\rakshitha-portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Option 3: Production Build
To create an optimized production build:
```bash
npm run build
```
The output files will be generated in the `dist/` directory, ready for deployment.

---

## ✏️ How to Update Your Portfolio Data

All personal information, project descriptions, skills, and links are kept in a single clean data file:
📂 `src/data/portfolio.ts`

- **Adding Your Spline 3D Scene URL**:
  In `src/data/portfolio.ts`, update `splineConfig`:
  ```ts
  export const splineConfig: SplineConfig = {
    sceneUrl: 'https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode',
    creatorName: 'Spline Community / Rakshitha Kotian',
    creatorUrl: 'https://spline.design',
    enableMobileScene: false,
  };
  ```
  Once updated, the `SplineHero` component will automatically load and display your interactive 3D scene!

- **Adding a GitHub URL to a project**:
  In `src/data/portfolio.ts`, locate the project in `projectsData` and update:
  ```ts
  githubUrl: 'https://github.com/rakshitha-kotian/your-repo-name'
  ```
- **Updating GPA / Academic details**:
  Update `gradeValue` under `educationData`.
- **Adding new skills**:
  Add items to `skillCategories` array.

---

## 🌐 Deployment Instructions

### Method 1: Deploy to Vercel (Recommended — Free & Instant)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Rakshitha Kotian developer portfolio"
   git branch -M main
   # Create a new repository on https://github.com and run:
   git remote add origin https://github.com/<your-username>/rakshitha-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** &rarr; **"Project"**.
   - Select your `rakshitha-portfolio` repository.
   - Framework preset will automatically be detected as **Vite**.
   - Click **"Deploy"**.
   - Your website will be live at `https://rakshitha-portfolio.vercel.app` with free SSL and automated deployments upon every push!

### Method 2: Deploy to GitHub Pages

1. In `vite.config.ts`, add the `base` property:
   ```ts
   export default defineConfig({
     base: '/rakshitha-portfolio/',
     plugins: [react()],
   });
   ```
2. In `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Install `gh-pages` and deploy:
   ```bash
   npm install -D gh-pages
   npm run deploy
   ```
