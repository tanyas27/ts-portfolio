export const personalInfo = {
  name: "Tanya Singh",
  title: "Lead Frontend Developer",
  tagline: "Building the future at the intersection of Code & AI",
  email: "tanyacs27@gmail.com",
  location: "India",
  bio: `I'm a Lead Frontend Developer with 7+ years of experience crafting
high-performance web applications. I specialize in React ecosystems,
modern TypeScript architectures, and integrating AI capabilities into
user-facing products. I lead teams that ship fast, iterate often, and
obsess over developer experience.`,
  socials: {
    github: "https://github.com/tanyas27",
    linkedin: "https://linkedin.com/in/tanyas27",
    medium: "https://tanyas27.medium.com/",
  },
};

export const skills = [
  {
    category: "Frontend Core",
    items: [
      { name: "React / Next.js", level: 97 },
      { name: "TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Vue.js / Nuxt", level: 80 },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "LLM Integration", level: 90 },
      { name: "Prompt Engineering", level: 92 },
      { name: "AI/ML APIs", level: 85 },
      { name: "RAG Pipelines", level: 78 },
    ],
  },
  {
    category: "Architecture",
    items: [
      { name: "System Design", level: 88 },
      { name: "Micro-Frontends", level: 85 },
      { name: "Design Systems", level: 92 },
      { name: "Performance Optimization", level: 90 },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "CI/CD Pipelines", level: 82 },
      { name: "Docker / K8s", level: 75 },
      { name: "Testing (Jest/Playwright)", level: 88 },
      { name: "Git / GitHub Actions", level: 90 },
    ],
  },
];

export const experience = [
  {
    role: "Lead Frontend Developer",
    company: "Princess Auto",
    period: "2022 — Present",
    description:
      "Leading a team of 8 frontend engineers building AI-powered analytics dashboards. Architected a real-time data visualization platform serving 50K+ daily users. Reduced bundle size by 40% and improved LCP by 2.1s.",
    tech: ["Next.js", "TypeScript", "D3.js", "WebSockets", "OpenAI API"],
  },
  {
    role: "Senior Frontend Engineer",
    company: "CloudSync Technologies",
    period: "2020 — 2022",
    description:
      "Built and maintained a micro-frontend architecture for a SaaS platform with 200+ enterprise clients. Designed a shared component library used across 12 product teams.",
    tech: ["React", "Module Federation", "Storybook", "GraphQL", "AWS"],
  },
  {
    role: "Frontend Engineer",
    company: "PixelForge Studios",
    period: "2018 — 2020",
    description:
      "Developed interactive web experiences and progressive web apps for major brand campaigns. Implemented complex animations and 3D visualizations that increased user engagement by 65%.",
    tech: ["React", "Three.js", "GSAP", "Node.js", "Firebase"],
  },
  {
    role: "Junior Developer",
    company: "StartupHub",
    period: "2017 — 2018",
    description:
      "Full-stack development for early-stage startups. Built MVPs that helped 3 startups secure seed funding. Rapidly prototyped features across web and mobile platforms.",
    tech: ["JavaScript", "React", "Express.js", "MongoDB", "React Native"],
  },
];

export const projects = [
  {
    title: "AI Code Reviewer",
    description:
      "An AI-powered code review tool that analyzes pull requests, suggests improvements, and detects potential bugs using LLM pipelines. Integrated with GitHub Actions for seamless CI/CD workflows.",
    tech: ["Next.js", "OpenAI", "GitHub API", "Tailwind", "Vercel"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Neural Design System",
    description:
      "A comprehensive design system with 60+ components, AI-assisted theming, and automatic accessibility auditing. Used across 4 product teams serving 1M+ users.",
    tech: ["React", "TypeScript", "Storybook", "Figma API", "Chromatic"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "RealTime Analytics Dashboard",
    description:
      "High-performance dashboard processing 10K+ events/sec with real-time charts, anomaly detection, and predictive insights powered by ML models.",
    tech: ["Next.js", "D3.js", "WebSockets", "Python", "TensorFlow.js"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "PromptCraft Studio",
    description:
      "A visual prompt engineering workspace for building, testing, and versioning LLM prompts. Features A/B testing, cost tracking, and team collaboration.",
    tech: ["React", "Claude API", "PostgreSQL", "Prisma", "Vercel AI SDK"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    description:
      "An AI-powered portfolio generator that creates custom developer portfolios from GitHub profiles and resume data, with multiple themes and export options.",
    tech: ["Next.js", "OpenAI", "Puppeteer", "Tailwind", "Supabase"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "DevFlow CLI",
    description:
      "A developer productivity CLI tool that automates project scaffolding, manages environment configs, and integrates with popular dev tools and services.",
    tech: ["Node.js", "TypeScript", "Commander.js", "Ink", "GitHub API"],
    link: "#",
    github: "#",
    featured: false,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
