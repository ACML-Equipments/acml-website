import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn, StaggerContainer, FadeInStaggerItem } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Training Programs',
  description: 'Expert training on laboratory equipment operation, safety, care, and practical application.',
};

export default function TrainingPage() {
  const content = {
    title: "Equipment is only useful if your team knows how to use it.",
    desc: "We don't just supply apparatus; we ensure your educators and lab technicians are fully equipped with the knowledge to maximize their utility. Our comprehensive training programs bridge the gap between theory and practical application.",
    topics: [
      "Equipment Operation",
      "Laboratory Safety Protocols",
      "Care and Routine Maintenance",
      "Practical Curriculum Application"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-12 md:py-24 px-4 max-w-4xl mx-auto text-center">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-brand-navy tracking-tight">Equipment is only useful if you know how to use it.</h1>
          </FadeIn>
        </div>
        <FadeIn delay={0.1}>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {content.desc}
          </p>
        </FadeIn>
        <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
          {content.topics.map((topic, i) => (
            <FadeInStaggerItem key={i} className="bg-brand-gray p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center transition-all hover:scale-105 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-3">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-semibold text-brand-navy text-sm md:text-base">{topic}</span>
            </FadeInStaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn delay={0.2}>
          <Link href="/contact?type=training" className="inline-block bg-brand-navy text-white font-semibold font-inter py-3 px-8 text-sm sm:text-base rounded-full hover:bg-blue-900 transition-colors shadow-md hover:shadow-lg">
            Enquire About Scheduling a Session
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
