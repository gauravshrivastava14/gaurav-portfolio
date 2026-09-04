import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ROLES = [
  'Full Stack Developer',
  'Django & MERN Engineer',
  'RESTful API Developer',
  'Govt. Project Contributor',
  'CS Grad @ VITS RGPV',
]

const RECORD = [
  ['Name', 'Gaurav Shrivastava'],
  ['Born', '14 · 04 · 2005'],
  ['Base', 'Satna, MP, India'],
  ['Stack', 'Django / React / Node'],
  ['Database', 'PostgreSQL / MySQL / Mongo'],
  ['Clearance', 'Govt. of India × 2'],
]

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/gauravshrivastava14' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:gauravshrivastava.web@gmail.com' },
  { label: '+91 70899 55082', href: 'tel:+917089955082' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const target = ROLES[roleIndex]
    let t
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2400)
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(t)
  }, [displayed, deleting, roleIndex])

  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-14 items-center w-full">
        {/* Left — the byline */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-8"
          >
            <span className="w-8 h-px bg-primary inline-block" />
            Case file — open to opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif font-black text-ink text-6xl md:text-[6.5rem] leading-[0.95] tracking-tight mb-8"
          >
            Gaurav
            <br />
            <span className="italic font-bold">Shrivastava</span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center gap-2 mb-8 h-7 font-mono text-sm md:text-base text-muted"
          >
            <span className="text-primary">›</span>
            <span className="uppercase tracking-[0.14em]">
              {displayed}
              <span style={{ opacity: blink ? 1 : 0 }} className="text-primary">_</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-muted text-[15px] leading-relaxed max-w-[480px] mb-10"
          >
            CS grad building real-world, production-grade web apps — from a{' '}
            <span className="text-ink font-medium border-b-2 border-primary/50">Pan-India government portal</span>{' '}
            for the RPF to peer-to-peer platforms with real-time features. I care about code
            that actually works, scales, and doesn't break at 2 AM.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-[11px] tracking-[0.2em] uppercase px-6 py-3.5 bg-primary text-paper hover:bg-ink transition-colors duration-200"
            >
              View case files ↓
            </button>
            <a
              href="/Gaurav_Shrivastava_Resume.pdf"
              download
              className="font-mono text-[11px] tracking-[0.2em] uppercase px-6 py-3.5 border border-ink text-ink hover:bg-ink hover:text-paper transition-all duration-200"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.15em] uppercase"
          >
            {LINKS.map(({ label, href }, i) => (
              <span key={label} className="flex items-center gap-5">
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary underline decoration-line underline-offset-4 hover:decoration-primary transition-colors"
                >
                  {label} ↗
                </a>
                {i < LINKS.length - 1 && <span className="text-line">/</span>}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — personnel record card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="hidden lg:block lg:col-span-5"
        >
          <div className="cropmark bg-card border border-line p-8 relative">
            {/* File header */}
            <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-1">
                  File Nº 001
                </div>
                <div className="font-serif font-bold text-lg text-ink">Personnel Record</div>
              </div>
              <div className="font-mono text-[10px] text-muted text-right leading-relaxed uppercase tracking-wider">
                Est. 2005<br />Rev. 2026
              </div>
            </div>

            {/* Record rows with dotted leaders */}
            <div className="space-y-3.5 mb-8">
              {RECORD.map(([key, val]) => (
                <div key={key} className="flex items-baseline text-[13px]">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted shrink-0">{key}</span>
                  <span className="leader-dots" />
                  <span className="text-ink font-medium text-right">{val}</span>
                </div>
              ))}
              <div className="flex items-baseline text-[13px]">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted shrink-0">Status</span>
                <span className="leader-dots" />
                <span className="text-accent font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
                  Available now
                </span>
              </div>
            </div>

            {/* Stamps */}
            <div className="flex items-end justify-between">
              <span className="stamp">Shipped to production</span>
              <span className="stamp stamp-moss rotate-3">B.Tech CSE · Graduated</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted"
      >
        <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="inline-block">
          Scroll ↓
        </motion.span>
      </motion.div>
    </section>
  )
}
