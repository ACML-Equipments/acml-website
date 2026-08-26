import Link from 'next/link';
import { FadeIn, StaggerContainer, FadeInStaggerItem } from '@/components/ui/FadeIn';

export default function HowWeWork() {
  return (
    <section className="bg-gray-50 py-10 md:py-24 font-inter">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Header Card */}
          <FadeIn className="md:col-span-12">
            <div className="bg-white rounded-3xl p-5 md:p-10 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy mb-3 md:mb-0">
                Manufacturing Process
              </h2>
              <p className="text-gray-500 max-w-xl text-base md:text-lg md:text-right leading-relaxed">
                We start by understanding your school's specific laboratory requirements and curriculum needs.
              </p>
            </div>
          </FadeIn>

          {/* Steps Card */}
          <FadeIn delay={0.1} className="md:col-span-12 lg:col-span-8">
            <div className="bg-white rounded-3xl p-5 md:p-10 border border-gray-100 shadow-sm h-full">
               <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 h-full items-center">
                 {[
                   { step: '01', title: 'Needs Assessment', desc: 'Understanding requirements' },
                   { step: '02', title: 'Design & Feasibility', desc: 'Custom prototypes' },
                   { step: '03', title: 'Scalable Production', desc: 'Efficient manufacturing' },
                   { step: '04', title: 'Delivery & Setup', desc: 'On-site installation' }
                 ].map((s, i) => (
                   <FadeInStaggerItem key={i} className="flex flex-col">
                      <span className="text-xs md:text-sm font-bold text-brand-red mb-1 md:mb-2">STEP {s.step}</span>
                      <h3 className="font-semibold text-brand-navy mb-1 md:mb-2 text-base md:text-lg lg:text-base xl:text-lg leading-tight">{s.title}</h3>
                      <p className="text-sm text-gray-500">{s.desc}</p>
                   </FadeInStaggerItem>
                 ))}
               </StaggerContainer>
            </div>
          </FadeIn>

          {/* 100% Card */}
          <FadeIn delay={0.2} className="md:col-span-6 lg:col-span-4">
            <div className="bg-brand-navy rounded-3xl p-5 md:p-10 flex flex-col justify-center text-white relative overflow-hidden h-full min-h-[200px] md:min-h-[250px]">
              <h3 className="text-[6rem] md:text-[8rem] font-bold text-white/5 absolute -right-4 -bottom-4 leading-none select-none">PRO</h3>
              <span className="text-5xl md:text-6xl font-bold mb-2">100<span className="text-brand-red">%</span></span>
              <p className="font-medium text-base md:text-lg text-white/90">Locally Engineered Excellence</p>
            </div>
          </FadeIn>

           {/* ISO Card */}
          <FadeIn delay={0.1} direction="up" className="md:col-span-6 lg:col-span-4">
            <div className="bg-brand-red rounded-3xl p-5 md:p-10 flex flex-col items-center justify-center text-white text-center h-full min-h-[200px] md:min-h-[250px]">
               <span className="text-5xl md:text-6xl font-bold mb-4 md:mb-6 block">ISO</span>
               <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed">
                 Certified compliance with global safety and quality control regulations, ensuring every piece of equipment is built for durability and precision.
               </p>
            </div>
          </FadeIn>

          {/* Quality Card */}
          <FadeIn delay={0.2} direction="up" className="md:col-span-12 lg:col-span-8">
            <div className="bg-white rounded-3xl p-5 md:p-10 border border-gray-100 shadow-sm flex flex-col justify-center h-full min-h-[200px] md:min-h-[250px]">
               <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
                  Uncompromising <span className="text-brand-red block mt-1">Quality</span>
               </h3>
               <p className="mt-3 md:mt-4 text-gray-500 leading-relaxed text-sm md:text-base">
                 We design and prototype lab equipment locally, ensuring every piece meets rigorous international safety and durability standards.
               </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
