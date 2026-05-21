'use client'
import { useState } from 'react'
import Link from 'next/link'

const services = [
  { name: 'Mental Health', href: '/services/mental-health', desc: 'Psychiatric & therapy care' },
  { name: 'Physical Health', href: '/services/physical-health', desc: 'Family medicine & preventive care' },
  { name: 'Walk-In Clinic', href: '/services/walk-in-clinic', desc: 'No appointment needed' },
  { name: 'Pharmacy', href: '/services/pharmacy', desc: 'On-site prescription services' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-teal-700 text-white text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>📍 1535 Ottawa Street, Windsor, ON</span>
          <span>Mon–Sat: 8am–5pm &nbsp;|&nbsp; <a href="tel:+12223334444" className="hover:underline">+1-222-333-4444</a></span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm">OM</div>
          <div>
            <div className="font-display font-bold text-slate-900 text-base leading-tight">Ottawa St Medical</div>
            <div className="text-teal-600 text-xs font-medium">Centre</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors">Home</Link>

          {/* Services dropdown */}
          <div className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors flex items-center gap-1">
              Clinics & Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Our Clinics</div>
                {services.map(s => (
                  <Link key={s.href} href={s.href} className="flex flex-col px-4 py-3 hover:bg-teal-50 transition-colors group">
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-teal-700">{s.name}</span>
                    <span className="text-xs text-slate-500">{s.desc}</span>
                  </Link>
                ))}
                <div className="border-t border-slate-100 mt-2 pt-2 px-4 pb-1">
                  <Link href="/services" className="text-xs font-semibold text-teal-600 hover:underline">View all services →</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact#booking" className="btn-primary text-sm">Book Appointment</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 h-0.5 bg-slate-800 mb-1 transition-all"></div>
          <div className="w-5 h-0.5 bg-slate-800 mb-1"></div>
          <div className="w-5 h-0.5 bg-slate-800"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4">
          <Link href="/" className="block py-3 text-sm font-medium text-slate-700 border-b border-slate-50" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" className="block py-3 text-sm font-medium text-slate-700 border-b border-slate-50" onClick={() => setMenuOpen(false)}>Clinics & Services</Link>
          {services.map(s => (
            <Link key={s.href} href={s.href} className="block py-2 pl-4 text-sm text-slate-600 border-b border-slate-50" onClick={() => setMenuOpen(false)}>— {s.name}</Link>
          ))}
          <Link href="/about" className="block py-3 text-sm font-medium text-slate-700 border-b border-slate-50" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block py-3 text-sm font-medium text-slate-700 border-b border-slate-50" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/contact#booking" className="btn-primary mt-3 w-full justify-center" onClick={() => setMenuOpen(false)}>Book Appointment</Link>
        </div>
      )}
    </header>
  )
}
