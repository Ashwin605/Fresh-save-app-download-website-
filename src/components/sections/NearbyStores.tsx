import { RevealWrapper } from '../ui/RevealWrapper'

const storeCards = [
  {
    emoji: '🏪',
    name: 'Local Grocery',
    type: 'Grocery Store',
    distance: '0.3 km away',
    status: 'Open',
    productCount: 'Many products',
    bg: 'bg-fresh-100',
  },
  {
    emoji: '🛒',
    name: 'Neighbourhood Mart',
    type: 'Supermarket',
    distance: '0.8 km away',
    status: 'Open',
    productCount: 'Various items',
    bg: 'bg-sage-100',
  },
  {
    emoji: '🥖',
    name: 'Corner Bakery',
    type: 'Bakery & Confections',
    distance: '1.2 km away',
    status: 'Open',
    productCount: 'Fresh baked goods',
    bg: 'bg-amber-100',
  },
]

export function NearbyStores() {
  return (
    <section
      id="nearby-stores"
      className="section-padding"
      aria-label="Nearby stores discovery"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <RevealWrapper variant="left">
            <div>
              <span className="section-label mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-fresh-500" aria-hidden="true" />
                Nearby Stores
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-charcoal-950 tracking-tight mt-4 mb-5 text-balance">
                Find stores{' '}
                <span className="text-gradient">right around you</span>
              </h2>
              <p className="text-lg text-charcoal-500 leading-relaxed mb-6">
                MYOFERS shows you stores within your area, sorted by distance. See what&apos;s available, check their products and visit the ones that have what you need.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: '📍', label: 'Distance-based' },
                  { icon: '🕐', label: 'Availability status' },
                  { icon: '📦', label: 'Product listings' },
                  { icon: '🏷️', label: 'Active offers' },
                ].map((tag) => (
                  <span key={tag.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal-50 border border-charcoal-100 text-xs font-medium text-charcoal-600">
                    <span aria-hidden="true">{tag.icon}</span>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Right — illustrative store cards */}
          <RevealWrapper variant="right">
            <div className="space-y-4 max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Location indicator */}
              <div className="flex items-center gap-2 mb-2 px-1">
                <div className="w-2 h-2 rounded-full bg-fresh-500 animate-pulse" aria-hidden="true" />
                <span className="text-xs font-medium text-charcoal-500">Stores near your location</span>
              </div>

              {storeCards.map((store, i) => (
                <div
                  key={store.name}
                  className="card p-4 flex items-center gap-4 group hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl ${store.bg} flex items-center justify-center text-2xl shrink-0`}>
                    {store.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-charcoal-900 truncate">{store.name}</p>
                    <p className="text-xs text-charcoal-500 mb-1">{store.type}</p>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-2xs text-charcoal-400">
                        <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" stroke="currentColor" strokeWidth="2"/></svg>
                        {store.distance}
                      </span>
                      <span className="inline-flex items-center gap-1 text-2xs text-fresh-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-fresh-500" aria-hidden="true" />
                        {store.status}
                      </span>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-charcoal-300 group-hover:text-fresh-500 transition-colors shrink-0" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}

              <p className="text-center text-2xs text-charcoal-400 italic mt-2">
                Illustrative UI — actual stores depend on your location
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
