import type { MetadataRoute } from "next";

const SITE = "https://vision-group.uz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; freq: "daily" | "weekly" | "monthly" }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/web", priority: 0.9, freq: "weekly" },
    { path: "/target", priority: 0.9, freq: "weekly" },
    { path: "/target-kursi", priority: 0.8, freq: "weekly" },
    { path: "/lid-magnit", priority: 0.7, freq: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
