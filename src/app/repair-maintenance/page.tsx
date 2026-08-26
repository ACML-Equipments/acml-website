import { Metadata } from 'next';
import { RepairForm } from '@/components/forms/RepairForm';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Repair & Maintenance',
  description: 'Already have equipment? We can extend its life with expert refurbishment and maintenance services.',
};

export default function RepairMaintenancePage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-brand-navy tracking-tight">Already have equipment? Let's make it last.</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-slate-600">
              You don't always need to buy new. Our team of expert technicians can refurbish, calibrate, and repair your existing laboratory apparatus, bringing them back to international standards and saving your institution money.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="up" className="bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold mb-6 text-brand-navy border-b pb-4">Request a Repair Service</h2>
          <RepairForm />
        </FadeIn>
      </div>
    </div>
  );
}
