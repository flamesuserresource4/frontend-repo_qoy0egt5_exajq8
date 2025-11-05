import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient vignetting for depth without blocking interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_70%_10%,rgba(82,82,91,0.35),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300 backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Available for freelance projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="font-[700] text-4xl leading-tight text-white md:text-6xl md:leading-[1.05]"
          style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}
        >
          Building modern, animated experiences for the web.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="max-w-2xl text-base text-zinc-300 md:text-lg"
        >
          I’m a front‑end engineer crafting immersive, performant interfaces with a focus on motion, clarity, and delightful details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-black transition hover:bg-white"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-900/90"
          >
            <Download className="h-4 w-4" />
            View CV
          </a>
        </motion.div>
      </div>

      {/* bottom glow accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
