import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import BookingForm from '../../../components/BookingForm'
import Link from 'next/link'

const services = [
  { name: 'Family Medicine', desc: 'Ongoing primary care for patients of all ages — your family\'s long-term health partner.' },
  { name: 'Annual Physical Exams', desc: 'Comprehensive yearly check-ups to catch issues early and keep you on track.' },
  { name: 'Disease Management', desc: 'Structured care plans for chronic conditions like diabetes, hypertension, and more.' },
  { name: 'Bloodwork & Lab Referrals', desc: 'On-site lab requisitions and referrals for diagnostic testing and bloodwork.' },
  { name: 'Preventive Care', desc: 'Screenings, immunizations, and lifestyle guidance to stay ahead of health issues.' },
  { name: 'Specialist Referrals', desc: 'Fast, coordinated referrals to specialists within and outside the centre.' },
  { name: "Women's Health", desc: 'Dedicated care for women\'s health needs including reproductive health, prenatal care, and more.' },
]

export const metadata = {
  title: 'Physical Health | Ottawa Street Medical Centre',
  description: 'Family medicine and physical health services in Windsor. Book at Ottawa Street Medical Centre.',
}

export default function PhysicalHealthPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-teal-900 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <Link href="/services" className="text-teal-300 text-xs font-semibold hover:underline mb-4 inline-block">← All Clinics & Services</Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-teal-500/30 rounded-2xl flex items-center justify-center text-3xl">🩺</div>
              <div>
                <p className="text-teal-300 text-xs font-bold tracking-widest uppercase">Primary Care</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold">Physical Health</h1>
              </div>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">Family medicine and preventive care for patients of all ages — your long-term health partner in Windsor.</p>
          </div>
        </section>

        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <p className="section-label">What's Included</p>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10">Physical Health Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map(s => (
                <div key={s.name} className="card p-6 border border-teal-50">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">{s.name}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="py-20 px-4 bg-teal-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="section-label">Get Started</p>
              <h2 className="font-display text-3xl font-bold text-slate-900">Book a Physical Health Appointment</h2>
              <p className="text-slate-500 mt-2 text-sm">Submit your request and our front desk will confirm a time with you.</p>
            </div>
            <div className="card p-8">
              <BookingForm defaultService="family-medicine" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
