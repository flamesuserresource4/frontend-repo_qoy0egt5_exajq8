import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { name: 'Email', icon: Mail, href: 'mailto:hello@example.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/' },
];

const Contact = () => {
  return (
    <section id="contact" className="relative w-full scroll-mt-20 bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}>
            Contact & Socials
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            I’m open to collaborations and new opportunities. Reach out or find me online below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map(({ name, icon: Icon, href }, i) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 hover:bg-zinc-900/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-zinc-700">
                <Icon className="h-5 w-5 text-zinc-200" />
              </div>
              <div>
                <div className="font-medium text-zinc-100">{name}</div>
                <div className="text-xs text-zinc-400">{href.replace('https://', '')}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
};

export default Contact;
