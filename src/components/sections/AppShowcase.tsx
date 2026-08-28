import { RevealWrapper } from '../ui/RevealWrapper'
import { PhoneMockup } from '../ui/PhoneMockup'
import { useParallax } from '../../hooks/useParallax'

function ScreenHome() {
  return (
    <div className="h-full bg-white">
      <div className="h-10 bg-fresh-600 flex items-end px-4 pb-2 justify-between">
        <span className="text-white/80 text-2xs font-medium">9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="bg-fresh-600 px-4 pb-4 pt-1">
        <p className="text-fresh-200 text-2xs mb-0.5">Delivering to</p>
        <p className="text-white text-xs font-semibold mb-2">Your Location ▾</p>
        <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-charcoal-400 shrink-0"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/><path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <span className="text-charcoal-400 text-2xs">Search stores, products...</span>
        </div>
      </div>
      <div className="px-3 py-2">
        <p className="text-2xs font-bold text-charcoal-700 mb-1.5">Categories</p>
        <div className="flex gap-1.5">
          {['Grocery', 'Bakery', 'Dairy', 'Snacks'].map((c, i) => (
            <div key={c} className={`shrink-0 px-2 py-1 rounded-lg text-2xs font-semibold ${
              [
                'bg-fresh-100 text-fresh-700',
                'bg-amber-100 text-amber-700',
                'bg-blue-100 text-blue-700',
                'bg-orange-100 text-orange-700',
              ][i]
            }`}>{c}</div>
          ))}
        </div>
      </div>
      <div className="px-3 py-1.5">
        <p className="text-2xs font-bold text-charcoal-700 mb-1.5">Nearby Stores</p>
        <div className="space-y-1.5">
          {['Store A', 'Store B'].map((s) => (
            <div key={s} className="flex items-center gap-2 p-2 rounded-xl bg-charcoal-50 border border-charcoal-100">
              <div className="w-8 h-8 rounded-xl bg-fresh-200 flex items-center justify-center text-sm">🏪</div>
              <div className="flex-1"><p className="text-2xs font-bold text-charcoal-900">{s}</p><p className="text-2xs text-charcoal-400">Nearby</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScreenCategories() {
  return (
    <div className="h-full bg-white">
      <div className="h-10 bg-fresh-600 flex items-end px-4 pb-2">
        <span className="text-white/80 text-2xs font-medium">9:41</span>
      </div>
      <div className="bg-fresh-600 px-4 pb-4 pt-1">
        <p className="text-white text-sm font-bold">Categories</p>
      </div>
      <div className="p-3 grid grid-cols-3 gap-2">
        {[
          { emoji: '🥬', label: 'Vegetables', bg: 'bg-green-50' },
          { emoji: '🍎', label: 'Fruits', bg: 'bg-red-50' },
          { emoji: '🥛', label: 'Dairy', bg: 'bg-blue-50' },
          { emoji: '🍞', label: 'Bakery', bg: 'bg-amber-50' },
          { emoji: '🥤', label: 'Beverages', bg: 'bg-purple-50' },
          { emoji: '🧴', label: 'Personal', bg: 'bg-pink-50' },
          { emoji: '🧹', label: 'Cleaning', bg: 'bg-cyan-50' },
          { emoji: '🍫', label: 'Snacks', bg: 'bg-orange-50' },
          { emoji: '🍚', label: 'Grains', bg: 'bg-yellow-50' },
        ].map(({ emoji, label, bg }) => (
          <div key={label} className={`${bg} rounded-xl p-2 flex flex-col items-center gap-1`}>
            <span className="text-lg">{emoji}</span>
            <span className="text-2xs font-semibold text-charcoal-700">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenStoreDetail() {
  return (
    <div className="h-full bg-white">
      <div className="h-10 bg-fresh-600 flex items-end px-4 pb-2 justify-between">
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white"><path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span className="text-white text-xs font-bold">Store Details</span>
        <div className="w-4" />
      </div>
      <div className="bg-fresh-50 p-3 flex items-center gap-3 border-b border-charcoal-100">
        <div className="w-12 h-12 rounded-2xl bg-fresh-200 flex items-center justify-center text-xl">🏪</div>
        <div>
          <p className="text-xs font-bold text-charcoal-900">Local Store</p>
          <p className="text-2xs text-charcoal-500">Grocery • 0.5 km</p>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-fresh-500" />
            <span className="text-2xs text-fresh-600 font-medium">Open now</span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="text-2xs font-bold text-charcoal-700 mb-2">Products</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { emoji: '🥛', name: 'Milk', price: '₹45' },
            { emoji: '🍞', name: 'Bread', price: '₹38' },
            { emoji: '🍅', name: 'Tomatoes', price: '₹25' },
            { emoji: '🍌', name: 'Bananas', price: '₹30' },
          ].map((p) => (
            <div key={p.name} className="p-2 rounded-xl bg-charcoal-50 border border-charcoal-100">
              <div className="w-full aspect-square rounded-lg bg-white flex items-center justify-center text-xl mb-1">{p.emoji}</div>
              <p className="text-2xs font-semibold text-charcoal-800 truncate">{p.name}</p>
              <p className="text-2xs font-bold text-fresh-600">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScreenCart() {
  return (
    <div className="h-full bg-white flex flex-col">
      <div className="h-10 bg-fresh-600 flex items-end px-4 pb-2 justify-between">
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white"><path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span className="text-white text-xs font-bold">Your Cart</span>
        <div className="w-4" />
      </div>
      <div className="flex-1 p-3 space-y-2">
        {[
          { emoji: '🥛', name: 'Fresh Milk', price: '₹45', qty: 2 },
          { emoji: '🍞', name: 'Whole Wheat Bread', price: '₹38', qty: 1 },
          { emoji: '🍅', name: 'Tomatoes (500g)', price: '₹25', qty: 1 },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-2.5 p-2 rounded-xl bg-charcoal-50 border border-charcoal-100">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-lg shrink-0">{item.emoji}</div>
            <div className="flex-1 min-w-0">
              <p className="text-2xs font-bold text-charcoal-900 truncate">{item.name}</p>
              <p className="text-2xs text-charcoal-500">{item.price}</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-5 h-5 rounded-md bg-charcoal-200 flex items-center justify-center text-2xs font-bold text-charcoal-600">−</div>
              <span className="text-2xs font-bold text-charcoal-900 w-4 text-center">{item.qty}</span>
              <div className="w-5 h-5 rounded-md bg-fresh-500 flex items-center justify-center text-2xs font-bold text-white">+</div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-charcoal-100 bg-charcoal-50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xs text-charcoal-500">Total</span>
          <span className="text-xs font-bold text-charcoal-900">₹153</span>
        </div>
        <div className="w-full py-2.5 bg-fresh-600 text-white text-2xs font-bold text-center rounded-xl">
          Place Order
        </div>
      </div>
    </div>
  )
}

const screens = [
  { label: 'Home', component: <ScreenHome /> },
  { label: 'Categories', component: <ScreenCategories /> },
  { label: 'Store Details', component: <ScreenStoreDetail /> },
  { label: 'Cart', component: <ScreenCart /> },
]

export function AppShowcase() {
  const { ref, offset } = useParallax(0.08)

  return (
    <section
      id="showcase"
      ref={ref}
      className="section-padding overflow-hidden"
      aria-label="App showcase"
    >
      <div className="container-page">
        <RevealWrapper>
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-fresh-500" aria-hidden="true" />
              App Preview
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-950 tracking-tight mt-4 mb-4 text-balance">
              Everything you need,{' '}
              <span className="text-gradient">one app</span>
            </h2>
            <p className="text-lg text-charcoal-500 max-w-xl mx-auto leading-relaxed">
              Browse stores, explore products, manage your cart and place orders — all within a clean, intuitive interface.
            </p>
          </div>
        </RevealWrapper>

        {/* Phone grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {screens.map((screen, i) => (
            <RevealWrapper key={screen.label} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div
                className="flex flex-col items-center gap-3"
                style={{ transform: `translateY(${offset * (i % 2 === 0 ? 1 : -1)}px)` }}
              >
                <PhoneMockup size="sm">
                  {screen.component}
                </PhoneMockup>
                <span className="text-xs font-semibold text-charcoal-500 tracking-wide">
                  {screen.label}
                </span>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
