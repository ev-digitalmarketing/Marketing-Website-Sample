import ServicePageLayout from '../../../components/ServicePageLayout'

const services = [
  { name: 'Family Medicine', desc: 'Ongoing primary care for patients of all ages — your family\'s long-term health partner.' },
  { name: 'Annual Physical Exams', desc: 'Comprehensive yearly check-ups to catch issues early and keep you on track.' },
  { name: 'Disease Management', desc: 'Structured care plans for chronic conditions like diabetes, hypertension, and more.' },
  { name: 'Bloodwork & Lab Referrals', desc: 'On-site lab requisitions and referrals for diagnostic testing and bloodwork.' },
  { name: 'Preventive Care', desc: 'Screenings, immunizations, and lifestyle guidance to stay ahead of health issues.' },
  { name: 'Specialist Referrals', desc: 'Fast, coordinated referrals to specialists within and outside the centre.' },
  { name: "Women's Health", desc: "Dedicated care for women's health needs including reproductive health, prenatal care, and more." },
]

const whyUs = [
  { icon: '👨‍👩‍👧', title: 'Family-Centred', desc: 'We care for every stage of life, from pediatric visits to senior wellness — all in one location.' },
  { icon: '🔬', title: 'On-Site Lab Access', desc: 'Quick bloodwork requisitions and referrals to keep your diagnostics streamlined.' },
  { icon: '🤝', title: 'Coordinated Referrals', desc: 'Seamless referrals to specialists inside and outside the centre when you need them.' },
]

export const metadata = {
  title: 'Physical Health | Ottawa Street Medical Centre',
  description: 'Family medicine and physical health services in Windsor. Book at Ottawa Street Medical Centre.',
}

export default function PhysicalHealthPage() {
  return (
    <ServicePageLayout
      accentGradient="from-teal-900 to-slate-900"
      accentColor="#0d9488"
      accentLight="text-teal-300"
      accentBg="bg-teal-500/30"
      accentBorder="border-teal-500/30"
      accentCardBorder="border-teal-200"
      accentDot="bg-teal-500"
      accentSection="bg-teal-50"
      icon="🩺"
      clinic="Primary Care"
      title="Physical Health"
      subtitle="Family medicine and preventive care for patients of all ages — your long-term health partner in Windsor."
      phone="+1-519-915-1394"
      email="info@ottawastreetmedicalcentre.ca"
      services={services}
      whyUs={whyUs}
      sectionLabel="What's Included"
      servicesHeading="Physical Health Services"
    />
  )
}
