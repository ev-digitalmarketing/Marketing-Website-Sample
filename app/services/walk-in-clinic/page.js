import ServicePageLayout from '../../../components/ServicePageLayout'

const services = [
  { name: 'Illness & Injury Assessment', desc: 'Prompt evaluation and treatment for non-emergency illness and injuries — no appointment needed.' },
  { name: 'Prescriptions & Renewals', desc: 'New prescriptions and renewals for eligible medications on the same visit.' },
  { name: 'Vaccination & Immunization', desc: 'Routine and travel vaccines for all ages, administered by our clinical team.' },
  { name: 'Blood Pressure & Vitals', desc: 'Quick vital signs checks and blood pressure monitoring for your peace of mind.' },
  { name: 'STI Testing', desc: 'Confidential screening and testing for sexually transmitted infections.' },
  { name: 'Sick Notes', desc: 'Documentation for work or school absences due to illness, issued same-day.' },
]

const whyUs = [
  { icon: '🚶', title: 'No Appointment', desc: 'Walk in any time during operating hours — we see patients on a first-come, first-served basis.' },
  { icon: '⚡', title: 'Fast & Efficient', desc: 'Minimal wait times and a streamlined process so you can get back to your day.' },
  { icon: '💊', title: 'Fill Right Away', desc: 'Prescriptions issued at the walk-in can be filled immediately at our on-site pharmacy.' },
]

export const metadata = {
  title: 'Walk-In Clinic | Ottawa Street Medical Centre',
  description: 'No appointment needed. Walk-in medical care in Windsor at Ottawa Street Medical Centre.',
}

export default function WalkInPage() {
  return (
    <ServicePageLayout
      accentGradient="from-sky-900 to-slate-900"
      accentColor="#0284c7"
      accentLight="text-sky-300"
      accentBg="bg-sky-500/30"
      accentBorder="border-sky-500/30"
      accentCardBorder="border-sky-200"
      accentDot="bg-sky-500"
      accentSection="bg-sky-50"
      icon="🏥"
      clinic="No Appointment Needed"
      title="Walk-In Clinic"
      subtitle="Quick, accessible care without the wait. Just come in during clinic hours — open Monday to Saturday, 8am–5pm."
      phone="+1-519-915-1394"
      email="walkin@ottawastreetmedicalcentre.ca"
      services={services}
      whyUs={whyUs}
      sectionLabel="What's Included"
      servicesHeading="Walk-In Services"
    />
  )
}
