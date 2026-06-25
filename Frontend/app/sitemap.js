import { newsArticles } from "@/data/newsArticles";

const baseUrl = "https://s-lighttower.id.vn";

export default function sitemap() {
  const staticPages = ["", "blog", "du-an"].map((path) => ({
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
