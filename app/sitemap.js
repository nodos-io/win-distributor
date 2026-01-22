import { getSiteUrl, toAbsoluteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/plan-gamer",
  "/politica-privacidad",
];

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return routes.map((route) => ({
    url: toAbsoluteUrl(route, siteUrl),
    lastModified,
  }));
}
