import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm">OM</div>
            <div>
              <div className="font-display font-bold text-white text-base leading-tight">Ottawa St Medical</div>
              <div className="text-teal-400 text-xs font-medium">Centre</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">Windsor's complete medical facility — designed to make healthcare more accessible and less complicated.</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Clinics & Services</h4>
          <ul className="space-y-2">
            <li><Link href="/services/mental-health" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Mental Health</Link></li>
            <li><Link href="/services/physical-health" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Physical Health</Link></li>
            <li><Link href="/services/walk-in-clinic" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Walk-In Clinic</Link></li>
            <li><Link href="/services/pharmacy" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Pharmacy</Link></li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">All Services</Link></li>
            <li><Link href="/contact" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Contact</Link></li>
            <li><Link href="/contact#booking" className="text-sm text-teal-400 hover:text-teal-300 font-semibold transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex gap-2"><span>📍</span><span>1535 Ottawa Street<br />Windsor, ON</span></li>
            <li className="flex gap-2"><span>📞</span><a href="tel:+12223334444" className="hover:text-teal-400 transition-colors">+1-222-333-4444</a></li>
            <li className="flex gap-2"><span>✉️</span><a href="mailto:info@ottawamedical.ca" className="hover:text-teal-400 transition-colors">info@ottawamedical.ca</a></li>
            <li className="flex gap-2"><span>🕐</span><span>Mon–Sat: 8am–5pm</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Ottawa Street Medical Centre. All rights reserved.</p>
          <p className="mt-1 md:mt-0">Website by EV Digital</p>
        </div>
      </div>
    </footer>
  )
}
