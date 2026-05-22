'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingForm from './BookingForm'

export default function ServicePageLayout({
  accentGradient,     // e.g. 'from-violet-900 to-slate-900'
  accentColor,        // e.g. '#7c3aed'
  accentLight,        // e.g. 'text-violet-300'
  accentBg,           // e.g. 'bg-violet-500/30'
  accentBorder,       // e.g. 'border-violet-500/30'
  accentCardBorder,   // e.g. 'border-violet-50'
  accentDot,          // e.g. 'bg-violet-500'
  accentSection,      // e.g. 'bg-violet-50'
  icon,
  clinic,             // e.g. "Dr. Aleem Khan's Office"
  title,
  subtitle,
  phone,
  email,
  services,
  whyUs,
  sectionLabel,
  servicesHeading,
}) {
  const [active, setActive] = useState(0)

  const getCardStyle = (i) => {
    const diff = i - active
    if (diff === 0) return {
      transform: 'translateY(0) scale(1)',
      zIndex: 10,
      opacity: 1,
      filter: 'brightness(1)',
    }
    if (Math.abs(diff) === 1) return {
      transform: `translateY(${diff * 38}%) scale(0.9)`,
      zIndex: 5,
      opacity: 0.7,
      filter: 'brightness(0.88)',
    }
    return {
      transform: `translateY(${diff * 58}%) scale(0.8)`,
      zIndex: 1,
      opacity: 0.35,
      filter: 'brightness(0.7)',
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className={`pt-32 pb-0 px-4 bg-gradient-to-br ${accentGradient} text-white relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 10% 80%, ${accentColor} 0%, transparent 50%)` }}></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <Link href="/services" className={`${accentLight} text-xs font-semibold hover:underline mb-6 inline-block animate-fade-up`}>← All Clinics & Services</Link>

            {/* Hero top: icon + title + contact */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-12">
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 ${accentBg} rounded-2xl flex items-center justify-center text-3xl`}>{icon}</div>
                  <div>
                    <p className={`${accentLight} text-xs font-bold tracking-widest uppercase`}>{clinic}</p>
                    <h1 className="font-display text-4xl md:text-5xl font-bold">{title}</h1>
                  </div>
                </div>
                <p className="text-slate-300 text-lg max-w-xl leading-relaxed">{subtitle}</p>
              </div>

              {/* Contact pills */}
              <div className="flex flex-wrap lg:flex-col gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                  className={`flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-white text-sm font-medium hover:bg-white/20 transition-all`}
                >
                  <span className="text-lg">📞</span>
                  <div>
                    <div className="text-xs opacity-60 mb-0.5">Phone</div>
                    <div>{phone}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-white text-sm font-medium hover:bg-white/20 transition-all"
                >
                  <span className="text-lg">✉️</span>
                  <div>
                    <div className="text-xs opacity-60 mb-0.5">Email</div>
                    <div>{email}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Curved divider */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-50" style={{ borderRadius: '100% 100% 0 0 / 100% 100% 0 0', transform: 'scaleX(1.5)' }}></div>
        </section>

        {/* ── SERVICES + FORM ── */}
        <section className="bg-slate-50 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* Left: 3D vertical slider */}
              <div className="pt-16 pb-10">
                <p className="section-label">{sectionLabel}</p>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">{servicesHeading}</h2>

                {/* Desktop: vertical 3D slider */}
                <div className="hidden md:block">
                  <div
                    className="relative flex flex-col items-center"
                    style={{ height: `${Math.min(services.length, 4) * 72 + 80}px`, perspective: '800px' }}
                  >
                    {services.map((s, i) => (
                      <div
                        key={s.name}
                        onClick={() => setActive(i)}
                        className="absolute w-full cursor-pointer"
                        style={{
                          ...getCardStyle(i),
                          transition: 'all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          top: '50%',
                          marginTop: '-52px',
                        }}
                      >
                        <div className={`rounded-2xl border-2 p-5 shadow-lg bg-white ${i === active ? accentCardBorder : 'border-slate-100'} transition-all`}>
                          <div className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full ${accentDot} mt-2 flex-shrink-0`}></div>
                            <div>
                              <h3 className="font-semibold text-slate-800 mb-1">{s.name}</h3>
                              {i === active && (
                                <p className="text-sm text-slate-500 leading-relaxed animate-fade-up">{s.desc}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Slider nav arrows */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => setActive(prev => Math.max(0, prev - 1))}
                      disabled={active === 0}
                      className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-30"
                    >‹</button>
                    <div className="flex gap-2">
                      {services.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className="w-2 h-2 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor: i === active ? accentColor : '#cbd5e1',
                            transform: i === active ? 'scale(1.4)' : 'scale(1)',
                          }}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setActive(prev => Math.min(services.length - 1, prev + 1))}
                      disabled={active === services.length - 1}
                      className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-30"
                    >›</button>
                  </div>
                </div>

                {/* Mobile: stacked cards */}
                <div className="md:hidden space-y-4">
                  {services.map(s => (
                    <div key={s.name} className={`card p-5 border ${accentCardBorder}`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full ${accentDot} mt-2 flex-shrink-0`}></div>
                        <div>
                          <h3 className="font-semibold text-slate-800 mb-1">{s.name}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: booking form — overlapping hero into content */}
              <div className="lg:-mt-8 pt-8 lg:pt-0 pb-10 lg:self-start lg:sticky lg:top-28">
                <div className={`${accentSection} rounded-2xl p-6 shadow-xl border border-white/60`}>
                  <h2 className="font-display text-xl font-bold text-slate-900 mb-1">Request an Appointment</h2>
                  <p className="text-slate-500 text-xs mb-5">Our front desk will contact you to confirm your time.</p>
                  <BookingForm hideService={true} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="text-center p-6 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
