import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext.jsx";
import { Reveal } from "./Reveal";

export function About() {
  const { personal } = usePortfolio();
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="about" className="scroll-mt-24 border-t border-surface-border bg-surface-raised/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400/90">About</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Who I am
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">A snapshot of my background and what I care about.</p>
        </Reveal>

        <div className="mt-2 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
          <Reveal delay={100}>
            <p className="max-w-none text-lg leading-relaxed text-slate-400">{personal.about}</p>
          </Reveal>

          <Reveal delay={180}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border border-surface-border shadow-2xl shadow-black/50 ring-1 ring-white/5 sm:max-w-none lg:mx-0 lg:max-w-[320px]">
  {imgOk && personal.img ? (
    <img
      src={personal.img}
      alt={personal.name}
      className="relative h-full w-full object-cover object-[center_22%]"
      style={{
        filter: "contrast(0.85) brightness(0.88) saturate(0.95)",
      }}
      onError={() => setImgOk(false)}
    />
              ) : (
                <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-8">
                  <div className="text-center">
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 to-violet-500/20 text-3xl font-bold text-white ring-2 ring-surface-border">
                      {personal.initials}
                    </div>
                    <p className="mt-4 text-xs text-slate-500">
                      Add your photo path in <code className="text-sky-400/90">portfolioData.js</code>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
