import Link from 'next/link';

export default function ManufacturingQuality() {
  return (
    <section className="bg-gradient-to-b from-white via-brand-gray to-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Label */}
        <div className="mb-6">
          <span className="text-sm text-slate-500 font-medium">← Manufacturing steps</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-inter leading-tight mb-12 text-slate-900">
              Quality Equipment Decisions
            </h2>
            
            <div className="space-y-6 mb-10">
              {/* Step 1 */}
              <div className="border-t border-slate-200 pt-6">
                <span className="text-sm text-slate-400 font-medium block mb-1">Step 01</span>
                <span className="text-base font-medium text-slate-900">Curriculum Needs Review</span>
              </div>
              
              {/* Step 2 */}
              <div className="border-t border-slate-200 pt-6">
                <span className="text-sm text-slate-400 font-medium block mb-1">Step 02</span>
                <span className="text-base font-medium text-slate-900">Equipment Recommendation</span>
              </div>
              
              {/* Step 3 */}
              <div className="border-t border-slate-200 pt-6">
                <span className="text-sm text-slate-400 font-medium block mb-1">Step 03</span>
                <span className="text-base font-medium text-slate-900">Prototype & Validation</span>
              </div>
              
              {/* Step 4 */}
              <div className="border-t border-slate-200 pt-6">
                <span className="text-sm text-slate-400 font-medium block mb-1">Step 04</span>
                <span className="text-base font-medium text-slate-900">Scalable Production</span>
              </div>
            </div>

            <p className="italic text-slate-600 font-sans">
              "This collaborative approach results in a product that's affordable, durable, and perfectly suited for the Ghanaian classroom."
            </p>
          </div>

          {/* Right Column */}
          <div className="relative mt-8 lg:mt-0">
            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-blue-200 to-slate-300 aspect-[4/5] rounded-xl w-full max-w-lg ml-auto"></div>
            
            {/* Overlapping Card */}
            <div className="relative -mt-32 ml-4 mr-4 md:-mt-24 md:ml-8 lg:-mt-32 bg-white p-8 rounded-xl shadow-xl max-w-md border border-slate-100 z-10">
              <h3 className="text-xl font-bold font-inter text-brand-navy mb-3">
                "Must be Durable, not Expensive"
              </h3>
              <p className="text-slate-600 mb-6 font-sans">
                "We believe quality laboratory equipment shouldn't break the bank. Our locally manufactured products deliver international standards at a fraction of the import cost."
              </p>
              <Link href="#" className="text-brand-red font-semibold text-sm hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-20 pt-8 border-t border-slate-200">
          <Link href="#" className="text-sm text-slate-500 hover:text-brand-red mb-4 sm:mb-0 transition-colors">
            ← For schools with limited budgets
          </Link>
          <Link href="#" className="text-sm text-slate-500 hover:text-brand-red transition-colors">
            Ghana Standards Authority →
          </Link>
        </div>
      </div>
    </section>
  );
}
