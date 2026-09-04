import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const timeline = [
  {
    type: 'Work — Govt. project',
    role: 'Full Stack Developer',
    org: 'PRATHAM · RPF, Govt. of India',
    period: 'Jul 2025 — Present',
    location: 'Lucknow, India',
    points: [
      'Built a Pan-India web portal for Railway Protection Force to manage training and HR aptitude data.',
      'Designed complete frontend, backend, and database architecture independently using Django and PostgreSQL.',
      'Implemented secure, role-based authentication for Zonal, Divisional, and Post-level users.',
      'Worked under the supervision of DG, RPF — national-level compliance and data security standards.',
      'Optimized performance and built a responsive, device-agnostic UI for field officers.',
    ],
    stack: ['Django', 'Python', 'PostgreSQL', 'RBAC', 'JWT', 'Gunicorn'],
  },
  {
    type: 'Work — Govt. project',
    role: 'Backend Developer',
    org: 'Udyami Bharat 4.0 · NPC, Atma Nirbhar Bharat',
    period: 'Jul 2025 — Present',
    location: 'Delhi, India',
    points: [
      'Developed backend modules supporting Industry 4.0 objectives under the Atma Nirbhar Bharat initiative.',
      'Ensured application security, data integrity, and scalability using PHP and MySQL.',
      'Operated within a structured government delivery ecosystem — strict QA, compliance, and timelines.',
    ],
    stack: ['PHP', 'MySQL', 'REST APIs', 'MVC'],
  },
  {
    type: 'Education',
    role: 'B.Tech in Computer Science Engineering',
    org: 'Vindhya Institute of Technology and Science, Satna · RGPV',
    period: 'Jan 2022 — Jun 2026',
    location: 'Satna, MP',
    points: [
      'Graduated June 2026 — CGPA: 7.0.',
      'Core subjects: Data Structures, Algorithms, DBMS, OS, Computer Networks.',
      'Built multiple full-stack projects during coursework — PRATHAM and SkillSwap among them.',
    ],
    stack: ['Python', 'C++', 'Java', 'SQL', 'DSA'],
  },
  {
    type: 'Education',
    role: 'Senior Secondary · Class XII',
    org: 'Blooms Academy, Satna',
    period: 'Jun 2021 — May 2022',
    location: 'Satna, MP',
    points: ['Completed Class XII with Science stream.'],
    stack: [],
  },
  {
    type: 'Education',
    role: 'Secondary · Class X',
    org: 'Little Flower Public High School, Satna',
    period: 'Jun 2019 — May 2020',
    location: 'Satna, MP',
    points: ['Completed Class X from CBSE-affiliated school.'],
    stack: [],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="experience" ref={ref} className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-3">
            File 04 / Service record
          </div>
          <h2 className="font-serif font-black text-5xl md:text-6xl text-ink">
            Experience<span className="text-primary">.</span>
          </h2>
          <div className="h-px bg-line mt-8" />
        </motion.div>

        <div>
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, ease: 'easeOut' }}
              className="grid md:grid-cols-12 gap-4 md:gap-8 border-t border-line last:border-b py-9 hover:bg-card/70 transition-colors duration-300 px-3 -mx-3"
            >
              {/* Left margin — period */}
              <div className="md:col-span-3">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink font-medium">
                  {item.period}
                </div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted mt-1">
                  {item.location}
                </div>
              </div>

              {/* Entry */}
              <div className="md:col-span-9">
                <div className={`font-mono text-[10px] tracking-[0.22em] uppercase mb-2 ${
                  item.type.startsWith('Work') ? 'text-primary' : 'text-secondary'
                }`}>
                  {item.type}
                </div>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-ink leading-snug">
                  {item.role}
                </h3>
                <p className="font-serif italic text-muted text-[15px] mt-1 mb-4">{item.org}</p>

                {item.points.length > 0 && (
                  <ul className="space-y-1.5 mb-4">
                    {item.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-3 text-[13.5px] text-muted leading-relaxed">
                        <span className="text-primary font-mono shrink-0 mt-px">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                {item.stack.length > 0 && (
                  <p className="font-mono text-[11px] text-muted/90 tracking-wide">
                    {item.stack.join(' / ')}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
