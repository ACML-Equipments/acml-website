import { Metadata } from 'next';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import FillingEmptyLabsSection from './FillingEmptyLabsSection';

export const metadata: Metadata = {
  title: 'About & Achievements',
  description: 'Learn about A-CML, our history, our affiliation with Akpabey Group LLC, and our track record of equipping Ghanaian schools.',
};

export default function AboutPage() {
  return (
    <div className="pb-0 relative overflow-clip">
      
      {/* ABOUT US BANNER */}
      <section className="bg-brand-navy pt-16 md:pt-32 pb-12 md:pb-20 px-4 text-center relative overflow-hidden">
        {/* Subtle background glow/pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red via-transparent to-transparent"></div>
        <FadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight relative z-10">
            About Us
          </h1>
        </FadeIn>
      </section>

      {/* SUMMARY */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-3xl text-slate-700 max-w-5xl mx-auto text-center leading-relaxed font-light">
              African-Caribbean Manufacturing Ltd (A-CML) is a pioneering Ghanaian manufacturer of high-quality, durable, and affordable science laboratory equipment. We combine international design standards with local production to transform science education across Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl mt-20">
        {/* ABOUT THE FOUNDER */}
        <section className="mb-24 mt-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
            <FadeIn delay={0.2} className="w-full h-full">
              <div className="sticky top-28 pt-2 md:pt-10">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-100 rounded-2xl shadow-sm">
                  <Image 
                    src="/Mr-Akpabey.png" 
                    alt="Gilbert C. Akpabey" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} className="pt-2 md:pt-10">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Founder, ACML</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-brand-navy mb-8 leading-tight tracking-tight">
                Gilbert C. Akpabey
              </h2>
              
              <div className="space-y-6 text-slate-700 text-lg lg:text-xl leading-relaxed">
                <p>
                  Gilbert C. Akpabey is an accomplished accounting, auditing, taxation, and management consulting professional with more than four decades of experience across Ghana, Nigeria, and the United States.
                </p>
                <p>
                  His career spans financial management, internal controls, fraud investigation, public-sector oversight, taxation, and strategic business advisory. He has held senior professional roles in both public and private institutions and currently serves as Chairman and Lead Consultant of Akpabey Group LLC.
                </p>
                <p>
                  Beyond his consulting work, Mr. Akpabey is the founder of African-Caribbean Manufacturing Ltd (A-CML) and the African West Indies Diaspora Alliance (AWIDA), reflecting his broader commitment to enterprise development, international collaboration, and strengthening connections between Africa and the Caribbean diaspora.
                </p>
                <p>
                  Known for his commitment to integrity, accountability, and professional excellence, Mr. Akpabey brings extensive international experience and strategic insight to helping organizations strengthen their financial systems, improve institutional effectiveness, and pursue sustainable growth.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">

        <FillingEmptyLabsSection />

        {/* FEATURED CASE STUDY (HERO BANNER) */}
        <div className="text-center mt-12 md:mt-20 mb-10">
          <FadeIn>
            <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-brand-navy tracking-tight md:whitespace-nowrap">
              Featured Case Study
            </h2>
          </FadeIn>
          
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn delay={0.1}>
              <h3 className="text-lg md:text-xl text-slate-500 mb-6">
                Presbyterian Boys' Senior High School, Legon
              </h3>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-slate-600 text-[17px] md:text-xl leading-relaxed mb-12">
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
