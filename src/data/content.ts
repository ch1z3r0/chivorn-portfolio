export const profile = {
  name: "Chul Chivorn",
  role: "Web Developer",
  location: "Cambodia",
  focus: ["payments", "auth", "backend reliability"],
  available: true,
};

export const techMarquee = [
  "Vite",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Firebase Admin",
  "Cloudflare R2",
  "AWS",
  "React",
];

export interface TechGroup {
  label: string;
  value: string;
  note: string;
}

export const techStack: TechGroup[] = [
  { label: "Frontend", value: "React, Vite", note: "routing & client state" },
  { label: "Backend", value: "Node.js, Express (ESM)", note: "MongoDB, Mongoose" },
  { label: "Admin tooling", value: "TypeScript, React, Tailwind", note: "separate dashboard app" },
  { label: "Auth", value: "Firebase Admin SDK", note: "server-side token verification" },
  { label: "Storage", value: "Cloudflare R2", note: "S3-compatible object storage" },
  { label: "Deploy", value: "AWS", note: "HTTPS, public domain" },
];

export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "IT Staff",
    company: "Setec Institute",
    date: "Jun 2022 – Present",
    bullets: [
      "Provide technical support to lecturers and students, resolving software and hardware issues on a daily basis.",
      "Set up and maintained network cabling to support classroom and lab connectivity.",
      "Performed routine maintenance on school computers to keep systems reliable for teaching and coursework.",
    ],
  },
];

export const education = {
  school: "Setec Institute",
  program: "MIS (Management Information System)",
  status: "completed",
};

export const languages = ["Khmer", "English"];

export const skills = [
  "Communication",
  "Problem-solving",
  "Adaptability",
  "Flexibility",
  "Teamwork",
  "Meeting deadlines",
];

export interface Project {
  number: string;
  title: string;
  status: "Done" | "In progress" | "Partial";
  description: string;
  tech: string[];
  repo: string;
  live?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Watch Shop",
    status: "Done",
    description:
      "Full-stack e-commerce platform for selling watches — React storefront, Node/Express API, and a separate admin dashboard with admin-scripts for automated store management. Deployed on Vercel.",
    tech: ["React", "Node.js", "Express"],
    repo: "https://github.com/ch1z3r0/watch-shop",
    live: "https://watch-shop-delta.vercel.app",
  },
  {
    number: "02",
    title: "STEM Bot",
    status: "Done",
    description:
      "High-performance Telegram bot for student organization membership verification. Automates registration, verifies student status, auto-generates emails and PDF receipts, and includes an admin toolset — built with asyncio to handle 100+ concurrent requests, backed by Google Sheets.",
    tech: ["Python", "python-telegram-bot", "Google Sheets API"],
    repo: "https://github.com/ch1z3r0/stem-bot",
  },
  {
    number: "03",
    title: "Setec Uniform",
    status: "In progress",
    description:
      "Internal full-stack admin tool built for Setec Institute — separate frontend and backend apps for managing school operations.",
    tech: ["TypeScript", "React", "Node.js"],
    repo: "https://github.com/ch1z3r0/setec-uniform",
  },
];

export const lessons: string[] = [
  "Env vars can be read before dotenv finishes loading — read env vars inside function bodies, not module scope.",
  "useEffect closures go stale — a polling loop needing live values needs useRef, not useState.",
  "A third party confirming success and my app recording it are separate failure domains, worth tracking separately.",
  "Multi-step mutations need validate-before-commit with a defined rollback path.",
  "Client timeouts don't cancel server-side work — a slow request can still complete after the UI stops waiting.",
  "Sandbox environments don't cover all real-world edge cases — some failure states only show up in production.",
];

export const contact = {
  email: "chivornchul2@gmail.com",
  phones: ["+855 17 644 668", "+855 86 799 667"],
  github: "https://github.com/ch1z3r0",
  telegram: "https://t.me/ChulChivorn",
  resume: "/resume.pdf",
};