import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const clinics = [
  {
    icon: '🧠',
    title: 'Mental Health',
    href: '/services/mental-health',
    tagline: 'Dr. Aleem Khan\'s Office — Psychiatric Care & Mental Health Management',
    description: 'Comprehensive mental health support and specialized psychiatric care located right within the medical centre. We take an integrated approach that connects your mental health plan with your overall medical history.',
    services: ['Psychiatric Assessment', 'Psychological Assessment', 'Medication Management', 'Counselling & Therapy', 'TMS & Ketamine Treatment', 'Crisis Intervention', 'Cognitive Behaviour Therapy'],
    accent: 'violet',
  },
  {
    icon: '🩺',
    title: 'Physical Health',
    href: '/services/physical-health',
    tagline: 'Family Medicine & Preventive Care',
    description: 'Primary care and family medicine for patients of all ages. Our physicians provide continuous, comprehensive care focused on keeping you healthy for the long term.',
    services: ['Family Medicine', 'Annual Physical Exams', 'Disease Management', 'Bloodwork & Lab Referrals', 'Preventive Care', 'Specialist Referrals', "Women's Health"],
    accent: 'teal',
  },
  {
    icon: '🏥',
    title: 'Walk-In Clinic',
    href: '/services/walk-in-clinic',
    tagline: 'No Appointment Needed — Open to All',
    description: 'Quick, accessible care without the wait. Our walk-in clinic handles everything from minor illness and injury to prescription renewals, vaccinations, and more.',
    services: ['Illness & Injury Assessment', 'Prescriptions & Renewals', 'Vaccination & Immunization', 'Blood Pressure & Vitals', 'STI Testing', 'Sick Notes'],
    accent: 'sky',
  },
  {
    icon: '💊',
    title: 'Pharmacy',
    href: '/services/pharmacy',
    tagline: 'On-Site Full-Service Pharmacy',
    description: 'Our on-site pharmacy makes it easy to fill your prescriptions immediately after your appointment. We offer comprehensive pharmaceutical care and medication management services.',
    services: ['Prescription Dispensing', 'Medication Reviews', 'Medication Synchronization', 'Blister Packaging', 'Compounding Services', 'Immunizations & Vaccines', 'Over-the-Counter Products'],
    accent: 'emerald',
  },
]

const accentMap = {
  violet: { card: 'border-violet-100 hover:border-violet-200', badge: 'bg-violet-100 text-violet-700', btn: 'bg-violet-600 hover:bg-violet-700' },
  teal:   { card: 'border-teal-100 hover:border-teal-200',   badge: 'bg-teal-100 text-teal-700',   btn: 'bg-teal-600 hover:bg-teal-700' },
  sky:    { card: 'border-sky-100 hover:border-sky-200',     badge: 'bg-sky-100 text-sky-700',     btn: 'bg-sky-600 hover:bg-sky-700' },
  emerald:{ card: 'border-emerald-100 hover:border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', btn: 'bg-emerald-600 hover:bg-emerald-700' },
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-800 to-teal-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="section-label text-teal-300">Under One Roof</p>
            <h1 className="font-display text-5xl font-bold mb-4">Clinics & Services</h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Everything you need for your health in one building. Explore our clinics below and book directly with the front desk.</p>
          </div>
        </section>

        {/* Clinics */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto space-y-10">
            {clinics.map((clinic, i) => {
              const a = accentMap[clinic.accent]
              return (
                <div key={clinic.href} className={`card border-2 ${a.card} p-8 md:p-10`}>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{clinic.icon}</span>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-slate-900">{clinic.title}</h2>
                          <p className="text-xs text-slate-500 font-medium">{clinic.tagline}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">{clinic.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {clinic.services.map(s => (
                          <span key={s} className={`text-xs font-medium px-3 py-1 rounded-full ${a.badge}`}>{s}</span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Link href={clinic.href} className={`btn-primary ${a.btn} text-sm`}>Learn More & Book</Link>
                        <Link href={`/contact#booking`} className="btn-outline text-sm">Quick Book</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
