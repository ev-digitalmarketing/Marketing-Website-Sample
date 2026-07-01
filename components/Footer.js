import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Ottawa-Street-Medical-Centre-icon.png"
              alt="Ottawa Street Medical Centre"
              width={52}
              height={52}
              className="object-contain"
            />
            <span className="text-white font-semibold text-base leading-tight">Ottawa Street<br />Medical Centre</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">Windsor's complete medical facility — designed to make healthcare more accessible and less complicated.</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Clinics & Services</h4>
          <ul className="space-y-2">
            <li><Link href="/services/mental-health" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Mental Health</Link></li>
            <li><Link href="/services/physical-health" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Physical Health</Link></li>
            <li><Link href="/services/walk-in-clinic" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Walk-In Clinic</Link></li>
            <li><Link href="/services/pharmacy" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Pharmacy</Link></li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">All Services</Link></li>
            <li><Link href="/contact" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Contact</Link></li>
            <li><Link href="/contact#booking" className="text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex gap-2"><span>📍</span><span>1535 Ottawa Street<br />Windsor, ON</span></li>
            <li className="flex gap-2"><span>📞</span><a href="tel:+15199151394" className="hover:text-blue-400 transition-colors">+1-519-915-1394</a></li>
            <li className="flex gap-2"><span>✉️</span><a href="mailto:info@ottawastreetmedicalcentre.com" className="hover:text-blue-400 transition-colors">info@ottawastreetmedicalcentre.com</a></li>
            <li className="flex gap-2"><span>🕐</span><span>Mon–Sat: 8am–5pm</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-900">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Ottawa Street Medical Centre | Website by <a href="https://elevateviral.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">EV Digital Marketing</a></p>
        </div>
      </div>
    </footer>
  )
}
