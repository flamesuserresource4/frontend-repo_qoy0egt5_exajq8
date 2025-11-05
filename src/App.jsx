import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

const Nav = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Profile' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'CV' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-black/60 px-4 py-2 backdrop-blur">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white" style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}>
            JD
          </a>
          <nav className="hidden gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-1.5 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-white/90 px-3 py-1.5 text-sm font-medium text-black transition hover:bg-white"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="relative w-full scroll-mt-20 bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}>
            CV Snapshot
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            A concise overview of my core skills and toolset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5"
          >
            <h3 className="text-lg font-semibold text-zinc-100">Core</h3>
            <ul className="mt-3 space-y-2 text-zinc-300">
              <li>React, TypeScript, Next.js</li>
              <li>Framer Motion, GSAP basics</li>
              <li>Responsive, a11y, performance</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5"
          >
            <h3 className="text-lg font-semibold text-zinc-100">Design</h3>
            <ul className="mt-3 space-y-2 text-zinc-300">
              <li>Motion & micro‑interactions</li>
              <li>Design systems, tokens</li>
              <li>Prototyping, Figma</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5"
          >
            <h3 className="text-lg font-semibold text-zinc-100">Workflow</h3>
            <ul className="mt-3 space-y-2 text-zinc-300">
              <li>Git, CI, code reviews</li>
              <li>Performance budgets</li>
              <li>UX collaboration</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-6 text-sm text-zinc-400">
          Full CV available upon request.
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black selection:bg-white selection:text-black">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <footer className="border-t border-zinc-900 bg-black py-8 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Jordan Doe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
