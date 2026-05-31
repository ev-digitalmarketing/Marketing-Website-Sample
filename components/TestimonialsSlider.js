'use client'
import { useState, useEffect } from 'react'

export default function TestimonialsSlider({ testimonials }) {
  const [active, setActive] = useState(0)

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive(i => (i + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const t = testimonials[active]

  return (
    <div>
      {/* Card */}
      <div className="card p-8 min-h-48 relative overflow-hidden border border-slate-100">
        {/* Big quote mark decoration */}
        <div className="absolute top-4 right-6 font-display text-8xl text-blue-100 leading-none select-none pointer-events-none">"</div>

        <div className="flex mb-4">
          {'⭐'.repeat(t.rating)}
        </div>

        <p
          key={active}
          className="text-slate-600 leading-relaxed mb-6 italic text-base fade-up"
        >
          "{t.text}"
        </p>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
            {t.name.charAt(0)}
          </div>
          <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-5">
        <button
          onClick={() => setActive(i => (i - 1 + testimonials.length) % testimonials.length)}
          className="w-9 h-9 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all"
        >‹</button>

        <div className="flex gap-2 flex-1">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === active ? '#2563eb' : '#e2e8f0',
                width: i === active ? '2rem' : '0.75rem',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setActive(i => (i + 1) % testimonials.length)}
          className="w-9 h-9 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all"
        >›</button>
      </div>
    </div>
  )
}
