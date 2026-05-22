'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingForm from './BookingForm'

// Shared carousel hook — handles direction, animation state, touch swipe
function useCarousel(total) {
  const [active, setActive] = useState(0)
  const [sliding, setSliding] = useState(false)
  const [direction, setDirection] = useState(null) // 'left' | 'right'
  const timeout = useRef(null)

  const go = (dir) => {
    if (sliding) return
    setDirection(dir)
    setSliding(true)
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setActive(i => dir === 'right' ? (i + 1) % total : (i - 1 + total) % total)
      setSliding(false)
      setDirection(null)
    }, 380)
  }

  const goTo = (i) => {
    if (sliding || i === active) return
    setDirection(i > active ? 'right' : 'left')
    setSliding(true)
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setActive(i)
      setSliding(false)
      setDirection(null)
    }, 380)
  }

  useEffect(() => () => clearTimeout(timeout.current), [])

  return { active, sliding, direction, go, goTo }
}

// Carousel UI — renders the 3-card strip with slide animation
function ServiceCarousel({ services, accentColor, accentCardBorder, accentDot, isMobile }) {
  const total = services.length
  const { active, sliding, direction, go, goTo } = useCarousel(total)

  // Touch swipe support
  const touchStart = useRef(null)
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return
    const delta = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) go(delta > 0 ? 'right' : 'left')
    touchStart.current = null
  }

  // The 3 visible indices [left, center, right]
  const leftIdx  = (active - 1 + total) % total
  const rightIdx = (active + 1) % total
  const cards = [
    { sIdx: leftIdx,  pos: 0 },
    { sIdx: active,   pos: 1 },
    { sIdx: rightIdx, pos: 2 },
  ]

  // Slide offset: when sliding right, track moves left (-33.33%), and vice versa
  // We show a 3-card window; normally translateX(0), animate to ±33.33%
  const trackOffset = sliding
    ? direction === 'right' ? '-33.333%' : '33.333%'
    : '0%'

  const CARD_W = isMobile ? 'calc(100% - 80px)' : '240px'
  const CARD_H = isMobile ? '260px' : '260px'

  return (
    <div>
      {/* Viewport — clips the track */}
      <div
        className="overflow-hidden rounded-2xl"
        style={{ height: isMobile ? '280px' : '280px' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Track — 5 cards wide (prev-prev, prev, active, next, next-next) so slide reveals smoothly */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            // Position track so center card = card index 1 (0-indexed in 3-card view)
            // We render 3 cards each 33.333% wide, track starts at 0
            transform: `translateX(${trackOffset})`,
            transition: sliding ? 'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            willChange: 'transform',
          }}
        >
          {cards.map(({ sIdx, pos }) => {
            const s = services[sIdx]
            const isCenter = pos === 1
            return (
              <div
                key={`${pos}-${sIdx}`}
                onClick={() => { if (!isCenter) go(pos === 0 ? 'left' : 'right') }}
                style={{
                  flexShrink: 0,
                  width: '33.333%',
                  height: '100%',
                  padding: '0 8px',
                  cursor: isCenter ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: CARD_H,
                    transform: isCenter ? 'scale(1)' : 'scale(0.86)',
                    opacity: isCenter ? 1 : 0.5,
                    filter: isCenter ? 'brightness(1)' : 'brightness(0.82)',
                    transition: 'transform 0.38s ease, opacity 0.38s ease, filter 0.38s ease',
                  }}
                >
                  <div
                    className={`rounded-2xl border-2 p-5 shadow-xl bg-white h-full flex flex-col justify-between ${isCenter ? accentCardBorder : 'border-slate-100'} transition-all`}
                  >
                    <div>
                      <div className={`w-2.5 h-2.5 rounded-full ${accentDot} mb-4`}></div>
                      <h3 className="font-semibold text-slate-800 text-base leading-snug">{s.name}</h3>
                    </div>
                    {isCenter && (
                      <p className="text-sm text-slate-500 leading-relaxed mt-3">{s.desc}</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Nav */}
      <div className={`flex items-center gap-4 mt-6 ${isMobile ? 'justify-center' : ''}`}>
        <button
          onClick={() => go('left')}
          disabled={sliding}
          className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-40"
        >‹</button>
        <div className="flex gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === active ? accentColor : '#cbd5e1',
                transform: i === active ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
        <button
          onClick={() => go('right')}
          disabled={sliding}
          className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-40"
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
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 10% 80%, ${accentColor} 0%, transparent 50%)` }}></div>

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
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-white text-sm font-medium hover:bg-white/20 transition-all"
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

          <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-50" style={{ borderRadius: '100% 100% 0 0 / 100% 100% 0 0', transform: 'scaleX(1.5)' }}></div>
        </section>

        {/* ── SERVICES + FORM ── */}
        <section className="bg-slate-50 px-4 relative">
          <div className="max-w-6xl mx-auto">

            {/* ── DESKTOP: side-by-side ── */}
            <div className="hidden lg:grid grid-cols-2 gap-10 items-start">
              <div className="pt-16 pb-10">
                <p className="section-label">{sectionLabel}</p>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">{servicesHeading}</h2>
                <ServiceCarousel
                  services={services}
                  accentColor={accentColor}
                  accentCardBorder={accentCardBorder}
                  accentDot={accentDot}
                  isMobile={false}
                />
              </div>

              {/* Right: booking form sticky */}
              <div className="pt-8 pb-10 lg:self-start lg:sticky lg:top-28">
                <div className={`${accentSection} rounded-2xl p-6 shadow-xl border border-white/60`}>
                  <h2 className="font-display text-xl font-bold text-slate-900 mb-1">Request an Appointment</h2>
                  <p className="text-slate-500 text-xs mb-5">Our front desk will contact you to confirm your time.</p>
                  <BookingForm hideService={true} />
                </div>
              </div>
            </div>

            {/* ── MOBILE: stacked ── */}
            <div className="lg:hidden">
              <div className="pt-16 pb-8">
                <p className="section-label">{sectionLabel}</p>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">{servicesHeading}</h2>
                <ServiceCarousel
                  services={services}
                  accentColor={accentColor}
                  accentCardBorder={accentCardBorder}
                  accentDot={accentDot}
                  isMobile={true}
                />
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
