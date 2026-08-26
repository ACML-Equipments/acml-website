import { Metadata } from 'next';
import { Suspense } from 'react';
import { ContactForm } from '@/components/forms/ContactForm';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with A-CML for equipment quotes, partnership opportunities, or general enquiries.',
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-brand-navy tracking-tight">Get in Touch</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate-600">
              Whether you're looking to equip your school's laboratory or explore a strategic partnership, our team is ready to assist you.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="up" className="max-w-3xl mx-auto">
          {/* CONTACT FORM */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-brand-navy">Send us a Message</h2>
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
