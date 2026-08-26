'use client'

import { useState } from 'react'
import { submitQuoteAction } from '@/app/actions/submitQuote'

export function RepairForm() {
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
        <h3 className="text-2xl font-bold text-green-800 mb-2">Request Sent Successfully!</h3>
        <p className="text-green-700">Our technical team will review your repair request and contact you soon.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-brand-navy font-bold hover:underline">
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <input type="hidden" name="type" value="repair" />
      
      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg">
          {errorMessage}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Contact Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors" placeholder="Dr. Kwame Mensah" />
        </div>
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-slate-700 mb-2">School / Institution *</label>
          <input type="text" id="school" name="school" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors" placeholder="Presbyterian Boys' Senior High School" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors" placeholder="kmensah@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors" placeholder="+233 20 123 4567" />
        </div>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-2">Description of Equipment & Issues *</label>
        <textarea id="details" name="details" required rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-brand-navy outline-none transition-colors resize-none" placeholder="Please list the items (e.g., 5 microscopes, 2 analytical balances) and describe what needs repairing..."></textarea>
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
            Submitting...
          </>
        ) : 'Submit Repair Request'}
      </button>
    </form>
  )
}
