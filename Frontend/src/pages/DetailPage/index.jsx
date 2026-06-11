import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Newspaper,
  Sparkles,
  TrendingUp,
  CalendarDays,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { newsArticles } from "@/data/newsArticles";

export default function DetailPage() {
  const { slug } = useParams();
  const article = newsArticles.find((item) => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!article) return;

    const articleUrl = `https://thelumia.asia/tin-tuc/${article.slug}`;
    const articleTitle = `${article.seoTitle || article.title} | The Lumia Đà Nẵng`;
    const articleDescription = article.seoDescription || article.summary;
    const articleImage = `https://thelumia.asia${article.image}`;
    const keywordContent = article.keywords?.join(", ");

    document.title = articleTitle;

    const setMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const [name, content] = attribute;
        element.setAttribute(name, content);
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    setMeta(
      'meta[name="description"]',
      ["name", "description"],
      articleDescription,
    );
    if (keywordContent) {
      setMeta('meta[name="keywords"]', ["name", "keywords"], keywordContent);
    }
    setMeta('meta[property="og:type"]', ["property", "og:type"], "article");
    setMeta('meta[property="og:url"]', ["property", "og:url"], articleUrl);
    setMeta(
      'meta[property="og:title"]',
      ["property", "og:title"],
      articleTitle,
    );
    setMeta(
      'meta[property="og:description"]',
      ["property", "og:description"],
      articleDescription,
    );
    setMeta(
      'meta[property="og:image"]',
      ["property", "og:image"],
      articleImage,
    );
    setMeta(
      'meta[name="twitter:title"]',
      ["name", "twitter:title"],
      articleTitle,
    );
    setMeta(
      'meta[name="twitter:description"]',
      ["name", "twitter:description"],
      articleDescription,
    );
    setMeta(
      'meta[name="twitter:image"]',
      ["name", "twitter:image"],
      articleImage,
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", articleUrl);

    let articleSchema = document.querySelector("#article-schema");
    if (!articleSchema) {
      articleSchema = document.createElement("script");
      articleSchema.id = "article-schema";
      articleSchema.type = "application/ld+json";
      document.head.appendChild(articleSchema);
    }
    articleSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: article.title,
          description: articleDescription,
          image: [articleImage],
          mainEntityOfPage: articleUrl,
          author: {
            "@type": "Organization",
            name: "The Lumia Đà Nẵng",
          },
          publisher: {
            "@type": "Organization",
            name: "The Lumia Đà Nẵng",
            logo: {
              "@type": "ImageObject",
              url: "https://thelumia.asia/the-lumia-da-nang-logo-white.png",
            },
          },
          datePublished: "2026-06-10",
          dateModified: "2026-06-11",
          keywords: article.keywords,
          articleSection: article.category,
          inLanguage: "vi-VN",
        },
        ...(article.faqs?.length
          ? [
              {
                "@type": "FAQPage",
                mainEntity: article.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ]
          : []),
      ],
    });
  }, [article]);

  if (!article) {
    return (
      <section className="min-h-screen bg-slate-950 text-white px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Tin tức không tồn tại
          </p>
          <h1 className="mt-4 text-3xl font-black">
            Bài viết này hiện chưa được cập nhật.
          </h1>
          <p className="mt-4 text-slate-300">
            Vui lòng quay lại danh sách tin tức hoặc liên hệ tư vấn để nhận
            thông tin mới nhất.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-semibold"
          >
            <ArrowLeft className="h-4 w-4" /> Quay lại trang chủ
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white px-4 py-24 text-slate-900 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <Link
          to="/#tin-tuc"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800"
        >
          <ArrowLeft className="h-4 w-4" /> Quay lại phần tin tức
        </Link>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-8 p-6 md:p-10 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-700 font-semibold">
                {article.tag}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
                {article.title}
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {article.summary}
              </p>

              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-600">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  {article.category}
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  Đầu tư bền vững
                </span>
              </div>

              {article.keywords?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.keywords.slice(0, 6).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-amber-100"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-amber-700" /> Cập nhật
                  mới
                </span>
                <span className="inline-flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-amber-700" /> Phân tích
                  đầu tư
                </span>
                <span className="inline-flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-amber-700" /> Bài báo
                  chuyên sâu
                </span>
              </div>
            </div>

            <aside className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-amber-800">
                Nội dung chính
              </h2>
              <ul className="mt-5 space-y-4 text-sm md:text-base text-slate-700">
                {article.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Sparkles className="mt-1 h-4 w-4 text-amber-700 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-10">
            <button
              type="button"
              onClick={() => setSelectedImage(article.image)}
              className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Xem ảnh lớn"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-[280px] w-full rounded-[calc(1.5rem-0.25rem)] object-cover md:h-[360px]"
              />
            </button>

            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {article.gallery.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label="Xem ảnh lớn"
                >
                  <img
                    src={image}
                    alt={article.title}
                    className="h-36 w-full rounded-[calc(1rem-0.375rem)] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 border-t border-slate-200 p-6 md:p-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-slate-700">
                {article.excerpt}
              </p>

              {article.sections.map((section) => (
                <section key={section.heading} className="space-y-3">
                  <h2 className="text-2xl font-bold leading-snug text-slate-900">
                    {section.heading}
                  </h2>
                  {(Array.isArray(section.content)
                    ? section.content
                    : [section.content]
                  ).map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-slate-700 md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              {article.faqs?.length > 0 && (
                <section className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Câu hỏi thường gặp về {article.title}
                  </h2>
                  {article.faqs.map((faq) => (
                    <div key={faq.question} className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </section>
              )}
            </div>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-bold text-slate-900">
                Cần tư vấn chọn sản phẩm phù hợp?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Nhận phân tích vị trí, công năng khai thác và phương án dòng
                tiền theo từng nhu cầu đầu tư tại The Lumia Đà Nẵng.
              </p>
              <Link
                to="/#lien-he"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-800"
              >
                Liên hệ tư vấn <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </article>
      </div>

      <Dialog
        open={Boolean(selectedImage)}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="sm:max-w-7xl w-[95vw] border border-slate-200 bg-slate-950/95 p-0 shadow-2xl">
          <div className="max-h-[92vh] overflow-auto p-2 md:p-3">
            <img
              src={selectedImage ?? article.image}
              alt={article.title}
              className="mx-auto max-h-[88vh] w-full rounded-2xl object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
