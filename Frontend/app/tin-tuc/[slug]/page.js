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

  const articleUrl = `https://s-lighttower.id.vn/tin-tuc/${slug}`;
  const articleImage = article.image
    ? `https://s-lighttower.id.vn${article.image}`
    : "https://s-lighttower.id.vn/images/logo-sun-s-light-tower.avif";

  const seoTitle = `${article.seoTitle || article.title} | S-Light Tower`;
  const seoDescription =
    article.seoDescription || article.excerpt || article.summary;

  return {
    title: seoTitle,
    description: seoDescription,
    canonical: articleUrl,
    keywords: article.keywords || [],
    openGraph: {
      type: "article",
      url: articleUrl,
      title: seoTitle,
      description: seoDescription,
      images: [{ url: articleImage }],
      publishedTime: article.date,
      authors: ["S-Light Tower"],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      image: articleImage,
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
    image: article.image
      ? `https://s-lighttower.id.vn${article.image}`
      : "https://s-lighttower.id.vn/images/logo-sun-s-light-tower.avif",
    datePublished: article.date || new Date().toISOString(),
    dateModified: article.date || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "S-Light Tower",
      url: "https://s-lighttower.id.vn",
    },
    publisher: {
      "@type": "Organization",
      name: "S-Light Tower",
      logo: {
        "@type": "ImageObject",
        url: "https://s-lighttower.id.vn/images/logo-sun-s-light-tower.avif",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://s-lighttower.id.vn/tin-tuc/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
