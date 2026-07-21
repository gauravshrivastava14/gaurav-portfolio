import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const categories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Responsive UI Design', level: 87 },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Django (Python)', level: 88 },
      { name: 'Node.js / Express.js', level: 82 },
      { name: 'PHP', level: 74 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'JWT / RBAC / MVC', level: 85 },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MySQL', level: 76 },
      { name: 'MongoDB', level: 78 },
      { name: 'Database Design', level: 80 },
      { name: 'SQL Queries', level: 84 },
    ],
  },
  {
    label: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Netlify / Vercel', level: 82 },
      { name: 'Gunicorn / Nginx', level: 64 },
      { name: 'pgAdmin / VS Code', level: 88 },
      { name: 'Python', level: 86 },
    ],
  },
]

function DotMatrix({ level, inView, delay }) {
  const filled = Math.round(level / 10)
  return (
    <span className="flex items-center gap-[3px]">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + i * 0.03 }}
          className={`inline-block w-[6px] h-[6px] ${
            i < filled ? 'bg-primary' : 'bg-transparent border border-line'
          }`}
        />
      ))}
    </span>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="skills" ref={ref} className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-3">
            File 02 / Capabilities
          </div>
          <h2 className="font-serif font-black text-5xl md:text-6xl text-ink">
            Skills<span className="text-primary">.</span>
          </h2>
          <div className="h-px bg-line mt-8" />
        </motion.div>

        {/* Skill ledgers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="flex items-baseline justify-between border-b-2 border-ink pb-2 mb-5">
                <h3 className="font-serif font-bold text-ink text-base">{cat.label}</h3>
                <span className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase">
                  {String(ci + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="space-y-4">
                {cat.skills.map((s, si) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13px] text-ink/80">{s.name}</span>
                      <span className="font-mono text-[10px] text-muted">{s.level}</span>
                    </div>
                    <DotMatrix level={s.level} inView={inView} delay={ci * 0.1 + si * 0.05} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 border border-line bg-card p-6 grid sm:grid-cols-2 gap-6"
        >
          {[
            { lang: 'English', level: 'Professional working proficiency', dots: 9 },
            { lang: 'Hindi', level: 'Native / Fluent', dots: 10 },
          ].map(({ lang, level, dots }) => (
            <div key={lang} className="flex items-center justify-between gap-4">
              <div>
                <div className="font-serif font-bold text-ink text-base">{lang}</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted mt-0.5">{level}</div>
              </div>
              <DotMatrix level={dots * 10} inView={inView} delay={0.6} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
