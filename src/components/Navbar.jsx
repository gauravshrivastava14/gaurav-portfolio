import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-sm border-line'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-baseline gap-2 cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-serif font-black italic text-xl text-ink leading-none">
            Gaurav S<span className="text-primary">.</span>
          </span>
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted uppercase hidden sm:inline">
            / File Nº 001
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted hover:text-primary transition-colors duration-200"
              >
                <span className="text-primary/70 mr-1">{String(i + 1).padStart(2, '0')}</span>
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-8 h-8 border border-line flex items-center justify-center text-muted hover:text-primary hover:border-primary/60 transition-all duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={14} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={14} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('Contact') }}
              className="font-mono text-[11px] tracking-[0.18em] uppercase px-4 py-2.5 border border-ink text-ink hover:bg-ink hover:text-paper transition-all duration-200"
            >
              Hire me
            </a>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-8 h-8 border border-line flex items-center justify-center text-muted"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            className="text-ink"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper border-t border-line"
          >
            <ul className="px-6 py-4 flex flex-col">
              {links.map((link, i) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="w-full text-left py-3.5 font-mono text-xs tracking-[0.18em] uppercase text-muted hover:text-primary border-b border-line/60 transition-colors"
                  >
                    <span className="text-primary mr-2">{String(i + 1).padStart(2, '0')}</span>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
