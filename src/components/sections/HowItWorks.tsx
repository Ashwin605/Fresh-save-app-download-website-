import { RevealWrapper } from '../ui/RevealWrapper'

const steps = [
  {
    number: '01',
    title: 'Choose your location',
    description: 'Tell Fresh Save where you are so we can find what\'s nearby.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.75"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Discover nearby stores',
    description: 'Explore stores and products available around you.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Shop smarter',
    description: 'Compare products, discover offers and place your order.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6h18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-surface-2 relative"
      aria-label="How Fresh Save works"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="container-page relative">
        <RevealWrapper>
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-fresh-500" aria-hidden="true" />
              Simple & Fast
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-950 tracking-tight mt-4 mb-4 text-balance">
              How Fresh Save{' '}
              <span className="text-gradient">works</span>
            </h2>
            <p className="text-lg text-charcoal-500 max-w-xl mx-auto leading-relaxed">
              Three simple steps to start discovering stores and products near you.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-[16.66%] right-[16.66%] h-px bg-fresh-200" aria-hidden="true">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-fresh-400" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-fresh-400" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-fresh-400" />
          </div>

          {steps.map((step, i) => (
            <RevealWrapper key={step.number} delay={(i + 1) as 1 | 2 | 3}>
              <div className="card p-8 text-center relative group hover:shadow-card-hover transition-shadow duration-300">
                {/* Step number */}
                <div className="w-12 h-12 rounded-2xl bg-fresh-50 border border-fresh-200 flex items-center justify-center text-fresh-700 mx-auto mb-5 group-hover:bg-fresh-100 transition-colors duration-200">
                  {step.icon}
                </div>

                <span className="inline-block text-2xs font-bold text-fresh-500 tracking-widest uppercase mb-2">
                  Step {step.number}
                </span>

                <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
