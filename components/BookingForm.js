'use client'
import { useState } from 'react'

const MAIN_SERVICES = [
  { value: 'mental-health', label: 'Mental Health' },
  { value: 'physical-health', label: 'Physical Health' },
]

export default function BookingForm({ whiteLabels = false, hideService = false, defaultService = '' }) {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    service: defaultService,
    message: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1000))
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-display text-xl font-bold text-blue-800 mb-2">Appointment Request Received!</h3>
        <p className="text-sm text-blue-700">Our front desk will be in touch shortly to confirm your appointment time.</p>
        <button onClick={() => { setStatus(null); setForm({ name:'', contact:'', service: defaultService, message:'' }) }}
          className="mt-4 text-sm text-blue-600 underline">Submit another request</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={whiteLabels ? "form-label-white" : "form-label"}>Full Name *</label>
          <input name="name" required value={form.name} onChange={handleChange} className="form-input" placeholder="Jane Smith" />
        </div>
        <div>
          <label className={whiteLabels ? "form-label-white" : "form-label"}>Email / Phone *</label>
          <input name="contact" required value={form.contact} onChange={handleChange} className="form-input" placeholder="Contact info" />
        </div>
      </div>

      {!hideService && (
        <div>
          <label className={whiteLabels ? "form-label-white" : "form-label"}>Service / Clinic *</label>
          <select name="service" required value={form.service} onChange={handleChange} className="form-input">
            <option value="">— Select a clinic —</option>
            {MAIN_SERVICES.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className={whiteLabels ? "form-label-white" : "form-label"}>Additional Notes</label>
        <textarea name="message" rows={3} value={form.message} onChange={handleChange} className="form-input resize-none" placeholder="Any additional information for the clinic…" />
      </div>

      <button type="submit" disabled={status === 'sending'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'sending' ? 'Sending…' : 'Request Appointment'}
      </button>
    </form>
  )
}
