import { usePortfolio } from "../context/PortfolioContext.jsx";
import { Reveal } from "./Reveal";

export function Experience() {
  const { experience, personal } = usePortfolio();
  const hasJobs = Array.isArray(experience) && experience.length > 0;

  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400/90">Experience</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional journey
          </h2>
          {/* <p className="mt-3 max-w-xl text-slate-400">
            Uncomment or add entries in <code className="text-sky-400/80">experience</code> inside your data file.
          </p> */}
        </Reveal>

        {!hasJobs ? (
          <Reveal delay={100} className="mt-12">
            <div className="rounded-2xl border border-dashed border-surface-border bg-surface-raised/30 p-10 text-center">
              <p className="font-display text-lg text-slate-300">Ready for the next chapter</p>
              <p className="mt-2 text-slate-500">
                {personal.availability} 
                {/* — add roles here when you want them to show on the site. */}
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {experience.map((job, i) => (
              <Reveal key={`${job.role}-${i}`} delay={80 + i * 50}>
                <article className="flex h-full flex-col rounded-2xl border border-surface-border bg-gradient-to-br from-surface-raised/80 to-surface/50 p-6 shadow-lg shadow-black/20 transition hover:border-sky-500/25">
                  <p className="font-mono text-xs text-sky-400/80">{job.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{job.role}</h3>
                  <p className="text-sm font-medium text-slate-400">{job.company}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-500">{job.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
