'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingForm from './BookingForm'

// ─── Carousel ────────────────────────────────────────────────────────────────
// Layout: center card fills ~70% of the track, side cards peek ~15% each.
// Sliding: the entire strip translates left/right, then snaps.
// We keep 5 slots rendered (prev2, prev, active, next, next2) so the
// incoming card is already mounted before the animation starts.

const PEEK = 15          // % of track width each side card peeks
const CENTER = 100 - PEEK * 2  // ~70%
const TRANSITION = '0.42s cubic-bezier(0.4, 0, 0.2, 1)'

function ServiceCarousel({ services, accentColor, accentCardBorder, accentDot }) {
  const total = services.length
  const [current, setCurrent] = useState(0)
  const [offset, setOffset] = useState(0)       // live translateX in %
  const [animating, setAnimating] = useState(false)
  const [animate, setAnimate] = useState(false)  // whether CSS transition is on
  const touchStart = useRef(null)
  const frameRef = useRef(null)

  // Circular helpers
  const idx = (n) => ((n % total) + total) % total

  // Go in a direction: -1 = prev, +1 = next
  const go = useCallback((dir) => {
    if (animating) return
    setAnimating(true)
    setAnimate(true)
    // Slide: each card slot = CENTER%, so slide by that amount
    setOffset(o => o - dir * CENTER)
    setTimeout(() => {
      // After animation, snap back to center without transition
      setCurrent(c => idx(c + dir))
      setAnimate(false)
      setOffset(0)
      setAnimating(false)
    }, 430)
  }, [animating, total])

  // Touch swipe
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return
    const delta = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1)
    touchStart.current = null
  }

  // We render 5 slots: current-2, current-1, current, current+1, current+2
  // Track starts offset so slot index 2 (current) is in center position
  // Base offset puts card[2] centered: translateX starts at -2 * CENTER%
  // (each card is CENTER% wide, plus peek halved on each side)
  // Actually we offset so card slot 0 left edge = -2 * CENTER%
  const baseOffset = -2 * CENTER  // positions slot[2] at center
  const totalOffset = baseOffset + offset

  const slots = [-2, -1, 0, 1, 2].map(d => ({
    d,
    sIdx: idx(current + d),
    isCenter: d === 0,
  }))

  return (
    <div>
      {/* Viewport — clips to left column, overflow hidden */}
      <div
        className="overflow-hidden rounded-2xl"
        style={{ width: '100%' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Track — 5 cards, each CENTER% wide, total = 5 * CENTER% */}
        <div
          style={{
            display: 'flex',
            width: `${5 * CENTER}%`,
            transform: `translateX(${totalOffset / 5}%)`,
            // divide by 5 because width is 5× the outer container
            // Actually: track is 5*CENTER% of viewport. We want slot[2]
            // to sit centered. Slot[2] left = 2 * (CENTER / (5*CENTER)) * 100 = 40% of track.
            // Easier: use px via a container ref, or use the following math:
            // translateX in track-relative % = totalOffset / 5
            transition: animate ? `transform ${TRANSITION}` : 'none',
            willChange: 'transform',
          }}
        >
          {slots.map(({ d, sIdx, isCenter }) => {
            const s = services[sIdx]
            return (
              <div
                key={d}
                onClick={() => { if (!isCenter && !animating) go(d > 0 ? 1 : -1) }}
                style={{
                  width: `${100 / 5}%`,  // each slot = 1/5 of track = CENTER% of viewport
                  flexShrink: 0,
                  padding: '12px 10px',
                  cursor: isCenter ? 'default' : 'pointer',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    transform: isCenter ? 'scale(1)' : 'scale(0.92)',
                    opacity: isCenter ? 1 : 0.45,
                    filter: isCenter ? 'none' : 'brightness(0.8)',
                    transition: `transform ${TRANSITION}, opacity ${TRANSITION}, filter ${TRANSITION}`,
                    height: '300px',
                  }}
                >
                  <div
                    className={`rounded-2xl border-2 p-6 bg-white h-full flex flex-col shadow-xl ${isCenter ? accentCardBorder : 'border-slate-100'}`}
                    style={{ transition: `border-color 0.3s ease` }}
                  >
                    <div className={`w-3 h-3 rounded-full ${accentDot} mb-5 flex-shrink-0`} />
                    <h3 className="font-semibold text-slate-800 text-base leading-snug mb-3 flex-shrink-0">{s.name}</h3>
                    <p
                      className="text-sm text-slate-500 leading-relaxed flex-1 overflow-hidden"
                      style={{
                        opacity: isCenter ? 1 : 0,
                        transition: `opacity 0.25s ease`,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center gap-4 mt-5">
        <button
          onClick={() => go(-1)}
          disabled={animating}
          className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-40 text-lg"
        >‹</button>

        <div className="flex gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (animating || i === current) return
                go(i > current ? 1 : -1)
                // For multi-step jumps we just step one at a time — simple & clean
              }}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === current ? accentColor : '#cbd5e1',
                transform: i === current ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          disabled={animating}
          className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-40 text-lg"
        >›</button>
      </div>
    </div>
  )
}

// ─── Page Layout ─────────────────────────────────────────────────────────────
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

            {/* Desktop: side-by-side */}
            <div className="hidden lg:grid grid-cols-2 gap-10 items-start">
              <div className="pt-16 pb-10">
                <p className="section-label">{sectionLabel}</p>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">{servicesHeading}</h2>
                <ServiceCarousel
                  services={services}
                  accentColor={accentColor}
                  accentCardBorder={accentCardBorder}
                  accentDot={accentDot}
                />
              </div>
              <div className="pt-8 pb-10 lg:self-start lg:sticky lg:top-28">
                <div className={`${accentSection} rounded-2xl p-6 shadow-xl border border-white/60`}>
                  <h2 className="font-display text-xl font-bold text-slate-900 mb-1">Request an Appointment</h2>
                  <p className="text-slate-500 text-xs mb-5">Our front desk will contact you to confirm your time.</p>
                  <BookingForm hideService={true} />
                </div>
              </div>
            </div>

            {/* Mobile: stacked */}
            <div className="lg:hidden">
              <div className="pt-16 pb-8">
                <p className="section-label">{sectionLabel}</p>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">{servicesHeading}</h2>
                <ServiceCarousel
                  services={services}
                  accentColor={accentColor}
                  accentCardBorder={accentCardBorder}
                  accentDot={accentDot}
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
