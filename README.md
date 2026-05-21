# Ottawa Street Medical Centre — Next.js Website

A modern Next.js 14 website for Ottawa Street Medical Centre, built with Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
app/
  page.js                    → Homepage
  layout.js                  → Root layout (fonts, metadata)
  globals.css                → Global styles & Tailwind
  about/page.js              → About Us
  contact/page.js            → Contact & Booking
  services/
    page.js                  → Clinics & Services overview
    mental-health/page.js    → Mental Health clinic
    physical-health/page.js  → Physical Health clinic
    walk-in-clinic/page.js   → Walk-In Clinic
    pharmacy/page.js         → Pharmacy

components/
  Navbar.js                  → Navigation with dropdown
  Footer.js                  → Site footer
  BookingForm.js             → Appointment request form (reusable)
```

## 📧 Wiring Up the Booking Form

The `BookingForm` component currently simulates a successful send. To wire it to real email:

### Option 1: Resend (recommended)
1. `npm install resend`
2. Create `app/api/book/route.js`:
```js
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const data = await req.json()
  await resend.emails.send({
    from: 'bookings@yourdomain.com',
    to: 'frontdesk@ottawamedical.ca',
    subject: `New Appointment Request — ${data.service}`,
    html: `<p><strong>Name:</strong> ${data.name}</p>
           <p><strong>Phone:</strong> ${data.phone}</p>
           <p><strong>Email:</strong> ${data.email}</p>
           <p><strong>Service:</strong> ${data.service}</p>
           <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
           <p><strong>Notes:</strong> ${data.message}</p>`,
  })
  return Response.json({ ok: true })
}
```
3. Update `BookingForm.js` — replace the `await new Promise(...)` line with:
```js
await fetch('/api/book', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
```

### Option 2: EmailJS (no backend needed)
Use the [EmailJS](https://emailjs.com) browser SDK — free tier available.

## 🗺️ Google Maps
In `app/contact/page.js`, replace the placeholder div with your Google Maps iframe embed code. Get it from Google Maps → Share → Embed a map.

## 🚢 Deploy to Vercel
1. Push to GitHub
2. Connect repo on [vercel.com](https://vercel.com)
3. Add any env vars (e.g. `RESEND_API_KEY`) in Vercel project settings
4. Vercel auto-deploys on every push ✅

## ✏️ Customizing
- **Colors**: Edit `tailwind.config.js` and `globals.css` CSS variables
- **Phone/email/address**: Global find & replace for `+1-222-333-4444` and `info@ottawamedical.ca`
- **Services**: Edit the arrays in each service page and in `BookingForm.js`
- **Fonts**: Change imports in `app/layout.js` (uses Google Fonts via next/font)
