import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import DetailPage from "../../../src/legacy-pages/DetailPage";
import { newsArticles } from "../../../src/data/newsArticles";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  const articleUrl = `https://thelumia.asia/tin-tuc/${slug}`;

  return {
    title: `${article.title} | The Lumia Đà Nẵng`,
    description: article.excerpt || article.summary,
    canonical: articleUrl,
    openGraph: {
      type: "article",
      url: articleUrl,
      title: article.title,
      description: article.excerpt || article.summary,
      images: article.image ? [{ url: article.image }] : [],
      publishedTime: article.date,
      authors: ["The Lumia Đà Nẵng"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt || article.summary,
      image: article.image,
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug) || null;

  if (!article) {
    return null;
  }

  return (
    <>
      <Header />
      <DetailPage article={article} />
      <Footer />
      <ArticleJsonLd article={article} slug={slug} />
    </>
  );
}

// JSON-LD Article Schema
function ArticleJsonLd({ article, slug }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt || article.summary,
    image: article.image || "https://thelumia.asia/logo.png",
    datePublished: article.date || new Date().toISOString(),
    dateModified: article.date || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "The Lumia Đà Nẵng",
      url: "https://thelumia.asia",
    },
    publisher: {
      "@type": "Organization",
      name: "The Lumia Đà Nẵng",
      logo: {
        "@type": "ImageObject",
        url: "https://thelumia.asia/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thelumia.asia/tin-tuc/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
