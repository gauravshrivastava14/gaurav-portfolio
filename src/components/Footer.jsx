import { ArrowUp } from 'lucide-react'

const links = [
  { label: 'GitHub', href: 'https://github.com/gauravshrivastava14' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:gauravshrivastava.web@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-10 z-10 bg-card/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-serif font-black italic text-lg text-ink">
              Gaurav Shrivastava<span className="text-primary">.</span>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mt-1">
              Full Stack Developer · Satna, MP, India
            </div>
          </div>

          <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-muted/80 text-center leading-relaxed">
            Typeset in Fraunces & JetBrains Mono
            <br />
            Coded by hand — no template
          </div>

          <div className="flex items-center gap-5">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted hover:text-primary underline decoration-line underline-offset-4 hover:decoration-primary transition-colors"
              >
                {label} ↗
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-8 h-8 border border-line flex items-center justify-center text-muted hover:text-primary hover:border-primary/60 transition-all duration-200"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
