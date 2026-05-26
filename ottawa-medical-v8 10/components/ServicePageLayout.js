'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingForm from './BookingForm'

function ServiceCarousel({ services, accentColor, accentCardBorder, accentDot }) {
  const [current, setCurrent] = useState(0)
  const [sliding, setSliding] = useState(false)
  const [direction, setDirection] = useState(null) // 'left' | 'right'
  const total = services.length
  const touchStart = useRef(null)

  const go = (dir) => {
    if (sliding) return
    const next = dir === 'right'
      ? Math.min(total - 1, current + 1)
      : Math.max(0, current - 1)
    if (next === current) return

    setDirection(dir)
    setSliding(true)

    setTimeout(() => {
      setCurrent(next)
      setSliding(false)
      setDirection(null)
    }, 320)
  }

  const goTo = (i) => {
    if (sliding || i === current) return
    go(i > current ? 'right' : 'left')
    // jump directly after animation
    setTimeout(() => setCurrent(i), 320)
  }

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return
    const delta = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) go(delta > 0 ? 'right' : 'left')
    touchStart.current = null
  }

  // Slide out: current card exits opposite to direction
  // Slide in: next card enters from the direction
  const slideOutX = sliding
    ? direction === 'right' ? '-100%' : '100%'
    : '0%'

  const s = services[current]

  return (
    <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {/* Card viewport — single card, clipped */}
      <div style={{ overflow: 'hidden', borderRadius: '16px' }}>
        <div
          style={{
            transform: `translateX(${slideOutX})`,
            transition: sliding ? 'transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            willChange: 'transform',
          }}
        >
          <div
            className="rounded-2xl border-2 bg-white p-8 flex flex-col shadow-lg"
            style={{
              minHeight: '260px',
              borderColor: accentColor,
              boxShadow: `0 8px 30px ${accentColor}22`,
            }}
          >
            <div className={`w-3 h-3 rounded-full mb-5 flex-shrink-0 ${accentDot}`} />
            <h3 className="font-semibold text-slate-800 text-lg leading-snug mb-3">{s.name}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
          </div>
        </div>
      </div>

      {/* Arrows + dots */}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => go('left')}
          disabled={current === 0 || sliding}
          className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-30 text-lg"
        >‹</button>

        <div className="flex gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === current ? accentColor : '#cbd5e1',
                transform: i === current ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => go('right')}
          disabled={current === total - 1 || sliding}
          className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-30 text-lg"
        >›</button>
      </div>
    </div>
  )
}

export default function ServicePageLayout({
  accentGradient,
  accentColor,
  accentLight,
  accentBg,
  accentBorder,
  accentCardBorder,
  accentDot,
  accentSection,
  icon,
  clinic,
  title,
  subtitle,
  phone,
  email,
  services,
  whyUs,
  sectionLabel,
  servicesHeading,
}) {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className={`pt-32 pb-0 px-4 bg-gradient-to-br ${accentGradient} text-white relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 10% 80%, ${accentColor} 0%, transparent 50%)` }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <Link href="/services" className={`${accentLight} text-xs font-semibold hover:underline mb-6 inline-block animate-fade-up`}>← All Clinics & Services</Link>
            <div className="pb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 ${accentBg} rounded-2xl flex items-center justify-center text-3xl`}>{icon}</div>
                <div>
                  <p className={`${accentLight} text-xs font-bold tracking-widest uppercase`}>{clinic}</p>
                  <h1 className="font-display text-4xl md:text-5xl font-bold">{title}</h1>
                </div>
              </div>
              <p className="text-slate-300 text-lg max-w-xl leading-relaxed mb-6">{subtitle}</p>
              <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-white text-sm font-medium hover:bg-white/20 transition-all">
                  <span className="text-lg">📞</span>
                  <div><div className="text-xs opacity-60 mb-0.5">Phone</div><div>{phone}</div></div>
                </a>
                <a href={`mailto:${email}`} className="flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-white text-sm font-medium hover:bg-white/20 transition-all">
                  <span className="text-lg">✉️</span>
                  <div><div className="text-xs opacity-60 mb-0.5">Email</div><div>{email}</div></div>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-50" style={{ borderRadius: '100% 100% 0 0 / 100% 100% 0 0', transform: 'scaleX(1.5)' }} />
        </section>

        {/* ── SERVICES + FORM ── */}
        <section className="bg-slate-50 px-4 relative">
          <div className="max-w-6xl mx-auto">
            {/* Desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-10 items-start">
              <div className="pt-16 pb-10">
                <p className="section-label">{sectionLabel}</p>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">{servicesHeading}</h2>
                <ServiceCarousel services={services} accentColor={accentColor} accentCardBorder={accentCardBorder} accentDot={accentDot} />
              </div>
              <div className="pt-8 pb-10 lg:self-start lg:sticky lg:top-28">
                <div className={`${accentSection} rounded-2xl p-6 shadow-xl border border-white/60`}>
                  <h2 className="font-display text-xl font-bold text-slate-900 mb-1">Request an Appointment</h2>
                  <p className="text-slate-500 text-xs mb-5">Our front desk will contact you to confirm your time.</p>
                  <BookingForm hideService={true} />
                </div>
              </div>
            </div>
            {/* Mobile */}
            <div className="lg:hidden">
              <div className="pt-16 pb-8">
                <p className="section-label">{sectionLabel}</p>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">{servicesHeading}</h2>
                <ServiceCarousel services={services} accentColor={accentColor} accentCardBorder={accentCardBorder} accentDot={accentDot} />
              </div>
              <div className="pb-10">
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
