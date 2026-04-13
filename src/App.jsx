import { useEffect } from "react";
import { PortfolioProvider, usePortfolio } from "./context/PortfolioContext.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";

function AppShell() {
  const { personal } = usePortfolio();

  useEffect(() => {
    document.title = `${personal.name} · ${personal.role}`;
  }, [personal.name, personal.role]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <AppShell />
    </PortfolioProvider>
  );
}
