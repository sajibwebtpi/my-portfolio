import { usePortfolio } from "../context/PortfolioContext.jsx";
import { Reveal } from "./Reveal";

export function Education() {
  const { education } = usePortfolio();

  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-surface-border bg-surface-raised/15 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400/90">Education</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic background
          </h2>
          {/* <p className="mt-3 max-w-xl text-slate-400">Update degrees and results in your central data file.</p> */}
        </Reveal>

        <div className="relative mt-14 space-y-0">
          <div
            className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-sky-500/50 via-surface-border to-violet-500/40 md:left-[15px]"
            aria-hidden
          />
          <ul className="space-y-10">
            {education.map((item, i) => (
              <Reveal key={`${item.degree}-${i}`} delay={80 + i * 60}>
                <li className="relative flex gap-6 md:gap-8">
                  <span className="relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sky-500/40 bg-surface-raised shadow-[0_0_20px_rgba(56,189,248,0.15)] md:h-8 md:w-8">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                  </span>
                  <article className="flex-1 rounded-2xl border border-surface-border bg-surface/80 p-6 shadow-xl shadow-black/25 transition hover:border-sky-500/20">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">{item.degree}</h3>
                        <p className="mt-1 text-sky-400/90">{item.institution}</p>
                      </div>
                      <span className="shrink-0 rounded-lg border border-surface-border bg-white/5 px-3 py-1 font-mono text-xs text-slate-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-emerald-400/90">{item.result}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                  </article>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
