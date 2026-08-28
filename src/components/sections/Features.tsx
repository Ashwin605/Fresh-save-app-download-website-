import { RevealWrapper } from '../ui/RevealWrapper'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.75"/>
      </svg>
    ),
    title: 'Nearby Store Discovery',
    description: 'Find real stores around your current location. Fresh Save shows you what\'s available nearby.',
    color: 'bg-fresh-50 text-fresh-700 border-fresh-200',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Product Discovery',
    description: 'Browse products available from local stores. See what\'s in stock before you visit.',
    color: 'bg-sage-50 text-sage-700 border-sage-200',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
        <path d="M7 7h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Local Offers',
    description: 'Discover active offers from participating stores. Save more on everyday products.',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.75"/>
        <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Smart Search',
    description: 'Search products, stores and categories. Find exactly what you\'re looking for, instantly.',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="1.75"/>
        <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Easy Shopping',
    description: 'Add products and manage your cart easily. A simple, clean shopping experience.',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.75"/>
        <path d="m16 8 4 2.5v5L16 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11H6M9 8v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Order Tracking',
    description: 'Keep track of your orders from placement to delivery. Know where your order stands.',
    color: 'bg-rose-50 text-rose-700 border-rose-200',
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="section-padding"
      aria-label="Core features"
    >
      <div className="container-page">
        <RevealWrapper>
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-fresh-500" aria-hidden="true" />
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-950 tracking-tight mt-4 mb-4 text-balance">
              Built for{' '}
              <span className="text-gradient">local commerce</span>
            </h2>
            <p className="text-lg text-charcoal-500 max-w-xl mx-auto leading-relaxed">
              Everything you need to discover, browse and shop from stores near you.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <RevealWrapper key={feature.title} delay={(i % 3 + 1) as 1 | 2 | 3}>
              <div className="card p-7 h-full group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 transition-colors duration-200 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-charcoal-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
