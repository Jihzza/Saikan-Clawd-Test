export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  bio: string;
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
  },
  {
    slug: "daniel-cluckins",
    name: "Daniel Cluckins",
    tagline: "Consultations and coaching.",
    summary:
      "Individual consultations and coaching services, built around actionable guidance and practical execution.",
  },
  {
    slug: "perspectiv",
    name: "Perspectiv",
    tagline: "B2B automation & process centralization.",
    summary:
      "B2B software for automation and process centralization — helping teams reduce friction and run faster.",
  },
  {
    slug: "senti",
    name: "Senti",
    tagline: "AI assistant for life, goals, and relationships.",
    summary:
      "An AI assistant to support day-to-day life management — goals, relationships, and consistency.",
  },
  {
    slug: "wingy",
    name: "Wingy",
    tagline: "Dating app for real connections.",
    summary:
      "A dating app designed around authenticity and real connections.",
  },
  {
    slug: "clucks",
    name: "Clucks",
    tagline: "Productive content and meaningful connections.",
    summary:
      "A platform for productive content and meaningful connections — signal over noise.",
  },
  {
    slug: "cluckers",
    name: "Cluckers",
    tagline: "A social club for activity and connection.",
    summary:
      "A social club concept designed to foster activity, community, and connection.",
  },
];

export const TEAM: TeamMember[] = [
  {
    slug: "daniel-alves",
    name: "Daniel Alves",
    title: "CEO & Founder",
    bio: "Leads Saikan’s vision and venture strategy.",
  },
  {
    slug: "rafael-matias",
    name: "Rafael Matias",
    title: "CTO & Co-Founder",
    bio: "Owns engineering, systems, and the execution of Saikan’s products.",
  },
  {
    slug: "goncalo-marques",
    name: "Gonçalo Marques",
    title: "Co-Founder & Operations Assistant",
    bio: "Supports operations and execution across ventures.",
  },
  {
    slug: "guilherme-bartolomeu",
    name: "Guilherme Bartolomeu",
    title: "COO",
    bio: "Leads operations and keeps the machine running smoothly.",
  },
  {
    slug: "ines-leal",
    name: "Inês Leal",
    title: "Secretary",
    bio: "Keeps schedules, coordination, and administrative details tight.",
  },
  {
    slug: "cristiano-viegas",
    name: "Cristiano Viegas",
    title: "Operations & Development",
    bio: "Supports operational execution and product development.",
  },
  {
    slug: "lars-snoeijink",
    name: "Lars Snoeijink",
    title: "Developer & Product Manager",
    bio: "Architecture-minded builder focused on systems, clarity, and delivery.",
  },
  {
    slug: "xuelin-luo",
    name: "Xuelin Luo",
    title: "Developer & Product Manager",
    bio: "Frontend-focused builder supporting product delivery and iteration.",
  },
  {
    slug: "oliver-vega",
    name: "Oliver Vega",
    title: "Developer & Sales",
    bio: "Builds frontend experiences and supports growth through sales.",
  },
  {
    slug: "francisco-ramalhao",
    name: "Francisco Ramalhão",
    title: "UI Designer & Coordinator",
    bio: "Designs clean, usable interfaces and coordinates design execution.",
  },
  {
    slug: "joao-queiros",
    name: "João Queirós",
    title: "Chief Community Officer",
    bio: "Builds community and helps ventures grow through connection.",
  },
  {
    slug: "paulo-leao",
    name: "Paulo Leão",
    title: "Advisor",
    bio: "Provides guidance and strategic input across initiatives.",
  },
  {
    slug: "francisco-alves",
    name: "Francisco Alves",
    title: "Advisor",
    bio: "Advisor supporting strategy and execution.",
  },
  {
    slug: "jessica-megane",
    name: "Jéssica Megane",
    title: "Advisor",
    bio: "Advisor supporting key decisions and operations.",
  },
  {
    slug: "kelvin-thiago",
    name: "Kelvin Thiago",
    title: "Advisor",
    bio: "Advisor supporting growth and venture development.",
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
