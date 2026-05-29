'use client'
import { useState } from 'react'
import Link from 'next/link'

const CARD_GRADIENT = 'linear-gradient(135deg, #f0fdf4 0%, #ccfbf1 60%, #d1fae5 100%)'
const ICON_GRADIENT = 'linear-gradient(135deg, #bbf7d0 0%, #99f6e4 100%)'
const ACCENT_COLOR = '#0d9488'

const services = [
  {
    icon: '🧠',
    title: 'Mental Health',
    href: '/services/mental-health',
    items: ['Psychiatric Assessment', 'Counselling & Therapy', 'TMS & Ketamine Treatment', 'Cognitive Behaviour Therapy', 'Medication Management'],
  },
  {
    icon: '🩺',
    title: 'Physical Health',
    href: '/services/physical-health',
    items: ['Family Medicine', 'Annual Physical Exams', 'Disease Management', 'Preventive Care', "Women's Health"],
  },
  {
    icon: '🏥',
    title: 'Walk-In Clinic',
    href: '/services/walk-in-clinic',
    items: ['No Appointment Needed', 'Illness & Injury Care', 'Prescriptions & Renewals', 'STI Testing', 'Sick Notes'],
  },
  {
    icon: '💊',
    title: 'Pharmacy',
    href: '/services/pharmacy',
    items: ['Prescription Dispensing', 'Medication Reviews', 'Blister Packaging', 'Compounding Services', 'Immunizations & Vaccines'],
  },
]

export default function ServicesSlider() {
  const [active, setActive] = useState(0)

  const getCardStyle = (i) => {
    const diff = i - active
    if (diff === 0) return {
      transform: 'translateX(0) scale(1) rotateY(0deg)',
      zIndex: 10,
      opacity: 1,
      filter: 'brightness(1)',
    }
    if (Math.abs(diff) === 1) return {
      transform: `translateX(${diff * 55}%) scale(0.88) rotateY(${diff * -18}deg)`,
      zIndex: 5,
      opacity: 0.75,
      filter: 'brightness(0.85)',
    }
    return {
      transform: `translateX(${diff * 75}%) scale(0.76) rotateY(${diff * -28}deg)`,
      zIndex: 1,
      opacity: 0.4,
      filter: 'brightness(0.7)',
    }
  }

  return (
    <>
      {/* Desktop: 1x4 horizontal row */}
      <div className="hidden md:grid grid-cols-4 gap-5 max-w-6xl mx-auto">
        {services.map(s => (
          <Link
            key={s.href}
            href={s.href}
            className="card p-6 border border-teal-100 hover:scale-[1.02] transition-transform duration-200 group animate-fade-up"
            style={{ background: CARD_GRADIENT }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
              style={{ background: ICON_GRADIENT }}
            >
              {s.icon}
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">{s.title}</h3>
            <ul className="space-y-1.5">
              {s.items.map(item => (
                <li key={item} className="text-xs text-slate-600 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT_COLOR }}></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-xs font-semibold group-hover:translate-x-1 transition-transform" style={{ color: ACCENT_COLOR }}>Learn more →</div>
          </Link>
        ))}
      </div>

      {/* Mobile: 3D perspective slider */}
      <div className="md:hidden">
        <div
          className="relative h-80 flex items-center justify-center"
          style={{ perspective: '900px' }}
        >
          {services.map((s, i) => (
            <div
              key={s.href}
              onClick={() => { if (i !== active) setActive(i) }}
              className="absolute w-64 cursor-pointer"
              style={{
                ...getCardStyle(i),
                transition: 'all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="rounded-2xl border-2 border-teal-100 p-6 shadow-xl"
                style={{ background: CARD_GRADIENT }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: ICON_GRADIENT }}
                >
                  {s.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map(item => (
                    <li key={item} className="text-xs text-slate-600 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT_COLOR }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
                {i === active && (
                  <Link
                    href={s.href}
                    className="mt-4 inline-block text-xs font-semibold"
                    style={{ color: ACCENT_COLOR }}
                    onClick={e => e.stopPropagation()}
                  >
                    Learn more →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-4">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === active ? ACCENT_COLOR : '#cbd5e1',
                transform: i === active ? 'scale(1.3)' : 'scale(1)',
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={() => setActive(prev => Math.max(0, prev - 1))}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-30"
            disabled={active === 0}
          >‹</button>
          <button
            onClick={() => setActive(prev => Math.min(services.length - 1, prev + 1))}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors disabled:opacity-30"
            disabled={active === services.length - 1}
          >›</button>
        </div>
      </div>
    </>
  )
}
