import Link from 'next/link';
import Image from 'next/image';
import HowWeWork from '@/components/home/HowWeWork';
import ChallengesSection from '@/components/home/ChallengesSection';
import CtaBanner from '@/components/home/CtaBanner';
import { FadeIn, StaggerContainer, FadeInStaggerItem } from '@/components/ui/FadeIn';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-black text-white min-h-[calc(100svh-76px)] md:min-h-0 flex items-center py-12 md:py-20 lg:py-32 relative overflow-hidden">
        <Image
          src="/Hero real.png"
          alt="Science Laboratory Equipment"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="container mx-auto px-4 relative z-10 w-full">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-tight text-center text-white">
              Transform your science laboratory into an engine for African innovation.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto text-center">
              Global Standards, Local Production. <br className="md:hidden" />
              Built for African Classrooms.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-row justify-center gap-3 sm:gap-6 max-w-5xl mx-auto mt-8">
              <Link href="/products" className="inline-block flex-1 sm:flex-none sm:w-auto bg-brand-red text-white font-semibold py-3 px-2 sm:px-8 rounded-full font-inter hover:bg-red-700 transition-colors text-center text-sm sm:text-base">
                Browse Equipment
              </Link>
              <Link href="/partnerships" className="inline-block flex-1 sm:flex-none sm:w-auto bg-white text-brand-navy font-semibold py-3 px-2 sm:px-8 rounded-full font-inter hover:bg-slate-100 transition-colors text-center text-sm sm:text-base">
                See Our Impact
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INDUSTRIAL TIMELINE STRIP */}
      <FadeIn delay={0.5} direction="none" className="w-full bg-white border-b border-gray-200 overflow-x-auto hide-scrollbar">
        <div className="flex items-center min-w-max h-14 relative">
          {/* Repeating Ruler Pattern */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(to right, #2563eb, #2563eb 1px, transparent 1px, transparent 6px)' }}
          ></div>
          
          {/* Text Labels */}
          <StaggerContainer className="relative z-10 flex justify-between items-center w-full min-w-[900px] px-4 md:px-12 font-inter text-sm font-medium tracking-wide text-gray-800">
            <FadeInStaggerItem direction="none"><div className="bg-white px-6">Needs Assessment</div></FadeInStaggerItem>
            <FadeInStaggerItem direction="none"><div className="bg-white px-6">Design & Prototyping</div></FadeInStaggerItem>
            <FadeInStaggerItem direction="none"><div className="bg-white px-6">Production</div></FadeInStaggerItem>
            <FadeInStaggerItem direction="none"><div className="bg-white px-6">Delivery & Installation</div></FadeInStaggerItem>
          </StaggerContainer>
        </div>
      </FadeIn>

      {/* AURA / STRIKING STATEMENT */}
      <section className="bg-white py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy leading-tight mb-8">
              A-CML manufactures affordable, durable science laboratory equipment for schools across Ghana, backed by international design standards.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
              It’s more than just equipment. We engineer environments that inspire students to ask questions, test boundaries, and build the future.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CHALLENGES WE SOLVE — Tabbed Insights */}
      <ChallengesSection />

      {/* HOW WE WORK — Process Tabs */}
      <HowWeWork />



      {/* CTA BANNER */}
      <CtaBanner />

    </div>
  );
}

