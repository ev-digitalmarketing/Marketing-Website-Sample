import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BookingForm from '../../components/BookingForm'

export const metadata = {
  title: 'Contact & Book | Ottawa Street Medical Centre',
  description: 'Book an appointment or contact Ottawa Street Medical Centre in Windsor, ON.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-800 to-teal-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="section-label text-teal-300">Get in Touch</p>
            <h1 className="font-display text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">Book an appointment, ask a question, or just find out where we are. We're here to help.</p>
          </div>
        </section>

        <section id="booking" className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <p className="section-label">Book Online</p>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Request an Appointment</h2>
              <p className="text-slate-500 leading-relaxed mb-8">Fill out the form and our front desk team will contact you to confirm your appointment time and any details needed. We typically respond within one business day.</p>

              <div className="space-y-5 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">Address</h3>
                    <p className="text-slate-500 text-sm">1535 Ottawa Street, Windsor, ON</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📞</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">Phone</h3>
                    <a href="tel:+15199151394" className="text-teal-600 text-sm hover:underline">+1-519-915-1394</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">Email</h3>
                    <a href="mailto:info@ottawastreetmedicalcentre.ca" className="text-teal-600 text-sm hover:underline">info@ottawastreetmedicalcentre.ca</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">Hours</h3>
                    <p className="text-slate-500 text-sm">Monday – Saturday: 8:00am – 5:00pm</p>
                    <p className="text-slate-400 text-xs mt-0.5">Closed Sundays & statutory holidays</p>
                  </div>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <div className="text-3xl mb-2">🗺️</div>
                  <p className="text-sm">Replace with Google Maps embed</p>
                  <p className="text-xs">1535 Ottawa Street, Windsor, ON</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">To embed a real map: paste a Google Maps &lt;iframe&gt; embed code in place of the placeholder above.</p>
            </div>

            {/* Form */}
            <div className="card p-8">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Appointment Request Form</h3>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
