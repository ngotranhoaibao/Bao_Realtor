import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Newspaper,
  Sparkles,
  TrendingUp,
  CalendarDays,
} from "lucide-react";
import { newsArticles } from "@/data/newsArticles";

export default function DetailPage() {
  const { slug } = useParams();
  const article = newsArticles.find((item) => item.slug === slug);

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
          to="/tin-tuc"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800"
        >
          <ArrowLeft className="h-4 w-4" /> Quay lại danh sách tin tức
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
                  Tin tức SEO
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  Đầu tư bền vững
                </span>
              </div>

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
            <img
              src={article.image}
              alt={article.title}
              className="h-[280px] w-full rounded-3xl border border-slate-200 object-cover md:h-[360px]"
            />
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {article.gallery.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={article.title}
                  className="h-36 w-full rounded-2xl border border-slate-200 object-cover shadow-sm"
                />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
