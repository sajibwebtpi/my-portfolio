import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext.jsx";
import { Reveal } from "./Reveal";
import { SocialLinksRow } from "./SocialLinks.jsx";

export function Contact() {
  const { personal } = usePortfolio();
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    const form = e.target;
    form.reset();
    window.setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400/90">Contact</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something
            </h2>
            <p className="mt-3 max-w-md text-slate-400">
              Prefer email? Reach out directly — or use the form (wire it to a backend when you&apos;re ready).
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <span className="text-slate-500">Email</span>
                <br />
                <a href={`mailto:${personal.email}`} className="font-medium text-sky-400 hover:text-sky-300">
                  {personal.email}
                </a>
              </li>
              <li>
                <span className="text-slate-500">Phone</span>
                <br />
                <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="font-medium text-slate-300 hover:text-white">
                  {personal.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-500">Location</span>
                <br />
                <span className="text-slate-300">{personal.location}</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">Social</p>
              <SocialLinksRow personal={personal} />
            </div>
          </Reveal>

          <Reveal delay={120} className="max-w-xl lg:max-w-none">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-surface-border bg-surface-raised/40 p-6 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-slate-100 placeholder-slate-600 outline-none ring-sky-500/0 transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/30"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-surface-border bg-surface px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/30"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-xl bg-sky-500 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-surface-raised"
              >
                Send message
              </button>

              {status === "sent" && (
                <p className="mt-4 text-center text-sm text-emerald-400" role="status">
                  Thanks! Connect a backend or service (Formspree, EmailJS) to receive messages.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
