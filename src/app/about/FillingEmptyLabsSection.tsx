import { FadeIn } from '@/components/ui/FadeIn';

export default function FillingEmptyLabsSection() {
  return (
    <section className="mb-20 pt-10">
      <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 px-4">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter tracking-tight text-brand-navy mb-4">
            Project: Filling Empty Labs
          </h2>
          <p className="text-[17px] md:text-xl text-slate-500 font-sans">
            Made in Ghana. Built to Last. Priced for Africa.
          </p>
        </FadeIn>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative">
        {/* Continuous Vertical Line */}
        <div className="absolute left-[35px] md:left-[43px] top-4 bottom-4 w-[2px] bg-slate-200 z-0"></div>

        <div className="space-y-16 md:space-y-20 relative z-10">
          {[
            { num: "1", title: "The Problem", desc: "Currently, most Senior High Schools in Ghana and across WAEC countries have empty or ill-equipped science laboratories, forcing students to learn science without practical experience. This leads to poor understanding of science concepts and low WASSCE performance in core science subjects." },
            { num: "2", title: "Our Solution", desc: "A-CML manufactures and supplies durable, high-quality science laboratory equipment using locally sourced materials at an affordable price. As an affiliate of Akpabey Group LLC, USA, we combine international standards with local production to ensure every SHS can afford a complete, functional lab." },
            { num: "3", title: "Vision", desc: "To ensure no science student in Ghana and across WAEC countries learns science without practical experience - where every SHS has a fully equipped, functional laboratory that delivers better WASSCE results." },
            { num: "4", title: "Mission", desc: "To manufacture and supply affordable, durable science laboratory equipment using local materials, and to equip, repair, and train SHS science departments to transform empty labs into centers of practical learning." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex gap-6 md:gap-12 group">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-400 font-medium text-lg md:text-xl group-hover:border-brand-red group-hover:text-brand-red transition-all shadow-sm relative z-10">
                  {item.num}
                </div>
                <div className="pt-1 md:pt-3">
                  <h3 className="font-bold text-lg md:text-2xl text-brand-navy font-inter mb-2 md:mb-4 group-hover:text-brand-red transition-colors">{item.title}</h3>
                  <p className="text-[17px] md:text-lg text-slate-600 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Node 5: Objectives */}
          <FadeIn delay={0.4}>
            <div className="flex gap-6 md:gap-12 group">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-400 font-medium text-lg md:text-xl group-hover:border-brand-red group-hover:text-brand-red transition-all shadow-sm relative z-10">
                5
              </div>
              <div className="pt-1 md:pt-3 w-full">
                <h3 className="font-bold text-lg md:text-2xl text-brand-navy font-inter mb-4 md:mb-6 group-hover:text-brand-red transition-colors">Project Objectives</h3>
                <div className="space-y-5 pt-2">
                  {[
                    "To manufacture and supply at least 50 essential science apparatus at 30% less cost.",
                    "To equip 100 underserved SHS laboratories with complete functional setups within 24 months.",
                    "To provide hands-on training for 300 science teachers and lab technicians.",
                    "To establish a sustainable repair and maintenance system."
                  ].map((txt, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-slate-800 font-medium text-lg">{i + 1}.</span>
                      <p className="text-slate-700 text-[17px] md:text-lg font-sans leading-relaxed">{txt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Node 6: Expected Impact */}
          <FadeIn delay={0.5}>
            <div className="flex gap-6 md:gap-12 group">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-400 font-medium text-lg md:text-xl group-hover:border-brand-red group-hover:text-brand-red transition-all shadow-sm relative z-10">
                6
              </div>
              <div className="pt-1 md:pt-3 w-full">
                <h3 className="font-bold text-lg md:text-2xl text-brand-navy font-inter mb-4 md:mb-6 group-hover:text-brand-red transition-colors">Expected Impact</h3>
                <div className="space-y-5 pt-2">
                  {[
                    "Improved practical understanding of science among students",
                    "Better WASSCE results in Physics, Chemistry and Biology",
                    "Reduced import dependency and foreign exchange loss for Ghana",
                    "Creation of local manufacturing jobs for Ghanaian youth",
                    "Sustainable, functional science labs that last for years"
                  ].map((txt, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-slate-800 font-medium text-lg">{i + 1}.</span>
                      <p className="text-slate-700 text-[17px] md:text-lg font-sans leading-relaxed">{txt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Node 7: Our Commitment */}
          <FadeIn delay={0.6}>
            <div className="flex gap-6 md:gap-12 group pb-10">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-brand-red border-2 border-brand-red flex items-center justify-center flex-shrink-0 text-white font-medium text-lg md:text-xl shadow-md relative z-10">
                7
              </div>
              <div className="pt-1 md:pt-3 w-full">
                <h3 className="font-bold text-lg md:text-2xl text-brand-red font-inter mb-4 md:mb-6">Our Commitment</h3>
                <p className="text-xl md:text-3xl text-brand-navy font-medium leading-tight font-sans">
                  We don't just supply equipment. We Manufacture, Install, Repair, and Train.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}