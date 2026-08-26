'use client'

import { useState } from 'react'
import { submitQuoteAction } from '@/app/actions/submitQuote'
import { useSearchParams } from 'next/navigation'

export function ContactForm() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get('type') || 'school'
  const initialItem = searchParams.get('item') || ''

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (formData: FormData) => {
    setStatus('loading')
    const result = await submitQuoteAction(formData)
    
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMessage(result.error || 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12 bg-green-50 rounded-xl border border-green-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-700">Thank you for contacting A-CML. We will get back to you shortly.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-brand-navy font-bold hover:underline">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg">
          {errorMessage}
        </div>
      )}

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">I am enquiring as a... *</label>
        <div className="relative">
          <select id="type" name="type" defaultValue={initialType} required className="appearance-none text-base w-full px-4 py-3 pr-10 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors bg-white">
            <option value="school">School / Institution (Equipment Quote)</option>
            <option value="partner">Partner / Funder</option>
            <option value="general">General Enquiry</option>
            <option value="training">Training Enquiry</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors" />
        </div>
        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-slate-700 mb-2">Institution / Organization</label>
          <input type="text" id="institution" name="institution" className="w-full px-4 py-3 text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message / Enquiry Details *</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={6} 
          defaultValue={initialItem ? `I would like to request a quote for: ${initialItem}\n\nQuantity: ` : ''}
          className="w-full px-4 py-3 text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors resize-none" 
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-brand-navy text-white font-semibold font-inter py-3 text-sm sm:text-base rounded-full hover:bg-blue-900 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : 'Send Message'}
      </button>
    </form>
  )
}
