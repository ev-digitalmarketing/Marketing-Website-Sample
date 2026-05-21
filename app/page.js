import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'

const services = [
  {
    icon: '🧠',
    title: 'Mental Health',
    href: '/services/mental-health',
    color: 'bg-violet-50 border-violet-100',
    iconBg: 'bg-violet-100 text-violet-700',
    items: ['Psychiatric Assessment', 'Counselling & Therapy', 'TMS & Ketamine Treatment', 'Cognitive Behaviour Therapy', 'Medication Management'],
  },
  {
    icon: '🩺',
    title: 'Physical Health',
    href: '/services/physical-health',
    color: 'bg-teal-50 border-teal-100',
    iconBg: 'bg-teal-100 text-teal-700',
    items: ['Family Medicine', 'Annual Physical Exams', 'Disease Management', 'Preventive Care', "Women's Health"],
  },
  {
    icon: '🏥',
    title: 'Walk-In Clinic',
    href: '/services/walk-in-clinic',
    color: 'bg-sky-50 border-sky-100',
    iconBg: 'bg-sky-100 text-sky-700',
    items: ['No Appointment Needed', 'Illness & Injury Care', 'Prescriptions & Renewals', 'STI Testing', 'Sick Notes'],
  },
  {
    icon: '💊',
    title: 'Pharmacy',
    href: '/services/pharmacy',
    color: 'bg-emerald-50 border-emerald-100',
    iconBg: 'bg-emerald-100 text-emerald-700',
    items: ['Prescription Dispensing', 'Medication Reviews', 'Blister Packaging', 'Compounding Services', 'Immunizations & Vaccines'],
  },
]

const testimonials = [
  { text: 'Having my doctor, therapist, and pharmacy all in the same building has made managing my health so much easier.', name: 'Priya K.', rating: 5 },
  { text: 'The walk-in clinic is efficient and the staff are straightforward. No long waits, no runaround.', name: 'James T.', rating: 5 },
  { text: 'The mental health services here are genuinely comprehensive. Made a real difference for me.', name: 'Sarah M.', rating: 5 },
]

const faqs = [
  { q: 'Do I need an appointment for the Walk-In Clinic?', a: 'The walk-in clinic operates on a first-come, first-served basis during regular hours. No booking required.' },
  { q: 'How do I book an appointment with a specialist?', a: 'Use our booking form above or call us directly. Our front desk will connect you with the right provider.' },
  { q: 'Is there parking available?', a: 'Yes — dedicated parking for patients and visitors is available right at the facility.' },
  { q: 'Are all clinics accepting new patients?', a: 'Patient intake varies by provider. Contact us and we\'ll confirm availability for the specific clinic you need.' },
  { q: 'Is there a pharmacy in the building?', a: 'Yes, our full-service on-site pharmacy can fill prescriptions immediately following your appointment.' },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #14b8a6 0%, transparent 60%), radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 50%)' }}></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold mb-6 tracking-wide uppercase">
                Windsor's Full-Suite Medical Facility
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
                Complete Care,<br />
                <span className="text-teal-400">One Location.</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                Mental health, physical health, walk-in services and pharmacy — all under one roof at 1535 Ottawa Street.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#booking" className="btn-primary bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold">Book an Appointment</Link>
                <Link href="/services" className="btn-outline border-white/40 text-white hover:bg-white/10 hover:text-white">Our Clinics & Services</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section id="services" className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label">What We Offer</p>
              <h2 className="font-display text-4xl font-bold text-slate-900">Clinics & Services</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">Ottawa St Medical Centre brings together a range of healthcare services in one location.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(s => (
                <Link key={s.href} href={s.href} className={`card p-6 border ${s.color} hover:scale-[1.02] transition-transform duration-200 group`}>
                  <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center text-2xl mb-4`}>{s.icon}</div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">{s.title}</h3>
                  <ul className="space-y-1.5">
                    {s.items.map(item => (
                      <li key={item} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-teal-500 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-xs font-semibold text-teal-600 group-hover:translate-x-1 transition-transform">Learn more →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Booking section */}
        <section id="booking" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">Book Online</p>
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Request an Appointment</h2>
              <p className="text-slate-500 leading-relaxed mb-6">Fill out the form and our front desk will reach out to confirm a time that works for you. Can't wait? Call us directly or walk in during clinic hours.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-600"><span className="text-teal-500 text-lg">📞</span> <a href="tel:+12223334444" className="hover:text-teal-600">+1-222-333-4444</a></div>
                <div className="flex items-center gap-3 text-sm text-slate-600"><span className="text-teal-500 text-lg">✉️</span> <a href="mailto:info@ottawamedical.ca" className="hover:text-teal-600">info@ottawamedical.ca</a></div>
                <div className="flex items-center gap-3 text-sm text-slate-600"><span className="text-teal-500 text-lg">🕐</span> Mon–Sat: 8am–5pm</div>
                <div className="flex items-center gap-3 text-sm text-slate-600"><span className="text-teal-500 text-lg">📍</span> 1535 Ottawa Street, Windsor, ON</div>
              </div>
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 text-sm text-teal-800">
                <strong>Walk-In Clinic:</strong> No appointment needed — just come in during operating hours.
              </div>
            </div>
            <div className="card p-8">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label">Patient Stories</p>
              <h2 className="font-display text-4xl font-bold text-slate-900">What Our Patients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="card p-6">
                  <div className="flex mb-3">{'⭐'.repeat(t.rating)}</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <p className="text-sm font-semibold text-slate-800">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label">FAQ</p>
              <h2 className="font-display text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="card p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">{f.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-teal-700 text-white text-center">
          <h2 className="font-display text-3xl font-bold mb-3">Ready to Get the Care You Need?</h2>
          <p className="text-teal-100 mb-8 max-w-md mx-auto">Windsor's most complete medical facility is here for you — book online or walk in today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#booking" className="btn-primary bg-white text-teal-800 hover:bg-teal-50">Book an Appointment</Link>
            <Link href="/services" className="btn-outline border-white text-white hover:bg-white/20 hover:text-white">Explore Services</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
