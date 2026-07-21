import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: '2', label: 'Govt. portals built' },
  { value: '4+', label: 'Tech stacks' },
  { value: '7.0', label: 'Academic CGPA' },
  { value: '3+', label: 'Years coding' },
]

const traits = [
  {
    title: 'Security-First Mindset',
    desc: 'Designed RBAC systems for national-level government portals — security isn\'t an afterthought, it\'s the foundation.',
  },
  {
    title: 'Self-Sufficient Builder',
    desc: 'Built complete frontend, backend, and database architectures independently — from auth systems to production deployment.',
  },
  {
    title: 'Practical Over Theoretical',
    desc: 'Government deadlines and real user bases teach you what academic projects don\'t. I write code that survives production.',
  },
  {
    title: 'Structured Collaboration',
    desc: 'Worked directly under Inspector General-level supervision on national projects — I know how to operate in high-accountability environments.',
  },
]

const facts = [
  ['DOB', '14 April 2005'],
  ['Location', 'Satna, MP, India'],
  ['Degree', 'B.Tech CSE (2022–26)'],
  ['University', 'VITS, RGPV'],
  ['Email', 'gauravshrivastava.web@gmail.com'],
  ['Phone', '+91 70899 55082'],
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }),
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section id="about" ref={ref} className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-3">
            File 01 / Background
          </div>
          <h2 className="font-serif font-black text-5xl md:text-6xl text-ink">
            About<span className="text-primary">.</span>
          </h2>
          <div className="h-px bg-line mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-14 items-start">
          {/* Bio column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="dropcap text-ink/85 leading-[1.8] text-[15px]"
            >
              I'm a 20-year-old Computer Science undergraduate at Vindhya Institute of Technology
              and Science (RGPV), Satna — and I've already shipped two production systems for the
              Government of India. Not side projects. Real portals used by actual officers at the
              national level.
            </motion.p>

            {[
              `The PRATHAM portal I built for the Railway Protection Force handles training and HR aptitude data for a Pan-India deployment. I designed the entire system — Django backend, PostgreSQL schema, role-based access for Zonal, Divisional, and Post-level users — working directly under the IG, RPF Lucknow.`,
              `I don't wait to "feel ready." I pick up what the project needs — whether that's Django, PHP, React, or raw PostgreSQL — and I ship. That's the only way to build things that matter before your degree is done.`,
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="text-muted leading-[1.8] text-[15px]"
              >
                {text}
              </motion.p>
            ))}

            {/* Ledger stats */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-2 sm:grid-cols-4 border border-line divide-x divide-line mt-10"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="p-5 text-center bg-card">
                  <div className="font-serif font-black text-4xl text-ink mb-1">
                    {value}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted leading-relaxed">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Record card */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="border border-line bg-card p-6 mt-4"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary mb-4">
                On record
              </div>
              <div className="space-y-3">
                {facts.map(([key, val]) => (
                  <div key={key} className="flex items-baseline text-[13px]">
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted shrink-0">{key}</span>
                    <span className="leader-dots" />
                    <span className="text-ink text-right truncate max-w-[60%]">{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Traits — numbered index */}
          <div className="lg:col-span-5">
            {traits.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="group border-b border-line py-6 first:border-t hover:bg-card/70 transition-colors duration-300 px-2 -mx-2"
              >
                <div className="flex items-start gap-5">
                  <span className="font-serif font-black text-2xl text-line group-hover:text-primary transition-colors duration-300 leading-none mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-ink text-lg mb-1.5">{title}</h3>
                    <p className="text-muted text-[13px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
