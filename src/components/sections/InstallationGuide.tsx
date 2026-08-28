import { RevealWrapper } from '../ui/RevealWrapper'

const steps = [
  {
    number: 1,
    title: 'Download the APK',
    description: 'Tap the download button above to get the MYOFERS APK file.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 3v13m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Open the downloaded file',
    description: 'Find the APK in your notifications or Downloads folder and tap it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Allow installation',
    description: 'If Android asks for permission, allow installation from this source.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Tap Install',
    description: 'Confirm the installation when prompted.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.75"/>
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: 5,
    title: 'Open MYOFERS',
    description: 'Find MYOFERS on your home screen and start exploring.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75"/>
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export function InstallationGuide() {
  return (
    <section
      id="installation"
      className="section-padding bg-surface-2 relative"
      aria-label="Installation guide"
    >
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="container-page relative">
        <RevealWrapper>
          <div className="text-center mb-12 md:mb-16">
            <span className="section-label mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-fresh-500" aria-hidden="true" />
              Installation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-950 tracking-tight mt-4 mb-4 text-balance">
              Easy to install,{' '}
              <span className="text-gradient">ready in seconds</span>
            </h2>
            <p className="text-lg text-charcoal-500 max-w-lg mx-auto leading-relaxed">
              Follow these simple steps to get MYOFERS running on your Android device.
            </p>
          </div>
        </RevealWrapper>

        {/* Steps */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 md:left-7 top-8 bottom-8 w-px bg-fresh-200" aria-hidden="true" />

            <div className="space-y-4">
              {steps.map((step, i) => (
                <RevealWrapper key={step.number} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
                  <div className="relative flex items-start gap-5">
                    {/* Step circle */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-charcoal-100 shadow-card flex items-center justify-center text-fresh-600 shrink-0 relative z-10">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="card p-5 flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xs font-bold text-fresh-500 tracking-widest uppercase">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-charcoal-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-charcoal-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
