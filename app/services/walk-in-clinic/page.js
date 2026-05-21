import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import BookingForm from '../../../components/BookingForm'
import Link from 'next/link'

const services = [
  { name: 'Illness & Injury Assessment', desc: 'Prompt evaluation and treatment for non-emergency illness and injuries.' },
  { name: 'Prescriptions & Renewals', desc: 'New prescriptions and renewals for eligible medications.' },
  { name: 'Vaccination & Immunization', desc: 'Routine and travel vaccines for all ages.' },
  { name: 'Blood Pressure & Vitals', desc: 'Quick vital signs checks and blood pressure monitoring.' },
  { name: 'STI Testing', desc: 'Confidential screening and testing for sexually transmitted infections.' },
  { name: 'Sick Notes', desc: 'Documentation for work or school absences due to illness.' },
]

export const metadata = {
  title: 'Walk-In Clinic | Ottawa Street Medical Centre',
  description: 'No appointment needed. Walk-in medical care in Windsor at Ottawa Street Medical Centre.',
}

export default function WalkInPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-sky-900 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <Link href="/services" className="text-sky-300 text-xs font-semibold hover:underline mb-4 inline-block">← All Clinics & Services</Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-sky-500/30 rounded-2xl flex items-center justify-center text-3xl">🏥</div>
              <div>
                <p className="text-sky-300 text-xs font-bold tracking-widest uppercase">No Appointment Needed</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold">Walk-In Clinic</h1>
              </div>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">Quick, accessible care without the wait. Just come in during clinic hours — no booking required.</p>
            <div className="inline-flex items-center gap-2 mt-5 bg-sky-500/20 border border-sky-500/30 rounded-lg px-4 py-2 text-sky-300 text-sm font-medium">
              🕐 Open Mon–Sat, 8am–5pm &nbsp;|&nbsp; First-come, first-served
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <p className="section-label">What's Included</p>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10">Walk-In Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map(s => (
                <div key={s.name} className="card p-6 border border-sky-50">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>
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

        {/* Walk-in note + optional booking */}
        <section id="booking" className="py-20 px-4 bg-sky-50">
          <div className="max-w-3xl mx-auto">
            <div className="bg-sky-100 border border-sky-200 rounded-2xl p-6 mb-8 text-center">
              <div className="text-3xl mb-2">🚶</div>
              <h3 className="font-semibold text-sky-900 mb-1">Walk-Ins Welcome</h3>
              <p className="text-sky-800 text-sm">No appointment needed for walk-in visits. Simply arrive during operating hours and you'll be seen on a first-come, first-served basis.</p>
            </div>
            <div className="text-center mb-8">
              <p className="section-label">Optional</p>
              <h2 className="font-display text-3xl font-bold text-slate-900">Prefer to Give Us a Heads Up?</h2>
              <p className="text-slate-500 mt-2 text-sm">Submit a request and we'll note your arrival. Still first-come, first-served but good for planning your day.</p>
            </div>
            <div className="card p-8">
              <BookingForm defaultService="walkin-illness-injury" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
