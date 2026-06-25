import { newsArticles } from "@/data/newsArticles";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://s-lighttower.id.vn";

export default function sitemap() {
  const staticPages = [""].map((path) => ({
    url: `${baseUrl}/${path}`.replace(/\/+$/, ""),
    lastModified: new Date().toISOString(),
  }));

  const articlePages = newsArticles.map((article) => ({
    url: `${baseUrl}/tin-tuc/${article.slug}`,
    lastModified: article.date
      ? new Date(article.date).toISOString()
      : new Date().toISOString(),
  }));

  return [...staticPages, ...articlePages];
}
