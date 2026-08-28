import { RevealWrapper } from '../ui/RevealWrapper'

const flowSteps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Your Location',
    desc: 'Share your location to get started',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Nearby Stores',
    desc: 'See stores around your area',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Products',
    desc: 'Browse available products',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M7 7h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Offers',
    desc: 'Discover deals and discounts',
  },
]

export function LocationDiscovery() {
  return (
    <section
      id="location-discovery"
      className="section-padding bg-surface-2 relative overflow-hidden"
      aria-label="Location-first experience"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fresh-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — visual flow */}
          <RevealWrapper variant="left">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Conceptual location visual */}
              <div className="relative bg-white rounded-3xl border border-charcoal-100 shadow-card p-6 md:p-8">
                <div className="flex flex-col items-center gap-3">
                  {flowSteps.map((step, i) => (
                    <div key={step.label} className="w-full">
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-charcoal-50 border border-charcoal-100 hover:border-fresh-200 hover:bg-fresh-50/50 transition-all duration-200">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                          i === 0
                            ? 'bg-fresh-100 text-fresh-700'
                            : i === 1
                            ? 'bg-sage-100 text-sage-700'
                            : i === 2
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-blue-50 text-blue-700'
                        }`}>
                          {step.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-charcoal-900">{step.label}</p>
                          <p className="text-xs text-charcoal-500">{step.desc}</p>
                        </div>
                      </div>
                      {/* Connector arrow */}
                      {i < flowSteps.length - 1 && (
                        <div className="flex justify-center py-1" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-fresh-400">
                            <path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* "Conceptual" label */}
                <p className="text-center mt-4 text-2xs text-charcoal-400 italic">
                  Conceptual flow illustration
                </p>
              </div>
            </div>
          </RevealWrapper>

          {/* Right — text */}
          <RevealWrapper variant="right">
            <div>
              <span className="section-label mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-fresh-500" aria-hidden="true" />
                Location First
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-charcoal-950 tracking-tight mt-4 mb-5 text-balance">
                Shopping starts with{' '}
                <span className="text-gradient">where you are</span>
              </h2>
              <p className="text-lg text-charcoal-500 leading-relaxed mb-6">
                Fresh Save uses your location to show you stores and products that are actually near you. No endless scrolling through irrelevant results — just what&apos;s around the corner.
              </p>

              <div className="space-y-4">
                {[
                  'Stores are sorted by proximity to you',
                  'Products reflect real local availability',
                  'Offers come from stores you can actually visit',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-fresh-100 border border-fresh-200 flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-fresh-700" aria-hidden="true">
                        <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-sm text-charcoal-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
