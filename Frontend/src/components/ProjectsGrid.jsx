import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
          Dự án
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-950">
          Dự án nổi bật
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Các dự án tiêu biểu của S-Light Tower và Sun Group tại Đà Nẵng.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5"
          >
            <div className="h-64 overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between gap-3 text-sm text-slate-500">
                <span>{project.location}</span>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-950">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-7">
                {project.description}
              </p>
              <div className="mt-6 flex items-center justify-between text-base font-semibold text-slate-950">
                <span>{project.price}</span>
                <span className="text-amber-600">Xem chi tiết</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
