import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import ServicesSlider from '../components/ServicesSlider'
import TestimonialsSlider from '../components/TestimonialsSlider'

const testimonials = [
  { text: 'Having my doctor, therapist, and pharmacy all in the same building has made managing my health so much easier. I don\'t know why every clinic isn\'t set up this way.', name: 'Priya K.', rating: 5 },
  { text: 'The walk-in clinic is efficient and the staff are straightforward. No long waits, no runaround. Exactly what you want when you\'re not feeling well.', name: 'James T.', rating: 5 },
  { text: 'The mental health services here are genuinely comprehensive. It\'s rare to find a clinic that takes it as seriously as they do. Made a real difference for me.', name: 'Sarah M.', rating: 5 },
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
        {/* Hero — copy left, form right */}
        <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 60%, #14b8a6 0%, transparent 55%), radial-gradient(circle at 80% 15%, #0ea5e9 0%, transparent 50%)' }}></div>
          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold mb-6 tracking-wide uppercase animate-fade-up">
                Windsor's Full-Suite Medical Facility
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 animate-fade-up delay-100">
                Complete Care,<br />
                <span className="text-teal-400">One Location.</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-lg animate-fade-up delay-200">
                Mental health, physical health, walk-in services and pharmacy — all under one roof at 1535 Ottawa Street.
              </p>
              <div className="flex flex-wrap gap-3 mb-8 animate-fade-up delay-300">
                <Link href="/services" className="btn-outline border-white/40 text-white hover:bg-white/10 hover:text-white">Our Clinics & Services</Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-400 animate-fade-up delay-400">
                <span className="flex items-center gap-1.5"><span className="text-teal-400">📞</span> <a href="tel:+15199151394" className="hover:text-white transition-colors">+1-519-915-1394</a></span>
                <span className="flex items-center gap-1.5"><span className="text-teal-400">🕐</span> Mon–Sat 8am–5pm</span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1535+Ottawa+Street+Windsor+ON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span className="text-teal-400">📍</span> 1535 Ottawa St, Windsor
                </a>
              </div>
            </div>

            {/* Right: booking form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 animate-slide-right delay-200">
              <h2 className="font-display text-xl font-bold text-white mb-1">Request an Appointment</h2>
              <p className="text-slate-400 text-xs mb-5">Our front desk will contact you to confirm your time.</p>
              <BookingForm whiteLabels />
            </div>
          </div>
        </section>

        {/* Services — desktop 2x2 grid, mobile 3D slider */}
        <section id="services" className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label animate-fade-up">What We Offer</p>
              <h2 className="font-display text-4xl font-bold text-slate-900 animate-fade-up delay-100">Clinics & Services</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto animate-fade-up delay-200">Ottawa St Medical Centre brings together a range of healthcare services in one location.</p>
            </div>
            <ServicesSlider />
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-slide-left">
              <p className="section-label">Get In Touch</p>
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">How Can We Help?</h2>
              <p className="text-slate-500 leading-relaxed mb-8">Whether you have a question about our services, need directions, or want to reach a specific clinic — we're here.</p>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📞</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-0.5">Phone</h3>
                    <a href="tel:+15199151394" className="text-teal-600 text-sm hover:underline">+1-519-915-1394</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-0.5">Email</h3>
                    <a href="mailto:info@ottawastreetmedicalcentre.ca" className="text-teal-600 text-sm hover:underline">info@ottawastreetmedicalcentre.ca</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-0.5">Address</h3>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=1535+Ottawa+Street+Windsor+ON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 text-sm hover:underline"
                    >
                      1535 Ottawa Street, Windsor, ON
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-0.5">Hours</h3>
                    <p className="text-slate-500 text-sm">Monday – Saturday: 8:00am – 5:00pm</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-teal-50 border border-teal-100 rounded-xl p-4 text-sm text-teal-800">
                <strong>Walk-In Clinic:</strong> No appointment needed — just come in during operating hours.
              </div>
            </div>
            {/* Testimonials slider */}
            <div className="animate-slide-right">
              <p className="section-label">Patient Stories</p>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">What Our Patients Say</h2>
              <TestimonialsSlider testimonials={testimonials} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label">FAQ</p>
              <h2 className="font-display text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="card p-6 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                  <h3 className="font-semibold text-slate-800 mb-2">{f.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-teal-700 text-white text-center">
          <h2 className="font-display text-3xl font-bold mb-3 animate-fade-up">Ready to Get the Care You Need?</h2>
          <p className="text-teal-100 mb-8 max-w-md mx-auto animate-fade-up delay-100">Windsor's most complete medical facility is here for you — book online or walk in today.</p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-200">
            <Link href="/contact#booking" className="btn-primary bg-white text-teal-800 hover:bg-teal-50">Book an Appointment</Link>
            <Link href="/services" className="btn-outline border-white text-white hover:bg-white/20 hover:text-white">Explore Services</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
