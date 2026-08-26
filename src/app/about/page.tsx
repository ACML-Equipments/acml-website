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
        
        {/* COMPANY STORY: Mission Split Variant */}
        <section className="mb-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <FadeIn>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-brand-navy">About A-CML</h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-6">
                African-Caribbean Manufacturing Ltd (A-CML) was incorporated in <strong>April 2025</strong> with a singular mission: to democratize access to high-quality science education in Ghana by localizing the production of laboratory apparatus.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                For too long, African schools have relied on expensive, imported equipment that is difficult to maintain and replace. A-CML bridges this gap by manufacturing durable, internationally-standardized equipment right here in Ghana.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn fullWidth className="w-[100vw] relative left-1/2 -translate-x-1/2">
            <div className="bg-brand-navy py-12 md:py-16 text-white shadow-inner">
              <div className="container mx-auto px-4 max-w-4xl text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">International Affiliation</h3>
                <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                  A-CML operates in proud affiliation with <strong className="text-white">Akpabey Group LLC, USA</strong>, ensuring that our manufacturing processes, quality control, and organizational standards meet rigorous global benchmarks.
                </p>
              </div>
            </div>
          </FadeIn>
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

        <FadeIn fullWidth delay={0.3} direction="up" className="w-[100vw] relative left-1/2 -translate-x-1/2 mb-0">
          <section>
            {/* Image with widescreen aspect ratio on mobile, fixed height on desktop */}
            <div 
              className="w-full aspect-video md:aspect-auto md:min-h-[600px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/Case-study.jpg')" }}
            />
          </section>
        </FadeIn>

      </div>
    </div>
  );
}
