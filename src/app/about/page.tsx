import { Metadata } from 'next';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'About & Achievements',
  description: 'Learn about A-CML, our history, our affiliation with Akpabey Group LLC, and our track record of equipping Ghanaian schools.',
};

export default function AboutPage() {
  return (
    <div className="pt-12 md:pt-20 pb-0 relative overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* PROJECT: FILLING EMPTY LABS */}
        <section className="mb-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-navy uppercase tracking-tight">
                Project: Filling Empty Labs
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-brand-red font-medium leading-relaxed mb-4">
                Filling the Labs, Practical Learning, Better Results.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 font-medium italic">
                Made in Ghana. Built to Last. Priced for Africa.
              </p>
            </FadeIn>
          </div>
          
          {/* Grid for Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.3} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">1. THE PROBLEM</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                Currently, most Senior High Schools in Ghana and across WAEC countries have empty or ill-equipped science laboratories, forcing students to learn science without practical experience. This leads to poor understanding of science concepts and low WASSCE performance in core science subjects.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="bg-brand-navy p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">2. OUR SOLUTION</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                A-CML manufactures and supplies durable, high-quality science laboratory equipment using locally sourced materials at an affordable price. As an affiliate of Akpabey Group LLC, USA, we combine international standards with local production to ensure every SHS can afford a complete, functional lab.
              </p>
            </FadeIn>
          </div>

          {/* Grid for Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.5} className="p-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">3. VISION</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                To ensure no science student in Ghana and across WAEC countries learns science without practical experience - where every SHS has a fully equipped, functional laboratory that delivers better WASSCE results.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.6} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">4. MISSION</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                To manufacture and supply affordable, durable science laboratory equipment using local materials, and to equip, repair, and train SHS science departments to transform empty labs into centers of practical learning.
              </p>
            </FadeIn>
          </div>

          {/* Full width Objectives */}
          <FadeIn fullWidth className="w-[100vw] relative left-1/2 -translate-x-1/2 mb-16">
            <div className="bg-slate-50 py-16 border-y border-slate-100">
              <div className="container mx-auto px-4 max-w-4xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-10 text-center">5. PROJECT OBJECTIVES</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="font-bold text-brand-red text-xl">a.</span>
                    <p className="text-slate-800 text-lg">To manufacture and supply at least 50 essential science apparatus at 30% less cost than imported alternatives.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-brand-red text-xl">b.</span>
                    <p className="text-slate-800 text-lg">To equip 100 underserved SHS laboratories with complete functional setups within 24 months.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-brand-red text-xl">c.</span>
                    <p className="text-slate-800 text-lg">To provide hands-on training for 300 science teachers and lab technicians on equipment use, safety, and maintenance.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-brand-red text-xl">d.</span>
                    <p className="text-slate-800 text-lg">To establish a sustainable repair and maintenance system to ensure labs remain functional.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Grid for Impact & Commitment */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.7} className="px-4">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">6. EXPECTED IMPACT</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                  <div className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0"></div>
                  <span className="text-lg">Improved practical understanding of science among students</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <div className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0"></div>
                  <span className="text-lg">Better WASSCE results in Physics, Chemistry and Biology</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <div className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0"></div>
                  <span className="text-lg">Reduced import dependency and foreign exchange loss for Ghana</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <div className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0"></div>
                  <span className="text-lg">Creation of local manufacturing jobs for Ghanaian youth</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <div className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0"></div>
                  <span className="text-lg">Sustainable, functional science labs that last for years</span>
                </li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.8}>
              <div className="bg-brand-red text-white p-10 md:p-12 rounded-3xl text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-white/90 uppercase tracking-widest text-sm">7. Our Commitment</h3>
                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                  We don't just supply equipment - We <br/><br/>
                  <span className="font-bold text-2xl md:text-3xl underline decoration-4 underline-offset-8">Manufacture, Install, Repair, and Train.</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FEATURED CASE STUDY (HERO BANNER) */}
        <div className="text-center mt-12 md:mt-20 mb-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-8">Featured Case Study</h2>
          </FadeIn>
          
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn delay={0.1}>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-brand-navy mb-6 leading-tight">
                Presbyterian Boys' Senior High School, Legon
              </h3>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-slate-600 text-base md:text-xl leading-relaxed mb-12">
                <p>
                  A-CML is proud to be a trusted supplier for Presbyterian Boys' Senior High School (PRESEC), one of Ghana's premier educational institutions and consistent champions of the National Science and Maths Quiz. 
                </p>
                <p>
                  By equipping their laboratories with our locally manufactured apparatus, we have demonstrated that Ghanaian-made science equipment can meet the rigorous demands of top-tier academic excellence.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

      </div> {/* Close container here */}

      {/* Full width image outside the container bounds */}
      <FadeIn delay={0.3} direction="up" className="w-full mt-4 md:mt-8">
        <section className="w-full">
          {/* Image with widescreen aspect ratio on mobile, fixed height on desktop */}
          <div 
            className="w-full aspect-video md:aspect-auto md:min-h-[600px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Case-study.jpg')" }}
          />
        </section>
      </FadeIn>
    </div>
  );
}
