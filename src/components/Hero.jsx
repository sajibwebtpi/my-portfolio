import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext.jsx";
import { Reveal } from "./Reveal";

export function Hero() {
  const { personal } = usePortfolio();
  const [heroImgOk, setHeroImgOk] = useState(true);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const hasResume = personal.resumeUrl && personal.resumeUrl !== "#";

  const heroPhotoSrc = personal.heroImg || personal.img;

  const imageBlock = (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:mx-0 lg:max-w-none">
      <div
        className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-sky-500/35 via-violet-500/25 to-sky-500/15 opacity-90 blur-md"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface-raised shadow-2xl shadow-black/50 ring-1 ring-white/10 sm:rounded-3xl">
        {heroImgOk && heroPhotoSrc ? (
          <>
            <img
              src={heroPhotoSrc}
              alt={personal.name}
              className="profile-photo-enhance aspect-[2/3] w-full object-cover object-center sm:aspect-[3/5] lg:aspect-[3/5] lg:min-h-[440px] lg:max-h-[min(82vh,680px)]"
              onError={() => setHeroImgOk(false)}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-surface/15"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
              aria-hidden
            />
          </>
        ) : (
          <div className="flex aspect-[3/4] min-h-[320px] w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 lg:min-h-[420px]">
            <span className="font-display text-5xl font-bold text-slate-600">{personal.initials}</span>
          </div>
        )}
      </div>
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <Reveal>
        <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-surface-border bg-surface-raised/80 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-sky-300/90 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          {personal.availability}
        </p>
      </Reveal>

      <Reveal delay={80} className="mt-0">
        <p className="text-sm font-medium text-slate-500 sm:text-base">{personal.role}</p>
        <h1 className="mt-2 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>
      </Reveal>

      <Reveal delay={140} className="mt-6 max-w-xl">
        <p className="text-lg text-slate-400 sm:text-xl">{personal.tagline}</p>
      </Reveal>

      <Reveal delay={200} className="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => scrollTo("projects")}
          className="group inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-surface"
        >
          View My Work
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollTo("contact")}
          className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-surface-raised/50 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-sky-500/40 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-2 focus:ring-offset-surface"
        >
          Contact Me
        </button>
        {hasResume && (
          <a
            href={personal.resumeUrl}
            download="MD_Sajib_Resume.pdf"
            className="inline-flex items-center justify-center rounded-xl border border-dashed border-sky-500/40 bg-sky-500/5 px-6 py-3.5 text-sm font-semibold text-sky-300 transition hover:border-sky-400/60 hover:bg-sky-500/10"
          >
            Download CV
          </a>
        )}
      </Reveal>

      <Reveal delay={260} className="mt-10 flex flex-wrap gap-4 text-sm">
        <a href={`mailto:${personal.email}`} className="text-slate-500 transition hover:text-sky-400">
          {personal.email}
        </a>
        <span className="hidden text-slate-600 sm:inline">·</span>
        <span className="text-slate-500">{personal.location}</span>
      </Reveal>

      <Reveal delay={300} className="mt-14 hidden lg:block">
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <span className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-surface-border" />
          <span className="animate-float font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
            Scroll to explore
          </span>
          <span className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-surface-border" />
        </div>
      </Reveal>
    </div>
  );

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-surface pt-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-40"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 lg:px-8 lg:pb-24 lg:pt-10 xl:gap-16">
        {/* Mobile: image on top; Desktop: text left, image right */}
        <div className="order-2 flex justify-center lg:order-1 lg:justify-start">{textBlock}</div>
        <div className="order-1 lg:order-2 lg:flex lg:justify-end">{imageBlock}</div>
      </div>

      <Reveal delay={320} className="relative mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:hidden lg:px-8">
        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
          <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-surface-border" />
          <span className="animate-float font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
            Scroll to explore
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-surface-border" />
        </div>
      </Reveal>
    </section>
  );
}
