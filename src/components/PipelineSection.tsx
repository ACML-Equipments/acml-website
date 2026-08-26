import React from 'react';

const STEPS = ['Manufacture', 'Supply', 'Install', 'Train', 'Maintain', 'Sustain'];

export default function PipelineSection() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden relative font-mono">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-4">Our End-to-End Pipeline</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-sans">We manage the entire lifecycle to ensure long-term educational impact.</p>
        </div>
        
        <div className="relative">
          {/* Thick industrial track */}
          <div className="absolute top-8 left-0 w-full h-2 bg-slate-900 -z-10 hidden md:block"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {STEPS.map((step, index) => (
              <div key={step} className="flex-1 flex flex-row md:flex-col group relative items-center md:items-stretch gap-6 md:gap-0 w-full">
                {/* Node */}
                <div className="w-16 h-16 bg-slate-900 mx-auto flex items-center justify-center text-white font-bold text-xl transition-all duration-300 group-hover:bg-[#FF4500] md:group-hover:scale-110 shadow-[0_0_0_4px_#f8fafc] shrink-0 relative z-10">
                  {String(index + 1).padStart(2, '0')}
                </div>
                {/* Dotted drop line on hover (Desktop) */}
                <div className="hidden md:block absolute top-16 left-1/2 w-0.5 h-0 bg-slate-300 -translate-x-1/2 transition-all duration-300 group-hover:h-8 group-hover:bg-[#FF4500]"></div>
                
                <div className="mt-0 md:mt-12 md:group-hover:mt-16 transition-all duration-300 md:text-center text-left">
                  <span className="block font-black text-slate-900 uppercase tracking-widest text-sm md:text-base group-hover:text-[#FF4500]">
                    {step}
                  </span>
                  <span className="block text-xs text-slate-500 mt-2 font-sans md:opacity-0 group-hover:opacity-100 transition-opacity">PHASE_{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
