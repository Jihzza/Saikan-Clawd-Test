export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  image?: string;
  status?: "active" | "incubating" | "concept";
  focus?: string[];
  highlights?: string[];
  link?: { label: string; href: string };
};

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
  focus?: string[];
  links?: Array<{ label: string; href: string }>;
};

export const MISSION =
  "Saikan is a holding company focused on producing profitable companies and helping entrepreneurs turn ideas into real products.";

export const VALUES: Array<{ title: string; body: string }> = [
  {
    title: "Execution",
    body: "We turn ambiguity into shipped products — with speed, discipline, and attention to detail.",
  },
  {
    title: "Leverage",
    body: "We build tools, systems, and teams that compound — not one-off wins.",
  },
  {
    title: "Integrity",
    body: "We communicate clearly, avoid hype, and focus on what is true and measurable.",
  },
  {
    title: "Ownership",
    body: "We take responsibility end-to-end and do what we say we will do.",
  },
];

export const VENTURES: Venture[] = [
  {
    slug: "reflab",
    name: "RefLab",
    tagline: "Learning platform for football referees.",
    summary:
      "A learning + tools platform for football referees — designed to improve knowledge and consistency through practice and feedback.",
    image: "/placeholders/venture.svg",
    status: "active",
    focus: ["Learning", "Practice", "Feedback"],
    highlights: [
      "Web-first experience",
      "Structured learning paths",
      "Tools built for consistency",
    ],
  },
  {
    slug: "daniel-cluckins",
    name: "Daniel Cluckins",
    tagline: "Consultations and coaching.",
    summary:
      "Individual consultations and coaching services, built around actionable guidance and practical execution.",
    image: "/placeholders/venture.svg",
    status: "active",
    focus: ["Consulting", "Coaching"],
    highlights: ["Actionable sessions", "Practical execution", "Clear next steps"],
  },
  {
    slug: "perspectiv",
    name: "Perspectiv",
    tagline: "B2B automation & process centralization.",
    summary:
      "B2B software for automation and process centralization — helping teams reduce friction and run faster.",
    image: "/placeholders/venture.svg",
    status: "incubating",
    focus: ["Automation", "Operations", "B2B"],
    highlights: ["Centralize processes", "Reduce busywork", "Operational clarity"],
  },
  {
    slug: "senti",
    name: "Senti",
    tagline: "AI assistant for life, goals, and relationships.",
    summary:
      "An AI assistant to support day-to-day life management — goals, relationships, and consistency.",
    image: "/placeholders/venture.svg",
    status: "concept",
    focus: ["Life admin", "Goals", "Relationships"],
    highlights: ["Personal systems", "Consistency", "Lightweight support"],
  },
  {
    slug: "wingy",
    name: "Wingy",
    tagline: "Dating app for real connections.",
    summary:
      "A dating app designed around authenticity and real connections.",
    image: "/placeholders/venture.svg",
    status: "concept",
    focus: ["Dating", "Authenticity"],
    highlights: ["Human-first matching", "Signal over noise", "Real conversations"],
  },
  {
    slug: "clucks",
    name: "Clucks",
    tagline: "Productive content and meaningful connections.",
    summary:
      "A platform for productive content and meaningful connections — signal over noise.",
    image: "/placeholders/venture.svg",
    status: "concept",
    focus: ["Content", "Community"],
    highlights: ["Curated signal", "Better incentives", "Meaningful connections"],
  },
  {
    slug: "cluckers",
    name: "Cluckers",
    tagline: "A social club for activity and connection.",
    summary:
      "A social club concept designed to foster activity, community, and connection.",
    image: "/placeholders/venture.svg",
    status: "concept",
    focus: ["Community", "Events"],
    highlights: ["Real-world activities", "Consistency", "Belonging"],
  },
];

export const TEAM: TeamMember[] = [
  {
    slug: "daniel-alves",
    name: "Daniel Alves",
    title: "CEO & Founder",
    bio: "Leads Saikan’s vision and venture strategy.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "rafael-matias",
    name: "Rafael Matias",
    title: "CTO & Co-Founder",
    bio: "Owns engineering, systems, and the execution of Saikan’s products.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "goncalo-marques",
    name: "Gonçalo Marques",
    title: "Co-Founder & Operations Assistant",
    bio: "Supports operations and execution across ventures.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "guilherme-bartolomeu",
    name: "Guilherme Bartolomeu",
    title: "COO",
    bio: "Leads operations and keeps the machine running smoothly.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "ines-leal",
    name: "Inês Leal",
    title: "Secretary",
    bio: "Keeps schedules, coordination, and administrative details tight.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "cristiano-viegas",
    name: "Cristiano Viegas",
    title: "Operations & Development",
    bio: "Supports operational execution and product development.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "lars-snoeijink",
    name: "Lars Snoeijink",
    title: "Developer & Product Manager",
    bio: "Architecture-minded builder focused on systems, clarity, and delivery.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "xuelin-luo",
    name: "Xuelin Luo",
    title: "Developer & Product Manager",
    bio: "Frontend-focused builder supporting product delivery and iteration.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "oliver-vega",
    name: "Oliver Vega",
    title: "Developer & Sales",
    bio: "Builds frontend experiences and supports growth through sales.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "francisco-ramalhao",
    name: "Francisco Ramalhão",
    title: "UI Designer & Coordinator",
    bio: "Designs clean, usable interfaces and coordinates design execution.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "joao-queiros",
    name: "João Queirós",
    title: "Chief Community Officer",
    bio: "Builds community and helps ventures grow through connection.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "paulo-leao",
    name: "Paulo Leão",
    title: "Advisor",
    bio: "Provides guidance and strategic input across initiatives.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "francisco-alves",
    name: "Francisco Alves",
    title: "Advisor",
    bio: "Advisor supporting strategy and execution.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "jessica-megane",
    name: "Jéssica Megane",
    title: "Advisor",
    bio: "Advisor supporting key decisions and operations.",
    image: "/placeholders/team.svg",
  },
  {
    slug: "kelvin-thiago",
    name: "Kelvin Thiago",
    title: "Advisor",
    bio: "Advisor supporting growth and venture development.",
    image: "/placeholders/team.svg",
  },
];

export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
