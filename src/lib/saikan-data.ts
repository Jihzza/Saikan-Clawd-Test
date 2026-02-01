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
    image: "/assets/ventures/RefLab.svg",
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
    image: "/assets/ventures/Daniel Cluckins.svg",
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
    image: "/assets/ventures/Perspectiv.svg",
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
    image: "/assets/ventures/Senti.svg",
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
    image: "/assets/ventures/Wingy.svg",
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
    // NOTE: asset file is named "Clucls.svg" in repo (typo). We can rename to "Clucks.svg" later.
    image: "/assets/ventures/Clucls.svg",
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
    image: "/assets/ventures/Cluckers.svg",
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
    image: "/assets/team/daniel-alves.jpg",
  },
  {
    slug: "rafael-matias",
    name: "Rafael Matias",
    title: "CTO & Co-Founder",
    bio: "Owns engineering, systems, and the execution of Saikan’s products.",
    image: "/assets/team/rafael-matias.jpg",
  },
  {
    slug: "goncalo-marques",
    name: "Gonçalo Marques",
    title: "Co-Founder & Operations Assistant",
    bio: "Supports operations and execution across ventures.",
    image: "/assets/team/goncalo-marques.jpg",
  },
  {
    slug: "guilherme-bartolomeu",
    name: "Guilherme Bartolomeu",
    title: "COO",
    bio: "Leads operations and keeps the machine running smoothly.",
    image: "/assets/team/guilherme-bartolomeu.jpg",
  },
  {
    slug: "ines-leal",
    name: "Inês Leal",
    title: "Secretary",
    bio: "Keeps schedules, coordination, and administrative details tight.",
    image: "/assets/team/ines-leal.jpeg",
  },
  {
    slug: "cristiano-viegas",
    name: "Cristiano Viegas",
    title: "Operations & Development",
    bio: "Supports operational execution and product development.",
    image: "/assets/team/cristiano-viegas.jpg",
  },
  {
    slug: "lars-snoeijink",
    name: "Lars Snoeijink",
    title: "Developer & Product Manager",
    bio: "Architecture-minded builder focused on systems, clarity, and delivery.",
    image: "/assets/team/lars-snoeijink.jpg",
  },
  {
    slug: "xuelin-luo",
    name: "Xuelin Luo",
    title: "Developer & Product Manager",
    bio: "Frontend-focused builder supporting product delivery and iteration.",
    image: "/assets/team/xuelin-luo.jpeg",
  },
  {
    slug: "oliver-vega",
    name: "Oliver Vega",
    title: "Developer & Sales",
    bio: "Builds frontend experiences and supports growth through sales.",
    image: "/assets/team/oliver-vega.jpg",
  },
  {
    slug: "francisco-ramalhao",
    name: "Francisco Ramalhão",
    title: "UI Designer & Coordinator",
    bio: "Designs clean, usable interfaces and coordinates design execution.",
    image: "/assets/team/francisco-ramalhao.jpg",
  },
  {
    slug: "joao-queiros",
    name: "João Queirós",
    title: "Chief Community Officer",
    bio: "Builds community and helps ventures grow through connection.",
    image: "/assets/team/joao-queiros.jpg",
  },
  {
    slug: "paulo-leao",
    name: "Paulo Leão",
    title: "Advisor",
    bio: "Provides guidance and strategic input across initiatives.",
    image: "/assets/team/paulo-leao.jpg",
  },
  {
    slug: "francisco-alves",
    name: "Francisco Alves",
    title: "Advisor",
    bio: "Advisor supporting strategy and execution.",
    image: "/assets/team/francisco-alves.jpg",
  },
  {
    slug: "jessica-megane",
    name: "Jéssica Megane",
    title: "Advisor",
    bio: "Advisor supporting key decisions and operations.",
    image: "/assets/team/jessica-megane.jpg",
  },
  {
    slug: "kelvin-thiago",
    name: "Kelvin Thiago",
    title: "Advisor",
    bio: "Advisor supporting growth and venture development.",
    image: "/assets/team/kelvin-thiago.jpg",
  },
  {
    slug: "kelly-de-ruiter",
    name: "Kelly de Ruiter",
    title: "Team",
    bio: "Team member.",
    image: "/assets/team/kelly-de-ruiter.jpg",
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
