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
      className="fixed top-0 left-0 right-0 h-[2px] z-[60]"
    >
      <div className="w-full h-full bg-gradient-to-r from-primary via-secondary to-accent" />
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
      <div className="fixed inset-0 bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center z-50 gap-8">
        {/* Logo */}
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center"
          >
            <span className="text-2xl font-black text-gradient font-mono">GS</span>
          </motion.div>
          <div className="absolute -inset-2 rounded-3xl border border-primary/10 animate-pulse" />
        </div>

        {/* Progress */}
        <div className="flex flex-col items-center gap-3 w-48">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 tracking-widest">
            {progress < 100 ? `LOADING ${progress}%` : 'READY'}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
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
