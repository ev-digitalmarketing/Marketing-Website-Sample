import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Ottawa Street Medical Centre',
  description: 'Learn about Ottawa Street Medical Centre — Windsor\'s complete medical facility.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="section-label text-blue-300">Our Story</p>
            <h1 className="font-display text-5xl font-bold mb-4">About Ottawa Street Medical Centre</h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Windsor's most complete medical facility — designed from the ground up to make healthcare simpler.</p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="section-label">Our Mission</p>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Healthcare Shouldn't Be Complicated</h2>
                <p className="text-slate-600 leading-relaxed mb-4">Ottawa Street Medical Centre was built around a simple idea: patients shouldn't have to travel across the city to get the care they need. By bringing mental health, physical health, walk-in services, and pharmacy together under one roof, we've created a healthcare environment that's genuinely convenient.</p>
                <p className="text-slate-600 leading-relaxed">Our clinicians collaborate directly, meaning your care is coordinated — not fragmented. Your mental health team knows your physical health history. Your prescriptions are filled the same day. That's the Ottawa Street difference.</p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="text-2xl">🏥</div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">All Under One Roof</h3>
                      <p className="text-sm text-slate-500">4 clinics and a full pharmacy — one building, one address.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">🤝</div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Integrated Care</h3>
                      <p className="text-sm text-slate-500">Our providers collaborate to deliver coordinated, holistic healthcare.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Windsor's Own</h3>
                      <p className="text-sm text-slate-500">Located at 1535 Ottawa Street in the heart of Windsor, ON.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-b border-slate-100 mb-16">
              {[
                { stat: '4', label: 'Clinics on site' },
                { stat: '1', label: 'Full-service pharmacy' },
                { stat: '20+', label: 'Services available' },
                { stat: '6', label: 'Days per week' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <div className="font-display text-4xl font-bold text-blue-600 mb-1">{item.stat}</div>
                  <div className="text-sm text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Ready to Experience the Difference?</h2>
              <p className="text-slate-500 mb-6">Book an appointment today or explore our services to find the care that's right for you.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact#booking" className="btn-primary">Book an Appointment</Link>
                <Link href="/services" className="btn-outline">View All Services</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
