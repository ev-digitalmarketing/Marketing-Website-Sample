import ServicePageLayout from '../../../components/ServicePageLayout'

const services = [
  { name: 'Psychiatric Assessment', desc: 'Thorough clinical evaluations using specialized screening tools for ADHD, mood disorders, anxiety, and more to ensure an accurate diagnosis.' },
  { name: 'Psychological Assessment', desc: 'In-depth psychological testing and evaluation to better understand cognitive and emotional functioning.' },
  { name: 'Medication Management', desc: 'Professional oversight of psychiatric prescriptions focused on finding your optimal balance while carefully monitoring side effects.' },
  { name: 'Counselling & Therapy', desc: 'One-on-one therapeutic sessions in a safe, confidential environment tailored to your needs and goals.' },
  { name: 'TMS & Ketamine Treatment', desc: 'Advanced treatment options for treatment-resistant depression and other conditions, administered by qualified specialists.' },
  { name: 'Crisis Intervention', desc: 'Immediate mental health support for acute psychological crises, with pathways to ongoing care.' },
  { name: 'Cognitive Behaviour Therapy (CBT)', desc: 'Evidence-based therapy that helps you identify and change negative thought patterns affecting your mood and behaviour.' },
]

const whyUs = [
  { icon: '🏥', title: 'Integrated Care', desc: 'Your mental health plan is synced with your overall medical history — no more siloed care.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'Consistent follow-ups and private consultations in a comfortable, judgment-free environment.' },
  { icon: '💊', title: 'On-Site Pharmacy', desc: 'Fill your prescriptions immediately after your appointment without leaving the building.' },
]

export const metadata = {
  title: 'Mental Health Services | Ottawa Street Medical Centre',
  description: "Comprehensive mental health support and psychiatric care in Windsor. Book with Dr. Aleem Khan's office at Ottawa Street Medical Centre.",
}

export default function MentalHealthPage() {
  return (
    <ServicePageLayout
      accentGradient="from-violet-900 to-slate-900"
      accentColor="#7c3aed"
      accentLight="text-violet-300"
      accentBg="bg-violet-500/30"
      accentBorder="border-violet-500/30"
      accentCardBorder="border-violet-200"
      accentDot="bg-violet-500"
      accentSection="bg-violet-50"
      icon="🧠"
      clinic="Dr. Aleem Khan's Office"
      title="Mental Health"
      subtitle="Comprehensive psychiatric care and mental health support — all integrated with your overall medical care, under one roof."
      phone="+1-519-915-1394"
      email="mentalhealth@ottawastreetmedicalcentre.ca"
      services={services}
      whyUs={whyUs}
      sectionLabel="What's Included"
      servicesHeading="Mental Health Services"
    />
  )
}
