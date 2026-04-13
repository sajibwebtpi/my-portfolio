import { usePortfolio } from "../context/PortfolioContext.jsx";
import { Reveal } from "./Reveal";

const accents = [
  "from-violet-500/35 to-sky-500/20",
  "from-emerald-500/30 to-cyan-500/20",
  "from-amber-500/25 to-rose-500/20",
  "from-sky-500/30 to-indigo-500/20",
];

function isLink(href) {
  return href && href !== "#";
}

export function Projects() {
  const { projects } = usePortfolio();

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-surface-border bg-surface-raised/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400/90">Projects</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected work
          </h2>
          {/* <p className="mt-3 max-w-xl text-slate-400">
            Project cards pull name, description, tags, and links from your data file.
          </p> */}
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={80 + i * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-xl shadow-black/30 transition hover:border-sky-500/30 hover:shadow-sky-500/10">
                <div
                  className={`relative flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br ${accents[i % accents.length]}`}
                >
                  <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]" aria-hidden />
                  <span className="relative text-6xl drop-shadow-lg transition group-hover:scale-105" aria-hidden>
                    {project.icon}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-surface-border bg-slate-800/50 px-2.5 py-1 text-xs font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {isLink(project.live) ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center rounded-xl bg-sky-500 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 min-[480px]:flex-none min-[480px]:px-6"
                      >
                        Live demo
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-xl border border-surface-border bg-slate-800/40 py-3 text-sm font-medium text-slate-600 min-[480px]:flex-none min-[480px]:px-6">
                        Live soon
                      </span>
                    )}
                    {isLink(project.github) ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center rounded-xl border border-surface-border bg-surface-raised py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-300 min-[480px]:flex-none min-[480px]:px-6"
                      >
                        Source
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 items-center justify-center rounded-xl border border-surface-border py-3 text-sm text-slate-600 min-[480px]:flex-none min-[480px]:px-6">
                        Repo soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
