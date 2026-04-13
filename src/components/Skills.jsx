import { usePortfolio } from "../context/PortfolioContext.jsx";
import { Reveal } from "./Reveal";

export function Skills() {
  const { skills, tools } = usePortfolio();

  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400/90">Skills</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tech I work with
          </h2>
          {/* <p className="mt-3 max-w-xl text-slate-400">
            Detailed topics I know in each technology — edit in your data file.
          </p> */}
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {skills.map((skill, i) => (
            <Reveal key={skill.language} delay={60 + i * 40}>
              <div className="rounded-2xl border border-surface-border bg-surface-raised/40 p-6 shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-sky-500/25">
                <h3 className="font-display text-xl font-semibold text-white mb-4">{skill.language}</h3>
                <ul className="space-y-2">
                  {skill.topics.map((topic) => (
                    <li key={topic} className="flex items-center text-slate-300">
                      <span className="mr-2 text-sky-400">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14">
          <h3 className="font-display text-lg font-semibold text-white">Tools & workflow</h3>
          {/* <p className="mt-2 text-sm text-slate-500">Edit the tools array in <code className="text-sky-400/80">portfolioData.js</code>.</p> */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-surface-border bg-slate-800/40 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-sky-500/30 hover:bg-sky-500/5"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
