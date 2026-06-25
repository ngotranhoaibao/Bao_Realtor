import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsArticles } from "@/data/newsArticles";
import Link from "next/link";

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-2xl font-bold">Tin tức & Blog</h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/tin-tuc/${a.slug}`}
                className="block border rounded-lg overflow-hidden"
              >
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-semibold">{a.title}</h3>
                  <p className="text-sm text-slate-600">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
