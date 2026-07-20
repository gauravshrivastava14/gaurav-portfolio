import { motion } from 'framer-motion'

const TECHS = [
  'Django', 'React.js', 'Node.js', 'Express.js', 'Python', 'JavaScript',
  'PHP', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs',
  'JWT Auth', 'RBAC', 'Tailwind CSS', 'Git', 'Gunicorn', 'Netlify',
  'Socket.IO', 'MVC Architecture', 'Django', 'React.js', 'Node.js',
  'Express.js', 'Python', 'JavaScript', 'PHP', 'SQL', 'PostgreSQL',
]

export default function TechMarquee() {
  return (
    <div className="relative py-8 overflow-hidden border-y border-slate-200 dark:border-slate-800">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...TECHS, ...TECHS].map((tech, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            <span className="text-[13px] font-mono text-slate-400 dark:text-slate-500 hover:text-primary transition-colors duration-200 cursor-default">
              {tech}
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/25 shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
