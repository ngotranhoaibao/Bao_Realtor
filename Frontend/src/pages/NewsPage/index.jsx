import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Newspaper,
  Sparkles,
} from "lucide-react";
import { newsArticles } from "@/data/newsArticles";

export default function NewsPage() {
  const visibleCount = Math.min(4, newsArticles.length);
  const [startIndex, setStartIndex] = useState(0);

  const visibleArticles = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, index) => {
        const articleIndex = (startIndex + index) % newsArticles.length;
        return newsArticles[articleIndex];
      }),
    [startIndex, visibleCount]
  );

  const goToPrevious = () => {
    setStartIndex((currentIndex) =>
      currentIndex === 0 ? newsArticles.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setStartIndex((currentIndex) => (currentIndex + 1) % newsArticles.length);
  };

  return (
    <section className="bg-white text-slate-900 pt-24 pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:px-6">
        <div className="space-y-2 border-b border-slate-200 pb-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-700">
            <Newspaper className="h-4 w-4" /> Tin tức The Lumia
          </p>
          <h1 className="max-w-3xl text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Tin tức và phân tích đầu tư The Lumia
          </h1>
          <p className="max-w-2xl text-slate-600 text-sm md:text-base leading-relaxed">
            Chọn bài viết bạn muốn đọc để xem thông tin vị trí, hạ tầng và cơ
            hội đầu tư theo góc nhìn thực tế.
          </p>
        </div>

        <div className="relative">
          {newsArticles.length > visibleCount && (
            <>
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Xem bài viết trước"
                className="absolute left-0 top-1/2 z-10 inline-flex h-10 w-10 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-md transition hover:border-amber-300 hover:text-amber-700 md:-translate-x-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Xem bài viết tiếp theo"
                className="absolute right-0 top-1/2 z-10 inline-flex h-10 w-10 translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-md transition hover:border-amber-300 hover:text-amber-700 md:translate-x-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {visibleArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/tin-tuc/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-32 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-amber-700 font-semibold">
                      {article.tag}
                    </p>
                    <Sparkles className="h-4 w-4 text-amber-600" />
                  </div>
                  <h2 className="mt-3 text-base md:text-lg font-semibold text-slate-900 leading-snug">
                    {article.title}
                  </h2>
                  <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-500">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-amber-700">
                      Đọc bài viết <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
