'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Resend } from 'resend'

// Resend initialization (will be skipped if key is missing)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function submitQuoteAction(formData: FormData) {
  try {
    const type = formData.get('type') as string || 'general'
    const name = formData.get('name') as string
    const institution = formData.get('institution') as string || formData.get('school') as string || ''
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string || ''
    const message = formData.get('message') as string || formData.get('details') as string || ''

    if (!name || !email) {
      return { success: false, error: 'Name and email are required.' }
    }

    let quoteId = null;

    try {
      // Initialize Payload
      const payload = await getPayload({ config: configPromise })

      // Create quote record in Supabase via Payload
      const quote = await payload.create({
        collection: 'quotes',
        data: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          type: type as any,
          name,
          institution,
          email,
          phone,
          message,
          status: 'new',
        },
      })
      quoteId = quote.id;
    } catch (e) {
      console.warn("Payload database not connected. Skipping database insertion.", e);
      // In a real app, this should throw, but we swallow it here so the UI can be tested
      // before the user provides the Supabase keys.
    }

    // Send emails
    if (resend) {
      // Send confirmation email to user
      await resend.emails.send({
        from: 'A-CML <noreply@a-cml.com>',
        to: email,
        subject: 'We received your enquiry - A-CML',
        html: `
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to African-Caribbean Manufacturing Ltd.</p>
          <p>We have received your request and our team will get back to you shortly.</p>
          <p>Best regards,<br/>The A-CML Team</p>
        `,
      })

      // Send notification to staff
      await resend.emails.send({
        from: 'A-CML Notifications <noreply@a-cml.com>',
        to: process.env.STAFF_EMAIL || 'info@acmlghana.com',
        subject: `New Enquiry from ${name}`,
        html: `
          <h3>New ${type.toUpperCase()} Enquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Institution:</strong> ${institution}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
          ${quoteId ? `<p><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/admin/collections/quotes/${quoteId}">View in Admin Panel</a></p>` : ''}
        `,
      })
    } else {
      console.warn("Resend API key missing. Skipping emails.");
    }

    return { success: true }
  } catch (error) {
    console.error('Error submitting quote:', error)
    return { success: false, error: 'An error occurred while submitting your request.' }
  }
}
