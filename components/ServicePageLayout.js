'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingForm from './BookingForm'

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
  const [active, setActive] = useState(0)
  const total = services.length

  // Infinite circular index
  const prev = () => setActive(i => (i - 1 + total) % total)
  const next = () => setActive(i => (i + 1) % total)

  // Returns the 3 indices to show: [left, center, right]
  const getVisible = () => [
    (active - 1 + total) % total,
    active,
    (active + 1) % total,
  ]

  const visible = getVisible()

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

            {/* ── DESKTOP: side-by-side, slider clipped to left col ── */}
            <div className="hidden lg:grid grid-cols-2 gap-10 items-start">

              {/* Left col: slider strictly contained here */}
              <div className="pt-16 pb-10">
                <p className="section-label">{sectionLabel}</p>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">{servicesHeading}</h2>

                {/* Carousel viewport — overflow hidden so cards never bleed right */}
                <div className="overflow-hidden">
                  {/* Track: shows 3 cards side-by-side, each ~33.33% wide */}
                  <div
                    className="relative"
                    style={{ perspective: '800px', height: '220px' }}
                  >
                    {visible.map((sIdx, pos) => {
                      const s = services[sIdx]
                      const isCenter = pos === 1
                      // pos 0 = left ghost, 1 = center/active, 2 = right ghost
                      const translateX = (pos - 1) * 105  // % offset from center
                      const scale = isCenter ? 1 : 0.84
                      const opacity = isCenter ? 1 : 0.55
                      const rotateY = isCenter ? 0 : (pos === 0 ? 14 : -14)
                      const brightness = isCenter ? 1 : 0.8
                      return (
                        <div
                          key={`${sIdx}-${pos}`}
                          onClick={() => {
                            if (pos === 0) prev()
                            else if (pos === 2) next()
                          }}
                          className="absolute cursor-pointer"
                          style={{
                            width: '190px',
                            height: '200px',
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                            zIndex: isCenter ? 10 : 3,
                            opacity,
                            filter: `brightness(${brightness})`,
                            transition: 'all 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          <div className={`rounded-2xl border-2 p-5 shadow-xl bg-white h-full flex flex-col justify-between ${isCenter ? accentCardBorder : 'border-slate-100'} transition-all`}>
                            <div>
                              <div className={`w-2 h-2 rounded-full ${accentDot} mb-3`}></div>
                              <h3 className="font-semibold text-slate-800 text-sm leading-snug">{s.name}</h3>
                            </div>
                            {isCenter && (
                              <p className="text-xs text-slate-500 leading-relaxed animate-fade-up mt-2">{s.desc}</p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Nav controls */}
                <div className="flex items-center gap-4 mt-6">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors"
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
                    onClick={next}
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors"
                  >›</button>
                </div>
              </div>

              {/* Right col: booking form */}
              <div className="pt-8 pb-10 lg:self-start lg:sticky lg:top-28">
                <div className={`${accentSection} rounded-2xl p-6 shadow-xl border border-white/60`}>
                  <h2 className="font-display text-xl font-bold text-slate-900 mb-1">Request an Appointment</h2>
                  <p className="text-slate-500 text-xs mb-5">Our front desk will contact you to confirm your time.</p>
                  <BookingForm hideService={true} />
                </div>
              </div>
            </div>

            {/* ── MOBILE: full width slider, then form below ── */}
            <div className="lg:hidden">
              {/* Slider — full width */}
              <div className="pt-16 pb-8">
                <p className="section-label">{sectionLabel}</p>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">{servicesHeading}</h2>

                {/* Full-width track, 3 cards visible */}
                <div className="overflow-hidden">
                  <div
                    className="relative"
                    style={{ perspective: '800px', height: '220px' }}
                  >
                    {visible.map((sIdx, pos) => {
                      const s = services[sIdx]
                      const isCenter = pos === 1
                      const translateX = (pos - 1) * 95
                      const scale = isCenter ? 1 : 0.82
                      const opacity = isCenter ? 1 : 0.5
                      const rotateY = isCenter ? 0 : (pos === 0 ? 16 : -16)
                      const brightness = isCenter ? 1 : 0.75
                      return (
                        <div
                          key={`${sIdx}-${pos}`}
                          onClick={() => {
                            if (pos === 0) prev()
                            else if (pos === 2) next()
                          }}
                          className="absolute cursor-pointer"
                          style={{
                            width: '200px',
                            height: '200px',
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                            zIndex: isCenter ? 10 : 3,
                            opacity,
                            filter: `brightness(${brightness})`,
                            transition: 'all 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          <div className={`rounded-2xl border-2 p-5 shadow-xl bg-white h-full flex flex-col justify-between ${isCenter ? accentCardBorder : 'border-slate-100'} transition-all`}>
                            <div>
                              <div className={`w-2 h-2 rounded-full ${accentDot} mb-3`}></div>
                              <h3 className="font-semibold text-slate-800 text-sm leading-snug">{s.name}</h3>
                            </div>
                            {isCenter && (
                              <p className="text-xs text-slate-500 leading-relaxed animate-fade-up mt-2">{s.desc}</p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Dot + arrow nav */}
                <div className="flex justify-center gap-3 mt-5">
                  {services.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: i === active ? accentColor : '#cbd5e1',
                        transform: i === active ? 'scale(1.3)' : 'scale(1)',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <button onClick={prev} className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors">‹</button>
                  <button onClick={next} className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors">›</button>
                </div>
              </div>

              {/* Form below on mobile — full width */}
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
