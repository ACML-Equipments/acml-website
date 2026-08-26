import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn, StaggerContainer, FadeInStaggerItem } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Partnerships & Impact',
  description: 'Partner with A-CML to transform STEM education in Africa through sustainable equipment supply and training.',
};

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HEADER */}
      <section className="bg-white py-12 md:py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-6">Partnerships & Impact</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Scaling local manufacturing to equip more schools across Ghana requires strong alliances. We work with governments, NGOs, and corporate partners to deliver impact.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PARTNERSHIP CATEGORIES */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-brand-gray">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy text-center mb-16 tracking-tight">Who We Work With</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInStaggerItem direction="up" className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-brand-navy">Government Institutions</h3>
              <p className="text-slate-600 text-sm">Aligning with national educational initiatives and ministries to standardize lab equipment across public schools.</p>
            </FadeInStaggerItem>
            <FadeInStaggerItem direction="up" className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-brand-navy">Development Funds</h3>
              <p className="text-slate-600 text-sm">Collaborating with statutory bodies like the <strong>Zongo Development Fund</strong> to target under-resourced communities.</p>
            </FadeInStaggerItem>
            <FadeInStaggerItem direction="up" className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-brand-navy">NGOs & Foundations</h3>
              <p className="text-slate-600 text-sm">Providing reliable implementation and localized supply chains for educational grant deployments.</p>
            </FadeInStaggerItem>
            <FadeInStaggerItem direction="up" className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-brand-navy">Corporate Sponsors</h3>
              <p className="text-slate-600 text-sm">Facilitating high-impact CSR initiatives focused on STEM education and local manufacturing support.</p>
            </FadeInStaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* THE ASK & CTA */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-brand-gray to-white text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-6 tracking-tight">Invest in the Future of African Science</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate-600 mb-10">
              We are actively seeking funding partners to scale our manufacturing capacity and subsidize equipment provisioning for rural and underfunded schools. By partnering with A-CML, you are investing in local industry and directly equipping the next generation of scientists.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact?type=partner" className="inline-block bg-brand-red text-white font-semibold font-inter py-3 px-8 text-sm sm:text-base rounded-full hover:bg-red-700 transition-colors shadow-md">
              Discuss a Partnership
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
