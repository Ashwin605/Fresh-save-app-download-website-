import { RevealWrapper } from '../ui/RevealWrapper'

const products = [
  { emoji: '🥛', name: 'Fresh Milk', category: 'Dairy', color: 'bg-blue-50 border-blue-100' },
  { emoji: '🍞', name: 'Whole Wheat Bread', category: 'Bakery', color: 'bg-amber-50 border-amber-100' },
  { emoji: '🍅', name: 'Tomatoes', category: 'Vegetables', color: 'bg-red-50 border-red-100' },
  { emoji: '🍌', name: 'Bananas', category: 'Fruits', color: 'bg-yellow-50 border-yellow-100' },
  { emoji: '🍚', name: 'Basmati Rice', category: 'Grains', color: 'bg-orange-50 border-orange-100' },
  { emoji: '🥬', name: 'Fresh Spinach', category: 'Vegetables', color: 'bg-green-50 border-green-100' },
]

export function ProductDiscovery() {
  return (
    <section
      id="product-discovery"
      className="section-padding bg-surface-2 relative overflow-hidden"
      aria-label="Product discovery"
    >
      {/* Subtle accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fresh-100/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none" aria-hidden="true" />

      <div className="container-page relative">
        <RevealWrapper>
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-fresh-500" aria-hidden="true" />
              Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-950 tracking-tight mt-4 mb-4 text-balance">
              Browse products from{' '}
              <span className="text-gradient">local stores</span>
            </h2>
            <p className="text-lg text-charcoal-500 max-w-xl mx-auto leading-relaxed">
              See what&apos;s available from stores near you. Browse by category, check availability and add to your cart.
            </p>
          </div>
        </RevealWrapper>

        {/* Product card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <RevealWrapper key={product.name} variant="scale" delay={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
              <div className={`rounded-2xl border p-4 text-center hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 ${product.color}`}>
                <div className="text-4xl mb-3" aria-hidden="true">{product.emoji}</div>
                <p className="text-sm font-bold text-charcoal-900 mb-0.5 truncate">{product.name}</p>
                <p className="text-2xs text-charcoal-500">{product.category}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Conceptual note */}
        <RevealWrapper>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            {[
              'Product image',
              'Name & price',
              'Store info',
              'Availability',
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-xs text-charcoal-400">
                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-fresh-400" aria-hidden="true">
                  <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </span>
            ))}
          </div>
          <p className="text-center text-2xs text-charcoal-400 italic mt-3">
            Illustrative product cards — actual products and prices come from stores in the app
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
