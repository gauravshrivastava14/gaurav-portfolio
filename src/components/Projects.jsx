import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    id: 1,
    title: 'PRATHAM',
    subtitle: 'RPF National Portal · Govt. of India',
    description:
      'Pan-India web portal for the Railway Protection Force to manage and analyze training and HR aptitude data. Built the entire system independently — Django backend, PostgreSQL, and role-based access for Zonal, Divisional, and Post-level officers. Deployed under supervision of DG, RPF.',
    stack: ['Django', 'Python', 'PostgreSQL', 'RBAC', 'JWT', 'Gunicorn'],
    badge: 'Government · National',
    restricted: true,
    github: null,
    live: 'https://prathamv2.in/',
  },
  {
    id: 2,
    title: 'SkillSwap',
    subtitle: 'Full Stack Peer-to-Peer Learning Platform',
    description:
      'Peer-to-peer skill exchange platform where users teach and learn through smart matching. Features JWT auth, user roles, profiles, ratings, real-time chat via Socket.IO, and scheduling workflows. Built with clean architecture from DB design to frontend.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Tailwind CSS'],
    badge: 'Full Stack · Real-time',
    restricted: false,
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 3,
    title: 'Udyami Bharat 4.0',
    subtitle: 'NPC · Atma Nirbhar Bharat Initiative',
    description:
      'Backend modules for the Udyami Bharat 4.0 initiative under NPC, Delhi — supporting Industry 4.0 objectives. Built with PHP and MySQL, ensuring data integrity, security, and scalability in alignment with government compliance standards.',
    stack: ['PHP', 'MySQL', 'REST APIs', 'MVC Architecture'],
    badge: 'Government · National',
    restricted: true,
    github: null,
    live: null,
  },
  {
    id: 4,
    title: 'PDFSetu',
    subtitle: 'Browser-Based File Converter',
    description:
      'Privacy-first file conversion tool that runs entirely in the browser — batch PDF and document conversions plus PDF manipulation (merge, split, compress), with no uploads, no sign-up, and no limits. Files never leave the user\'s machine.',
    stack: ['JavaScript', 'Python', 'Flask', 'HTML/CSS', 'Vercel'],
    badge: 'Personal · Web Tool',
    restricted: false,
    github: 'https://github.com/gauravshrivastava14/converter-tool',
    live: 'https://converter-tool-ugzl.vercel.app/',
  },
  {
    id: 5,
    title: 'Personal Portfolio v1',
    subtitle: 'Developer Portfolio Website',
    description:
      'Personal portfolio to showcase projects, skills, and contact info. Responsive UI, project listings, and live deployment. Previously deployed on Render/Netlify. Now rebuilt with React + Tailwind for a better experience.',
    stack: ['React.js', 'Tailwind CSS', 'Netlify', 'Vite'],
    badge: 'Personal',
    restricted: false,
    github: 'https://github.com/gauravshrivastava14/gaurav-portfolio',
    live: 'https://portfolio-h2qi.onrender.com',
  },
]

function CaseFile({ project, index, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.09, ease: 'easeOut' }}
      className="group border-t border-line last:border-b py-10 grid md:grid-cols-12 gap-6 hover:bg-card/70 transition-colors duration-300 px-3 -mx-3"
    >
      {/* Nº */}
      <div className="md:col-span-2">
        <div className="font-serif font-black text-4xl md:text-5xl text-line group-hover:text-primary transition-colors duration-300 leading-none">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted mt-3">
          Case file
        </div>
      </div>

      {/* Body */}
      <div className="md:col-span-7">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary mb-2">
          {project.badge}
        </div>
        <h3 className="font-serif font-black text-2xl md:text-3xl text-ink leading-tight mb-1">
          {project.title}
        </h3>
        <p className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase mb-4">
          {project.subtitle}
        </p>
        <p className="text-muted text-[14px] leading-[1.75] mb-4 max-w-xl">
          {project.description}
        </p>
        <p className="font-mono text-[11px] text-muted/90 tracking-wide">
          {project.stack.join(' / ')}
        </p>
      </div>

      {/* Links + stamps */}
      <div className="md:col-span-3 flex md:flex-col items-start md:items-end justify-between md:justify-start gap-4 md:gap-5 md:text-right">
        <div className="flex md:flex-col gap-3 md:gap-2 font-mono text-[11px] tracking-[0.18em] uppercase">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-primary underline decoration-line underline-offset-4 hover:decoration-primary transition-colors"
            >
              View live ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary underline decoration-line underline-offset-4 hover:decoration-primary transition-colors"
            >
              Source ↗
            </a>
          )}
        </div>
        {project.restricted && (
          <span className="stamp md:mt-4">Restricted</span>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" ref={ref} className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-6"
        >
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-3">
            File 03 / Selected work
          </div>
          <h2 className="font-serif font-black text-5xl md:text-6xl text-ink">
            Case files<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted mb-12"
        >
          2 government · 3 personal — all production-deployed
        </motion.p>

        <div>
          {projects.map((project, i) => (
            <CaseFile key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
