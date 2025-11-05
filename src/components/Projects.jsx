import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Rocket, LayoutGrid, Sparkle } from 'lucide-react';

const projects = [
  {
    title: 'Nova Dashboard',
    tagline: 'Real‑time analytics with buttery smooth motion',
    icon: <LayoutGrid className="h-5 w-5 text-cyan-400" />,
    link: '#',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    title: 'Aurora UI',
    tagline: 'Design system with micro‑interaction library',
    icon: <Sparkle className="h-5 w-5 text-emerald-400" />,
    link: '#',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    title: 'Pulse Sites',
    tagline: 'Marketing pages with 3D and scroll‑based effects',
    icon: <Rocket className="h-5 w-5 text-fuchsia-400" />,
    link: '#',
    gradient: 'from-fuchsia-500/20 via-purple-500/10 to-transparent',
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.05 }}
    className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 transition-colors hover:bg-zinc-900/60"
  >
    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {project.icon}
          <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
        </div>
        <ExternalLink className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-zinc-300" />
      </div>
      <p className="mt-2 text-sm text-zinc-300">{project.tagline}</p>
    </div>
  </motion.a>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full scroll-mt-20 bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}>
            Recent Projects
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            A snapshot of things I’ve built recently. Clean code, fluid motion, and a strong eye for detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
