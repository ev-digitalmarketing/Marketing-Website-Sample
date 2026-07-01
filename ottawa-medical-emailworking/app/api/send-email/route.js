import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name, contact, service, message } = await req.json()

    if (!name || !contact) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const serviceLabel = service
      ? service.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
      : 'Not specified'

    await transporter.sendMail({
      from: `"Ottawa Street Medical Centre" <${process.env.SMTP_USER}>`,
      to: 'info@ottawastreetmedicalcentre.com',
      replyTo: contact.includes('@') ? contact : undefined,
      subject: `New Appointment Request – ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e3a5f; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Appointment Request</h1>
            <p style="color: #93c5fd; margin: 4px 0 0; font-size: 14px;">Ottawa Street Medical Centre</p>
          </div>
          <div style="padding: 32px; background: #f8fafc; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 140px;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email / Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${contact}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${serviceLabel}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #475569; vertical-align: top;">Notes</td>
                <td style="padding: 10px 0; color: #1e293b;">${message || '—'}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 32px; background: #f1f5f9; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #94a3b8;">© 2026 Ottawa Street Medical Centre | 1535 Ottawa Street, Windsor, ON</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
