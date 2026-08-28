import { useState, useEffect } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { APP_CONFIG } from '../config/app'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Download', href: '#download' },
  { label: 'FAQ', href: '#faq' },
]

export function Navigation() {
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-charcoal-100 shadow-[0_1px_12px_rgba(26,28,26,0.06)] py-3'
            : 'bg-transparent py-5'
        }`}
        role="banner"
      >
        <div className="container-page flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400 rounded-lg"
            aria-label="Fresh Save — go to top"
          >
            <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center shadow-fresh shrink-0">
              <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5" aria-hidden="true">
                <path
                  d="M18 6C11.373 6 6 11.373 6 18s5.373 12 12 12 12-5.373 12-12S24.627 6 18 6Z"
                  fill="white"
                  fillOpacity="0.2"
                />
                <path
                  d="M12 18c0-1.5.4-2.9 1.1-4.1L18 22l4.9-8.1A6 6 0 1 1 12 18Z"
                  fill="white"
                />
                <circle cx="18" cy="18" r="2.5" fill="white" />
              </svg>
            </div>
            <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? 'text-charcoal-900' : 'text-charcoal-900'}`}>
              Fresh Save
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-50 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={APP_CONFIG.downloadUrl}
              download
              className="btn-primary py-2.5 px-5 text-sm"
              aria-label="Download Fresh Save APK for Android"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M5.09 13.9A7 7 0 1 1 19 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                <path d="m5 16 7 7 7-7M12 3v20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download App
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-charcoal-700 hover:bg-charcoal-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-left ${menuOpen ? 'rotate-45 translate-y-[1px]' : ''}`} />
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-left ${menuOpen ? '-rotate-45 -translate-y-[1px]' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-charcoal-950/30 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <nav
          className={`absolute top-0 right-0 bottom-0 w-72 bg-white border-l border-charcoal-100 shadow-2xl flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ease-spring ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3.5 rounded-xl text-base font-medium text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-50 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-charcoal-100">
            <a
              href={APP_CONFIG.downloadUrl}
              download
              className="btn-primary w-full text-sm justify-center"
              aria-label="Download Fresh Save APK for Android"
              onClick={() => setMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M12 3v13m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Download for Android
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
