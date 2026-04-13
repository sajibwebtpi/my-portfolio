import { usePortfolio } from "../context/PortfolioContext.jsx";
import { SocialLinksRow } from "./SocialLinks.jsx";

export function Footer() {
  const { personal } = usePortfolio();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 sm:text-left">
          © {year} {personal.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
          <SocialLinksRow personal={personal} />
          <a
            href={`mailto:${personal.email}`}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-slate-900/40 text-slate-500 transition hover:scale-[1.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:ring-offset-2 focus:ring-offset-surface"
            aria-label="Email"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
