import Link from 'next/link';
import { FadeIn, StaggerContainer, FadeInStaggerItem } from '@/components/ui/FadeIn';

const challengesData = [
  {
    title: "Imported Equipment That Doesn't Last",
    desc: "Many schools rely on fragile imported apparatus that breaks within months, creating ongoing replacement costs.",
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "No Budget for Repairs",
    desc: "Schools that lack maintenance contracts or trained staff see equipment degrade rapidly.",
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Gaps in Practical Training",
    desc: "Without hands-on training, educators are unable to utilize or care for laboratory apparatus properly.",
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  }
];

export default function ChallengesSection() {
  return (
    <section className="pt-12 md:pt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter text-brand-navy tracking-tight mb-4">
              Why Most School Laboratories Underperform
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-500 text-sm md:text-xl font-sans">
              Exploring the root causes behind poorly equipped science labs across Ghana
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="w-full bg-brand-navy py-10 md:py-20 relative overflow-hidden">
        
        <div className="container mx-auto px-4 relative z-10">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto">
            {challengesData.map((item, idx) => (
              <FadeInStaggerItem key={idx} className="flex flex-col group">
                <div className="flex flex-row-reverse md:flex-col justify-between md:justify-start items-start md:items-start gap-4 mb-2 md:mb-4">
                  <div className="shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full bg-brand-red text-white flex items-center justify-center md:mb-4 transition-transform transform group-hover:-translate-y-2 duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg md:text-2xl text-white font-inter mt-1 md:mt-0 md:min-h-[4rem]">{item.title}</h3>
                </div>
                <p className="text-slate-400 font-sans flex-grow text-sm md:text-lg leading-relaxed">
                  {item.desc}
                </p>
                {/* Subtle separator on mobile, hidden on desktop */}
                {idx < 2 && <div className="h-px w-full bg-white/10 mt-6 md:hidden"></div>}
              </FadeInStaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
