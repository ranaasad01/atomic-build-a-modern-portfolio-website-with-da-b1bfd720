import type { Project, SkillCategory, SocialLink } from "./types";

export const projects: Project[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Dashboard",
    description:
      "A real-time analytics dashboard for SaaS businesses with live charts, user segmentation, and revenue tracking.",
    longDescription:
      "Nexus Dashboard is a comprehensive analytics platform built for modern SaaS companies. It features real-time data visualization using WebSockets, advanced user segmentation, cohort analysis, and revenue forecasting. The dashboard supports multi-tenant architecture with role-based access control and custom report generation.",
    image: "/images/nexus-analytics-dashboard-saas.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts", "Tailwind"],
    liveUrl: "https://nexus-demo.vercel.app",
    githubUrl: "https://github.com/alexdev/nexus-dashboard",
    featured: true,
  },
  {
    slug: "orbit-ai",
    title: "Orbit AI",
    description:
      "An AI-powered writing assistant that helps teams draft, refine, and collaborate on documents in real time.",
    longDescription:
      "Orbit AI integrates GPT-4 to provide intelligent writing suggestions, grammar corrections, and tone adjustments. Teams can collaborate in real time with live cursors, comment threads, and version history. The app includes a custom prompt library, document templates, and export to PDF/Markdown.",
    image: "/images/orbit-ai-writing-assistant-app.jpg",
    tags: ["React", "Node.js", "OpenAI API", "Socket.io", "MongoDB", "Redis"],
    liveUrl: "https://orbit-ai.app",
    githubUrl: "https://github.com/alexdev/orbit-ai",
    featured: true,
  },
  {
    slug: "shopwave",
    title: "ShopWave",
    description:
      "A headless e-commerce storefront with blazing-fast performance, Stripe payments, and a custom CMS.",
    longDescription:
      "ShopWave is a modern headless e-commerce solution built with Next.js and Shopify's Storefront API. It achieves perfect Lighthouse scores through aggressive image optimization, edge caching, and ISR. Features include a custom product configurator, wishlist, and a fully accessible checkout flow.",
    image: "/images/shopwave-ecommerce-storefront-modern.jpg",
    tags: ["Next.js", "Shopify API", "Stripe", "Tailwind", "Framer Motion"],
    liveUrl: "https://shopwave-demo.vercel.app",
    githubUrl: "https://github.com/alexdev/shopwave",
    featured: true,
  },
  {
    slug: "devflow",
    title: "DevFlow",
    description:
      "A developer productivity tool that aggregates GitHub PRs, Jira tickets, and Slack threads into one unified inbox.",
    longDescription:
      "DevFlow solves context-switching fatigue for engineering teams by unifying GitHub pull requests, Jira issues, Linear tickets, and Slack notifications into a single prioritized inbox. It uses AI to surface the most urgent items and provides keyboard-first navigation for power users.",
    image: "/images/devflow-developer-productivity-tool.jpg",
    tags: ["Electron", "React", "GraphQL", "GitHub API", "Jira API", "SQLite"],
    githubUrl: "https://github.com/alexdev/devflow",
    featured: false,
  },
  {
    slug: "pulse-health",
    title: "Pulse Health",
    description:
      "A personal health tracking app with wearable integrations, trend analysis, and AI-driven wellness insights.",
    longDescription:
      "Pulse Health connects with Apple Health, Fitbit, and Garmin to aggregate fitness, sleep, and nutrition data. Machine learning models identify patterns and provide personalized recommendations. The app features beautiful data visualizations, goal tracking, and weekly health reports.",
    image: "/images/pulse-health-tracking-app-wellness.jpg",
    tags: ["React Native", "Expo", "Python", "FastAPI", "TensorFlow", "HealthKit"],
    liveUrl: "https://pulsehealth.app",
    githubUrl: "https://github.com/alexdev/pulse-health",
    featured: false,
  },
  {
    slug: "codebase-ai",
    title: "Codebase AI",
    description:
      "An intelligent code review bot that integrates with GitHub to provide automated PR feedback and security scanning.",
    longDescription:
      "Codebase AI is a GitHub App that automatically reviews pull requests using fine-tuned language models. It detects security vulnerabilities, performance bottlenecks, and style inconsistencies. Teams can configure custom rules, and the bot learns from accepted/rejected suggestions over time.",
    image: "/images/codebase-ai-code-review-github.jpg",
    tags: ["Python", "FastAPI", "GitHub API", "OpenAI", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/alexdev/codebase-ai",
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Framer Motion", level: "advanced" },
      { name: "Vue.js", level: "advanced" },
      { name: "React Native", level: "intermediate" },
      { name: "GraphQL", level: "advanced" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Python", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "Redis", level: "intermediate" },
      { name: "Prisma", level: "advanced" },
      { name: "FastAPI", level: "advanced" },
      { name: "REST APIs", level: "expert" },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: "expert" },
      { name: "Docker", level: "advanced" },
      { name: "Vercel", level: "expert" },
      { name: "AWS", level: "intermediate" },
      { name: "CI/CD", level: "advanced" },
      { name: "Figma", level: "intermediate" },
      { name: "Linux", level: "advanced" },
      { name: "Kubernetes", level: "beginner" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/alexdev", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/alexdev", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com/alexdev", icon: "Twitter" },
  { name: "Email", url: "mailto:alex@alexdev.io", icon: "Mail" },
];

export const personalInfo = {
  name: "Alex Chen",
  title: "Full-Stack Engineer",
  tagline: "I build fast, beautiful, and scalable web experiences.",
  bio: "I'm a full-stack engineer with 6+ years of experience crafting digital products that people love. I specialize in React ecosystems, Node.js backends, and cloud-native architectures. When I'm not shipping code, I'm contributing to open source, writing technical articles, or exploring the mountains.",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  yearsExperience: 6,
  projectsCompleted: 40,
  email: "alex@alexdev.io",
  resumeUrl: "/resume.pdf",
};
