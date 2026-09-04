import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const contactDetails = [
  { label: 'Email', value: 'gauravshrivastava.web@gmail.com', href: 'mailto:gauravshrivastava.web@gmail.com' },
  { label: 'Phone', value: '+91 70899 55082', href: 'tel:+917089955082' },
  { label: 'Location', value: 'Satna, MP, India', href: null },
  { label: 'GitHub', value: 'github.com/gauravshrivastava14', href: 'https://github.com/gauravshrivastava14' },
  { label: 'LinkedIn', value: 'linkedin.com/in/gaurav', href: 'https://linkedin.com' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: 'gauravshrivastava.web@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setForm({ name: '', email: '', subject: '', message: '' })
      }, 4500)
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setError(true)
      setTimeout(() => setError(false), 4500)
    } finally {
      setLoading(false)
    }
  }

  const inputClass = name =>
    `w-full bg-transparent border-0 border-b-2 px-0 py-2.5 text-[14px] text-ink placeholder-muted/50 outline-none transition-colors duration-300 font-sans ${
      focused === name ? 'border-primary' : 'border-line hover:border-muted'
    }`

  return (
    <section id="contact" ref={ref} className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary mb-3">
            File 05 / Correspondence
          </div>
          <h2 className="font-serif font-black text-5xl md:text-6xl text-ink">
            Get in touch<span className="text-primary">.</span>
          </h2>
          <div className="h-px bg-line mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-14 items-start">
          {/* Left — the record */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="font-serif font-bold text-2xl text-ink mb-3">
                Let's work <span className="italic">together</span>
              </h3>
              <p className="text-muted leading-[1.8] text-[14px]">
                I'm a B.Tech CSE graduate who ships real government and personal projects.
                If you have an interesting problem, a role, or just want to connect — reach out.
                I reply within 24 hours.
              </p>
            </div>

            <div className="space-y-3.5">
              {contactDetails.map(({ label, value, href }) => (
                <div key={label} className="flex items-baseline text-[13px]">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted shrink-0">{label}</span>
                  <span className="leader-dots" />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-ink hover:text-primary transition-colors text-right truncate max-w-[60%] underline decoration-line underline-offset-4 hover:decoration-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-ink text-right truncate max-w-[60%]">{value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="border border-line bg-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent">Available for work</span>
              </div>
              <p className="text-muted text-[12.5px] leading-relaxed">
                Open to full-time roles, freelance projects, and internships.
                B.Tech CSE — graduated June 2026.
              </p>
            </div>
          </motion.div>

          {/* Right — the form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="lg:col-span-7"
          >
            <div className="cropmark bg-card border border-line p-8 md:p-10">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-8">
                Form Nº 05-A — Message dispatch
              </div>

              {sent ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-64 gap-4 text-center"
                >
                  <CheckCircle size={40} className="text-accent" />
                  <h3 className="font-serif font-bold text-xl text-ink">Message sent!</h3>
                  <p className="text-muted text-[13px]">I'll get back to you at gauravshrivastava.web@gmail.com within 24h.</p>
                </motion.div>
              ) : error ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-64 gap-4 text-center"
                >
                  <AlertCircle size={40} className="text-primary" />
                  <h3 className="font-serif font-bold text-xl text-ink">Something went wrong</h3>
                  <p className="text-muted text-[13px]">
                    Please try again, or email me directly at gauravshrivastava.web@gmail.com.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid sm:grid-cols-2 gap-7">
                    {[
                      { name: 'name', label: 'Name', placeholder: 'Your name', type: 'text' },
                      { name: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-1">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused(null)}
                          placeholder={field.placeholder}
                          required
                          className={inputClass(field.name)}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                      placeholder="Job opportunity / Project collaboration / Just saying hi"
                      required
                      className={inputClass('subject')}
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-1">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me what you're working on..."
                      rows={5}
                      required
                      className={inputClass('message') + ' resize-none'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-primary text-paper font-mono text-[11px] tracking-[0.25em] uppercase flex items-center justify-center gap-2.5 hover:bg-ink transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-paper/30 border-t-paper rounded-full animate-spin" />
                        Dispatching…
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
