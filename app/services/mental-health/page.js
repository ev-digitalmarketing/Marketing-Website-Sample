import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import BookingForm from '../../../components/BookingForm'
import Link from 'next/link'

const services = [
  { name: 'Psychiatric Assessment', desc: 'Thorough clinical evaluations using specialized screening tools for ADHD, mood disorders, anxiety, and more to ensure an accurate diagnosis.' },
  { name: 'Psychological Assessment', desc: 'In-depth psychological testing and evaluation to better understand cognitive and emotional functioning.' },
  { name: 'Medication Management', desc: 'Professional oversight of psychiatric prescriptions focused on finding your optimal balance while carefully monitoring side effects.' },
  { name: 'Counselling & Therapy', desc: 'One-on-one therapeutic sessions in a safe, confidential environment tailored to your needs and goals.' },
  { name: 'TMS & Ketamine Treatment', desc: 'Advanced treatment options for treatment-resistant depression and other conditions, administered by qualified specialists.' },
  { name: 'Crisis Intervention', desc: 'Immediate mental health support for acute psychological crises, with pathways to ongoing care.' },
  { name: 'Cognitive Behaviour Therapy (CBT)', desc: 'Evidence-based therapy that helps you identify and change negative thought patterns affecting your mood and behaviour.' },
]

export const metadata = {
  title: 'Mental Health Services | Ottawa Street Medical Centre',
  description: 'Comprehensive mental health support and psychiatric care in Windsor. Book with Dr. Aleem Khan\'s office at Ottawa Street Medical Centre.',
}

export default function MentalHealthPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-violet-900 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <Link href="/services" className="text-violet-300 text-xs font-semibold hover:underline mb-4 inline-block">← All Clinics & Services</Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-violet-500/30 rounded-2xl flex items-center justify-center text-3xl">🧠</div>
              <div>
                <p className="text-violet-300 text-xs font-bold tracking-widest uppercase">Dr. Aleem Khan's Office</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold">Mental Health</h1>
              </div>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">Comprehensive psychiatric care and mental health support — all integrated with your overall medical care, under one roof.</p>
          </div>
        </section>

        {/* Services list */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <p className="section-label">What's Included</p>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10">Mental Health Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map(s => (
                <div key={s.name} className="card p-6 border border-violet-50">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0"></div>
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

        {/* Why us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-semibold text-slate-800 mb-2">Integrated Care</h3>
              <p className="text-sm text-slate-500">Your mental health plan is synced with your overall medical history — no more siloed care.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold text-slate-800 mb-2">Dedicated Support</h3>
              <p className="text-sm text-slate-500">Consistent follow-ups and private consultations in a comfortable, judgment-free environment.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="font-semibold text-slate-800 mb-2">On-Site Pharmacy</h3>
              <p className="text-sm text-slate-500">Fill your prescriptions immediately after your appointment without leaving the building.</p>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="py-20 px-4 bg-violet-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="section-label text-violet-600">Get Started</p>
              <h2 className="font-display text-3xl font-bold text-slate-900">Book a Mental Health Appointment</h2>
              <p className="text-slate-500 mt-2 text-sm">Submit your request and our front desk will confirm a time with you.</p>
            </div>
            <div className="card p-8">
              <BookingForm defaultService="psychiatric-assessment" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
