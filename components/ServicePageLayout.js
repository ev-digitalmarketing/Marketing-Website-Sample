'use client'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingForm from './BookingForm'

function ServiceCarousel({ services, accentColor, accentCardBorder, accentDot }) {
  const scrollRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const total = services.length

  const scrollTo = (index) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[index]
    if (!card) return
    // Center the card in the scroll container
    const offset = card.offsetLeft - el.offsetWidth / 2 + card.offsetWidth / 2
    el.scrollTo({ left: offset, behavior: 'smooth' })
    setCurrent(index)
  }

  const prev = () => scrollTo(Math.max(0, current - 1))
  const next = () => scrollTo(Math.min(total - 1, current + 1))

  // Sync dot indicator when user manually scrolls
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const cardWidth = el.children[0]?.offsetWidth ?? 1
      const idx = Math.round(el.scrollLeft / cardWidth)
      setCurrent(Math.max(0, Math.min(total - 1, idx)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [total])

  return (
    <div>
      {/* Scroll track */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '16px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingBottom: '4px',
          // Show ~1.1 cards so user knows there's more
          paddingRight: '15%',
        }}
      >
        <style>{`.service-track::-webkit-scrollbar { display: none; }`}</style>
        {services.map((s, i) => (
          <div
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              flexShrink: 0,
              width: '75%',
              scrollSnapAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <div
              className="rounded-2xl border-2 bg-white p-6 flex flex-col shadow-lg h-full"
              style={{
                minHeight: '260px',
                borderColor: i === current ? accentColor : '#e2e8f0',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: i === current ? `0 8px 30px ${accentColor}22` : undefined,
              }}
            >
              <div
                className={`w-3 h-3 rounded-full mb-5 flex-shrink-0 ${accentDot}`}
              />
              <h3 className="font-semibold text-slate-800 text-base leading-snug mb-3">{s.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows + dots */}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-30 text-lg"
        >‹</button>

        <div className="flex gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === current ? accentColor : '#cbd5e1',
                transform: i === current ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === total - 1}
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
