'use client'
import { useState } from 'react'

const ALL_SERVICES = [
  // Mental Health
  { value: 'psychiatric-assessment', label: 'Psychiatric Assessment', group: 'Mental Health' },
  { value: 'psychological-assessment', label: 'Psychological Assessment', group: 'Mental Health' },
  { value: 'medication-management-mh', label: 'Medication Management', group: 'Mental Health' },
  { value: 'counselling-therapy', label: 'Counselling & Therapy', group: 'Mental Health' },
  { value: 'tms-ketamine', label: 'TMS & Ketamine Treatment', group: 'Mental Health' },
  { value: 'crisis-intervention', label: 'Crisis Intervention', group: 'Mental Health' },
  { value: 'cbt', label: 'Cognitive Behaviour Therapy (CBT)', group: 'Mental Health' },
  // Physical Health
  { value: 'family-medicine', label: 'Family Medicine', group: 'Physical Health' },
  { value: 'annual-physical', label: 'Annual Physical Exam', group: 'Physical Health' },
  { value: 'disease-management', label: 'Disease Management', group: 'Physical Health' },
  { value: 'bloodwork-lab', label: 'Bloodwork & Lab Referrals', group: 'Physical Health' },
  { value: 'preventive-care', label: 'Preventive Care', group: 'Physical Health' },
  { value: 'specialist-referral', label: 'Specialist Referral', group: 'Physical Health' },
  { value: 'womens-health', label: "Women's Health", group: 'Physical Health' },
  // Walk-In
  { value: 'walkin-illness-injury', label: 'Illness & Injury Assessment', group: 'Walk-In Clinic' },
  { value: 'prescriptions-renewals', label: 'Prescriptions & Renewals', group: 'Walk-In Clinic' },
  { value: 'vaccination', label: 'Vaccination & Immunization', group: 'Walk-In Clinic' },
  { value: 'bp-vitals', label: 'Blood Pressure & Vitals', group: 'Walk-In Clinic' },
  { value: 'sti-testing', label: 'STI Testing', group: 'Walk-In Clinic' },
  { value: 'sick-note', label: 'Sick Note', group: 'Walk-In Clinic' },
  // Pharmacy
  { value: 'prescription-dispensing', label: 'Prescription Dispensing', group: 'Pharmacy' },
  { value: 'medication-review', label: 'Medication Review', group: 'Pharmacy' },
  { value: 'blister-packaging', label: 'Blister Packaging', group: 'Pharmacy' },
  { value: 'compounding', label: 'Compounding Services', group: 'Pharmacy' },
]

const groups = ['Mental Health', 'Physical Health', 'Walk-In Clinic', 'Pharmacy']

export default function BookingForm({ defaultService = '' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    preferredDate: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // In production, wire this to an email API (e.g. Resend, SendGrid, or a Next.js API route)
    // For now, simulate a successful send
    await new Promise(r => setTimeout(r, 1000))
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-display text-xl font-bold text-teal-800 mb-2">Appointment Request Received!</h3>
        <p className="text-sm text-teal-700">Our front desk will be in touch shortly to confirm your appointment time.</p>
        <button onClick={() => { setStatus(null); setForm({ name:'',email:'',phone:'',service: defaultService, preferredDate:'', message:'' }) }}
          className="mt-4 text-sm text-teal-600 underline">Submit another request</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Full Name *</label>
          <input name="name" required value={form.name} onChange={handleChange} className="form-input" placeholder="Jane Smith" />
        </div>
        <div>
          <label className="form-label">Phone Number *</label>
          <input name="phone" required type="tel" value={form.phone} onChange={handleChange} className="form-input" placeholder="+1-519-000-0000" />
        </div>
      </div>

      <div>
        <label className="form-label">Email Address *</label>
        <input name="email" required type="email" value={form.email} onChange={handleChange} className="form-input" placeholder="jane@example.com" />
      </div>

      <div>
        <label className="form-label">Service / Reason for Visit *</label>
        <select name="service" required value={form.service} onChange={handleChange} className="form-input">
          <option value="">— Select a service —</option>
          {groups.map(group => (
            <optgroup key={group} label={group}>
              {ALL_SERVICES.filter(s => s.group === group).map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div>
        <label className="form-label">Preferred Date</label>
        <input name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} className="form-input" min={new Date().toISOString().split('T')[0]} />
      </div>

      <div>
        <label className="form-label">Additional Notes</label>
        <textarea name="message" rows={3} value={form.message} onChange={handleChange} className="form-input resize-none" placeholder="Any additional information for the clinic…" />
      </div>

      <button type="submit" disabled={status === 'sending'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'sending' ? 'Sending…' : 'Request Appointment'}
      </button>
      <p className="text-xs text-slate-400 text-center">Our front desk will contact you to confirm a time. Walk-in visits don't require a booking.</p>
    </form>
  )
}
