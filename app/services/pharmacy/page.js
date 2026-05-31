import ServicePageLayout from '../../../components/ServicePageLayout'

const services = [
  { name: 'Prescription Dispensing', desc: 'Fast, accurate dispensing of prescriptions — especially convenient right after your appointment upstairs.' },
  { name: 'Medication Synchronization', desc: 'We sync all your refills to the same pick-up date so you only need to come in once a month.' },
  { name: 'Medication Reviews', desc: 'Comprehensive reviews to ensure your medications are working together effectively and safely.' },
  { name: 'Blister Packaging', desc: 'Pre-sorted medication packaging to help you stay on schedule and never miss a dose.' },
  { name: 'Over-the-Counter Products', desc: 'Wide selection of OTC medications, vitamins, and health products available in-store.' },
]

const whyUs = [
  { icon: '🏥', title: 'In-Building Convenience', desc: 'Fill your prescription immediately after your appointment — no extra trips, no delays.' },
  { icon: '🔄', title: 'Sync Your Refills', desc: 'We coordinate all your medications to a single monthly pick-up date for simplicity.' },
  { icon: '🧪', title: 'Custom Compounding', desc: 'Specially formulated medications when standard dosages or forms don\'t work for you.' },
]

export const metadata = {
  title: 'Pharmacy | Ottawa Street Medical Centre',
  description: 'On-site pharmacy at Ottawa Street Medical Centre in Windsor. Prescriptions, medication reviews, compounding, and more.',
}

export default function PharmacyPage() {
  return (
    <ServicePageLayout
      accentGradient="from-blue-900 to-slate-900"
      accentColor="#2563eb"
      accentLight="text-blue-300"
      accentBg="bg-blue-500/30"
      accentBorder="border-blue-500/30"
      accentCardBorder="border-blue-200"
      accentDot="bg-blue-500"
      accentSection="bg-blue-50"
      icon="💊"
      clinic="On-Site"
      title="Ottawa Street Pharmacy"
      subtitle="A full-service pharmacy inside the medical centre — fill your prescription immediately after your appointment without an extra trip."
      phone="+1-519-915-1250"
      email="ottawastreetpharmacy786@gmail.com"
      services={services}
      whyUs={whyUs}
      sectionLabel="What's Available"
      servicesHeading="Pharmacy Services"
      showBooking={false}
      servicesLayout="list"
    />
  )
}
