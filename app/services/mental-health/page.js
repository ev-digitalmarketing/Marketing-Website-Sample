import ServicePageLayout from '../../../components/ServicePageLayout'

const psychiatryServices = [
  { name: 'Psychiatric Assessment', desc: 'Thorough clinical evaluations using specialized screening tools for ADHD, mood disorders, anxiety, and more to ensure an accurate diagnosis.' },
  { name: 'Medication Management', desc: 'Professional oversight of psychiatric prescriptions focused on finding your optimal balance while carefully monitoring side effects.' },
  { name: 'TMS & Ketamine Treatment', desc: 'Advanced treatment options for treatment-resistant depression and other conditions, administered by qualified specialists.' },
]

const psychologyServices = [
  { name: 'Psychological Assessment', desc: 'In-depth psychological testing and evaluation to better understand cognitive and emotional functioning.' },
  { name: 'Counselling & Therapy', desc: 'One-on-one therapeutic sessions in a safe, confidential environment tailored to your needs and goals.' },
]

const serviceGroups = [
  { heading: 'Psychiatry Services', services: psychiatryServices },
  { heading: 'Psychology Services', services: psychologyServices },
]

const whyUs = [
  { icon: '🏥', title: 'Integrated Care', desc: 'Your mental health plan is synced with your overall medical history — no more siloed care.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'Consistent follow-ups and private consultations in a comfortable, judgment-free environment.' },
  { icon: '💊', title: 'On-Site Pharmacy', desc: 'Fill your prescriptions immediately after your appointment without leaving the building.' },
]

export const metadata = {
  title: 'Mental Health Services | Ottawa Street Medical Centre',
  description: "Comprehensive mental health support and psychiatric care in Windsor. Book with Dr. Aleem Khan at Ottawa Street Medical Centre.",
}

export default function MentalHealthPage() {
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
      icon="🧠"
      clinic="Dr. Aleem Khan"
      title="Mental Health"
      subtitle="Comprehensive psychiatric care and mental health support — all integrated with your overall medical care, under one roof."
      phone="+1-519-915-5565"
      email="info@ottawastreetmedicalcentre.com"
      serviceGroups={serviceGroups}
      whyUs={whyUs}
      sectionLabel="What's Included"
      servicesHeading="Mental Health Services"
    />
  )
}
