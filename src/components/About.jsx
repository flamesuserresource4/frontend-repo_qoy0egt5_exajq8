import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Sparkles } from 'lucide-react';

const statItem = (label, value) => (
  <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
    <div className="text-sm text-zinc-400">{label}</div>
    <div className="mt-1 text-xl font-semibold text-zinc-100">{value}</div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full scroll-mt-20 bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center gap-3"
        >
          <div className="rounded-lg bg-emerald-400/10 p-2 ring-1 ring-emerald-500/20">
            <User className="h-5 w-5 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}>
            Profile & CV
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-500 opacity-20" />
                <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-zinc-100">
                  JD
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-zinc-100">Jordan Doe</div>
                <div className="text-zinc-400">Front‑End Engineer • Motion Design</div>
              </div>
            </div>

            <p className="mt-6 max-w-prose text-zinc-300">
              I specialize in crafting responsive interfaces with sophisticated animation and a deep attention to detail. My toolkit includes React, TypeScript, and motion‑driven UX.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {statItem('Experience', '5+ yrs')}
              {statItem('Projects', '30+')} 
              {statItem('Focus', 'Web / Motion')}
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
            >
              <Sparkles className="h-4 w-4 text-emerald-400" />
              Let’s work together
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6">
              <div className="mb-4 flex items-center gap-2 text-zinc-300">
                <Code2 className="h-4 w-4" />
                <span className="text-sm uppercase tracking-wider text-zinc-400">Experience</span>
              </div>
              <ul className="space-y-5">
                <li className="grid grid-cols-1 gap-2 md:grid-cols-4">
                  <div className="text-sm text-zinc-400">2023 — Present</div>
                  <div className="md:col-span-3">
                    <div className="font-medium text-zinc-100">Senior Front‑End Engineer • Aurora Labs</div>
                    <div className="text-sm text-zinc-400">Led the delivery of a motion‑rich design system; shipped complex data visualizations with 60fps animations.</div>
                  </div>
                </li>
                <li className="grid grid-cols-1 gap-2 md:grid-cols-4">
                  <div className="text-sm text-zinc-400">2021 — 2023</div>
                  <div className="md:col-span-3">
                    <div className="font-medium text-zinc-100">Front‑End Engineer • Nova Studio</div>
                    <div className="text-sm text-zinc-400">Built delightful product experiences in React/Next.js; collaborated closely with design on micro‑interactions.</div>
                  </div>
                </li>
                <li className="grid grid-cols-1 gap-2 md:grid-cols-4">
                  <div className="text-sm text-zinc-400">2019 — 2021</div>
                  <div className="md:col-span-3">
                    <div className="font-medium text-zinc-100">UI Developer • Pixel Foundry</div>
                    <div className="text-sm text-zinc-400">Implemented component libraries and animation guidelines; improved performance and accessibility.</div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
