import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TechMarquee from './components/TechMarquee'
import ChatBot from './components/ChatBot'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60]"
    >
      <div className="w-full h-full bg-primary" />
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggleTheme = () => setDark(d => !d)

  useEffect(() => {
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 18 + 4
      if (p >= 100) {
        p = 100
        setProgress(100)
        clearInterval(interval)
        setTimeout(() => setLoading(false), 350)
      } else {
        setProgress(Math.floor(p))
      }
    }, 70)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-paper flex flex-col items-center justify-center z-50 gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="font-mono text-[11px] tracking-[0.35em] text-primary uppercase mb-4">
            Opening file Nº 001
          </div>
          <div className="font-serif font-black text-4xl md:text-5xl text-ink">
            Gaurav <span className="italic">Shrivastava</span>
          </div>
          <div className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase mt-3">
            Full Stack Developer · Satna, MP
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-3 w-56">
          <div className="w-full h-px bg-line overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <span className="text-[11px] font-mono text-muted tracking-[0.3em]">
            {progress < 100 ? `${progress}%` : 'ON RECORD'}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-x-hidden transition-colors duration-300">
      <ScrollProgress />

      <Navbar dark={dark} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <ChatBot />
    </div>
  )
}
