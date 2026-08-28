import { RevealWrapper } from '../ui/RevealWrapper'
import { APP_CONFIG } from '../../config/app'

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Store Profile',
    description: 'Set up your store with name, address, timings and description.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Products',
    description: 'Add, edit and manage your product catalogue.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="1.75"/>
      </svg>
    ),
    title: 'Inventory',
    description: 'Track stock levels and manage availability.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M7 7h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Offers',
    description: 'Create and manage offers to attract customers.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Orders',
    description: 'Receive and manage customer orders.',
  },
]

export function ShopkeeperEcosystem() {
  const handleScroll = () => {
    const target = document.querySelector('#download')
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="shopkeepers"
      className="section-padding relative overflow-hidden"
      aria-label="Shopkeeper ecosystem"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-950" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-fresh-500/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <RevealWrapper variant="left">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fresh-500/15 border border-fresh-500/25 text-fresh-400 text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-fresh-400" aria-hidden="true" />
                For Shopkeepers
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-5 text-balance">
                Bring your store to{' '}
                <span className="text-fresh-400">Fresh Save</span>
              </h2>

              <p className="text-lg text-charcoal-400 leading-relaxed mb-8">
                Fresh Save isn&apos;t just for customers. If you run a local store, you can join the Fresh Save ecosystem and reach customers right in your neighbourhood.
              </p>

              <button
                onClick={handleScroll}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-fresh-600 text-white font-semibold text-base leading-none hover:bg-fresh-700 active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
                aria-label={`Download ${APP_CONFIG.name} to get started as a shopkeeper`}
              >
                Get started as a shopkeeper
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </RevealWrapper>

          {/* Right — capability cards */}
          <RevealWrapper variant="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className={`p-5 rounded-2xl bg-charcoal-900 border border-charcoal-800 hover:border-charcoal-700 transition-colors duration-200 ${
                    i === capabilities.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-fresh-500/15 text-fresh-400 flex items-center justify-center mb-3">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{cap.title}</h3>
                  <p className="text-xs text-charcoal-400 leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
