import { APP_CONFIG } from '../../config/app'
import { useDeviceDetect } from '../../hooks/useDeviceDetect'

function PhoneHero() {
  return (
    <div className="relative mx-auto" style={{ width: 'min(300px, 85vw)' }} aria-hidden="true">
      {/* Glow behind phone */}
      <div className="absolute inset-0 -z-10 translate-y-8 scale-90 blur-3xl rounded-full bg-fresh-300/30 animate-pulse-soft" />

      {/* Floating card — top left */}
      <div className="absolute -left-16 top-16 z-20 hidden sm:flex items-center gap-2.5 bg-white rounded-2xl px-3.5 py-2.5 shadow-card-hover border border-charcoal-100 animate-float">
        <div className="w-8 h-8 rounded-xl bg-fresh-100 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-fresh-700" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" stroke="currentColor" strokeWidth="1.75"/>
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.75"/>
          </svg>
        </div>
        <div>
          <p className="text-2xs font-semibold text-charcoal-500 uppercase tracking-wide">Near You</p>
          <p className="text-xs font-bold text-charcoal-900 leading-tight">3 stores found</p>
        </div>
      </div>

      {/* Floating card — bottom right */}
      <div className="absolute -right-14 bottom-28 z-20 hidden sm:flex items-center gap-2.5 bg-white rounded-2xl px-3.5 py-2.5 shadow-card-hover border border-charcoal-100 animate-float-delayed">
        <div className="w-8 h-8 rounded-xl bg-sage-100 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-sage-700" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-2xs font-semibold text-charcoal-500 uppercase tracking-wide">Products</p>
          <p className="text-xs font-bold text-charcoal-900 leading-tight">Fresh deals</p>
        </div>
      </div>

      {/* Phone shell */}
      <div className="relative bg-charcoal-950 rounded-[3rem] border-[3px] border-charcoal-800 shadow-phone overflow-hidden">
        {/* Notch */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-10 w-28 h-6 bg-charcoal-950 rounded-full" />

        {/* Screen content */}
        <div className="bg-white" style={{ aspectRatio: '9/19.5' }}>
          {/* Status bar */}
          <div className="h-10 bg-fresh-600 flex items-end px-5 pb-2 justify-between">
            <span className="text-white/80 text-2xs font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5">
                {[3,4,4,3].map((h, i) => (
                  <div key={i} className="w-0.5 bg-white/80 rounded-sm" style={{ height: h * 2 }} />
                ))}
              </div>
              <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white/80">
                <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-2.5 text-white/80">
                <rect x="2" y="7" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M22 11v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="4" y="9" width="12" height="7" rx="1" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* App header */}
          <div className="bg-fresh-600 px-4 pb-5 pt-1">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-fresh-200 text-2xs font-medium">Delivering to</p>
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" fill="currentColor"/>
                  </svg>
                  <p className="text-white text-xs font-semibold">Your Location</p>
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-fresh-200" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" aria-hidden="true">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8ZM6 1v3M10 1v3M14 1v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {/* Search bar */}
            <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-charcoal-400 shrink-0" aria-hidden="true">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-charcoal-400 text-2xs">Search stores, products...</span>
            </div>
          </div>

          {/* Categories */}
          <div className="px-3 py-2.5">
            <p className="text-2xs font-bold text-charcoal-700 mb-2">Categories</p>
            <div className="flex gap-2 overflow-hidden">
              {[
                { label: 'Grocery', color: 'bg-fresh-100 text-fresh-700' },
                { label: 'Bakery', color: 'bg-amber-100 text-amber-700' },
                { label: 'Dairy', color: 'bg-blue-100 text-blue-700' },
                { label: 'Snacks', color: 'bg-orange-100 text-orange-700' },
              ].map((cat) => (
                <div key={cat.label} className={`shrink-0 px-2.5 py-1 rounded-lg text-2xs font-semibold ${cat.color}`}>
                  {cat.label}
                </div>
              ))}
            </div>
          </div>

          {/* Nearby stores */}
          <div className="px-3 py-1">
            <div className="flex items-center justify-between mb-2">
              <p className="text-2xs font-bold text-charcoal-700">Nearby Stores</p>
              <p className="text-2xs text-fresh-600 font-semibold">See all</p>
            </div>
            <div className="space-y-2">
              {[
                { name: 'Green Basket', type: 'Grocery', dist: '0.3 km', items: 120 },
                { name: 'Fresh Mart', type: 'Supermarket', dist: '0.8 km', items: 240 },
              ].map((store) => (
                <div key={store.name} className="flex items-center gap-2.5 p-2 rounded-xl bg-charcoal-50 border border-charcoal-100">
                  <div className="w-9 h-9 rounded-xl bg-fresh-200 flex items-center justify-center shrink-0 text-base">
                    🏪
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-2xs font-bold text-charcoal-900 truncate">{store.name}</p>
                    <p className="text-2xs text-charcoal-500">{store.type} · {store.dist}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-2xs font-bold text-fresh-600">{store.items}+</p>
                    <p className="text-2xs text-charcoal-400">items</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product strip */}
          <div className="px-3 pt-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-2xs font-bold text-charcoal-700">Featured Products</p>
            </div>
            <div className="flex gap-2">
              {[
                { name: 'Fresh Milk', price: '₹45', emoji: '🥛' },
                { name: 'Whole Wheat', price: '₹38', emoji: '🍞' },
                { name: 'Tomatoes', price: '₹25', emoji: '🍅' },
              ].map((product) => (
                <div key={product.name} className="flex-1 p-2 rounded-xl bg-white border border-charcoal-100 shadow-sm">
                  <div className="w-full aspect-square rounded-lg bg-fresh-50 flex items-center justify-center text-xl mb-1.5">
                    {product.emoji}
                  </div>
                  <p className="text-2xs font-semibold text-charcoal-800 truncate leading-tight">{product.name}</p>
                  <p className="text-2xs font-bold text-fresh-600">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-6 bg-white border-t border-charcoal-100 flex items-center justify-center">
          <div className="w-24 h-1 bg-charcoal-800 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const device = useDeviceDetect()

  const handleScroll = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      aria-label="MYOFERS — hero"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-0 bg-dots opacity-60" />
        {/* Subtle green wash top-right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-fresh-100/50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-sage-100/40 blur-3xl" />
      </div>

      <div className="container-page w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fresh-50 border border-fresh-200 text-fresh-700 text-xs font-semibold tracking-wide uppercase mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 animate-pulse" aria-hidden="true" />
              Android App — Free to Download
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-charcoal-950 leading-[1.08] tracking-tight mb-6 text-balance animate-fade-up">
              Fresh products.{' '}
              <span className="text-gradient">Right around you.</span>
            </h1>

            <p className="text-lg text-charcoal-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Discover nearby stores, explore products and find better local deals — all from one simple app.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {device === 'ios' ? (
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-charcoal-50 border border-charcoal-200 text-charcoal-600 text-sm font-medium">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0 text-charcoal-400" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  </svg>
                  MYOFERS is available for Android
                </div>
              ) : (
                <a
                  href={APP_CONFIG.downloadUrl}
                  download
                  className="btn-primary"
                  aria-label="Download MYOFERS APK for Android"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                    <path d="M12 3v13m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Download for Android
                </a>
              )}
              <button
                onClick={() => handleScroll('#features')}
                className="btn-secondary"
                aria-label="Explore MYOFERS features"
              >
                Explore Features
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {[
                { icon: '🔒', text: 'Official website' },
                { icon: '📲', text: 'Direct APK download' },
                { icon: '🆓', text: 'Free to download' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-sm text-charcoal-500">
                  <span aria-hidden="true">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <PhoneHero />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 lg:mt-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => handleScroll('#showcase')}
            className="flex flex-col items-center gap-2 text-charcoal-400 hover:text-fresh-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400 rounded-lg p-2"
            aria-label="Scroll to app showcase"
          >
            <span className="text-xs font-medium tracking-wide">Scroll to explore</span>
            <div className="w-6 h-9 rounded-full border-2 border-current flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
