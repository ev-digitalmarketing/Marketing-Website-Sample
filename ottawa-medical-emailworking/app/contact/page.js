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
        <section className="px-4 relative overflow-hidden flex items-center" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #bfdbfe 60%, #dbeafe 100%)', minHeight: '280px', paddingTop: '140px', paddingBottom: '64px' }}>
          <div className="max-w-6xl mx-auto w-full text-center">
            <p className="section-label animate-fade-up">Get in Touch</p>
            <h1 className="font-display text-5xl font-bold mb-4 text-blue-950 animate-fade-up delay-100">Contact Us</h1>
            <p className="text-blue-900/75 text-lg max-w-xl mx-auto animate-fade-up delay-200">Book an appointment, ask a question, or just find out where we are. We're here to help.</p>
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
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">Address</h3>
                    <p className="text-slate-500 text-sm">1535 Ottawa Street, Windsor, ON</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📞</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">Phone</h3>
                    <a href="tel:+15199151394" className="text-blue-600 text-sm hover:underline">+1-519-915-1394</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">Email</h3>
                    <a href="mailto:info@ottawastreetmedicalcentre.com" className="text-blue-600 text-sm hover:underline">info@ottawastreetmedicalcentre.com</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">Hours</h3>
                    <p className="text-slate-500 text-sm">Monday – Saturday: 8:00am – 5:00pm</p>
                    <p className="text-slate-400 text-xs mt-0.5">Closed Sundays & statutory holidays</p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.123456789!2d-83.0167!3d42.3149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d5c1234abcd%3A0xabcdef1234567890!2s1535+Ottawa+St%2C+Windsor%2C+ON+N8X+2G4!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ottawa Street Medical Centre Location"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="card p-8">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-1">Appointment Request Form</h3>
              <p className="text-slate-500 text-xs mb-5">Our front desk will contact you to confirm a time. Walk-in Clinic and Pharmacy visits don't require a booking.</p>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
