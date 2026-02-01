import type { MetadataRoute } from "next";
import { TEAM } from "@/lib/saikan-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saikan.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/ventures/`, lastModified: new Date() },
    { url: `${baseUrl}/team/`, lastModified: new Date() },
    { url: `${baseUrl}/contact/`, lastModified: new Date() },
  ];

  const teamRoutes = TEAM.map((m) => ({
    url: `${baseUrl}/team/${m.slug}/`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...teamRoutes];
}
