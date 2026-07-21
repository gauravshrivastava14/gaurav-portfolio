import { motion } from 'framer-motion'

const TECHS = [
  'Django', 'React.js', 'Node.js', 'Express.js', 'Python', 'JavaScript',
  'PHP', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs',
  'JWT Auth', 'RBAC', 'Tailwind CSS', 'Git', 'Gunicorn', 'Netlify',
  'Socket.IO', 'MVC Architecture',
]

export default function TechMarquee() {
  return (
    <div className="relative py-5 overflow-hidden border-y border-line bg-card/60">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-paper to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-paper to-transparent pointer-events-none" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        className="flex gap-10 whitespace-nowrap"
      >
        {[...TECHS, ...TECHS, ...TECHS].map((tech, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted hover:text-primary transition-colors duration-200 cursor-default">
              {tech}
            </span>
            <span className="text-primary/60 text-[10px]">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
