import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';

export default function CtaBanner() {
  return (
    <section className="bg-brand-navy py-12 md:py-20 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Equip Your School&apos;s Laboratory?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-base md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Start with a professional needs assessment or lab audit for complete clarity.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="flex-1 sm:flex-none sm:w-auto bg-brand-red text-white font-semibold font-inter py-3 px-2 sm:px-8 rounded-full hover:bg-red-700 transition-colors text-sm sm:text-base"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="flex-1 sm:flex-none sm:w-auto bg-transparent border border-white text-white font-semibold font-inter py-3 px-2 sm:px-8 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
