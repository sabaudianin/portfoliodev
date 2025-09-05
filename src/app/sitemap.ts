import type { MetadataRoute } from "next";
import { STATIC_ROUTES, ABSOLUTE_URL } from "@/config/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return STATIC_ROUTES.map((route) => ({
    url: ABSOLUTE_URL(route),
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
