import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import BookingForm from '../../../components/BookingForm'
import Link from 'next/link'

const services = [
  { name: 'Prescription Dispensing', desc: 'Fast, accurate dispensing of prescriptions — especially convenient right after your appointment.' },
  { name: 'Medication Synchronization', desc: 'We sync all your refills to the same pick-up date so you only need to come in once a month.' },
  { name: 'Medication Reviews', desc: 'Comprehensive reviews to ensure your medications are working together effectively and safely.' },
  { name: 'Blister Packaging', desc: 'Pre-sorted medication packaging to help you stay on schedule and never miss a dose.' },
  { name: 'Compounding Services', desc: 'Custom-formulated medications tailored to your specific needs when standard options aren\'t suitable.' },
  { name: 'Immunizations & Vaccines', desc: 'Flu shots, travel vaccines, and other immunizations available directly from our pharmacists.' },
  { name: 'Over-the-Counter Products', desc: 'Wide selection of OTC medications, vitamins, and health products available in-store.' },
]

export const metadata = {
  title: 'Pharmacy | Ottawa Street Medical Centre',
  description: 'On-site pharmacy at Ottawa Street Medical Centre in Windsor. Prescriptions, medication reviews, compounding, and more.',
}

export default function PharmacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <Link href="/services" className="text-emerald-300 text-xs font-semibold hover:underline mb-4 inline-block">← All Clinics & Services</Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-emerald-500/30 rounded-2xl flex items-center justify-center text-3xl">💊</div>
              <div>
                <p className="text-emerald-300 text-xs font-bold tracking-widest uppercase">On-Site</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold">Pharmacy</h1>
              </div>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">A full-service pharmacy inside the medical centre — fill your prescription immediately after your appointment without an extra trip.</p>
          </div>
        </section>

        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <p className="section-label">What's Available</p>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10">Pharmacy Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map(s => (
                <div key={s.name} className="card p-6 border border-emerald-50">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
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

        <section id="booking" className="py-20 px-4 bg-emerald-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="section-label text-emerald-600">Medication Consultation</p>
              <h2 className="font-display text-3xl font-bold text-slate-900">Book a Pharmacy Consultation</h2>
              <p className="text-slate-500 mt-2 text-sm">Request a medication review or compounding consultation and our pharmacist will follow up.</p>
            </div>
            <div className="card p-8">
              <BookingForm defaultService="medication-review" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
