import { APP_CONFIG } from '../config/app'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Download', href: '#download' },
  { label: 'FAQ', href: '#faq' },
]

export function Footer() {
  const year = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-charcoal-950 text-charcoal-300" role="contentinfo">
      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 mb-4 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400 rounded-lg"
              aria-label="MYOFERS — go to top"
            >
              <img src="/logo.png" alt="MYOFERS" className="h-10 w-auto" />
            </a>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-xs">
              Connecting customers with nearby stores and products. Shop local, shop smart.
            </p>
            {APP_CONFIG.contactEmail && (
              <a
                href={`mailto:${APP_CONFIG.contactEmail}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-charcoal-400 hover:text-fresh-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400 rounded"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {APP_CONFIG.contactEmail}
              </a>
            )}
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-5">Navigation</h3>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-charcoal-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-5">Get the App</h3>
            <p className="text-sm text-charcoal-400 mb-4 leading-relaxed">
              Available for Android. Download the APK directly from our website.
            </p>
            <a
              href={APP_CONFIG.downloadUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-fresh-600/20 border border-fresh-600/30 text-fresh-400 text-sm font-medium hover:bg-fresh-600/30 hover:border-fresh-500/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400"
              aria-label="Download MYOFERS APK"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M12 3v13m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Download APK
            </a>
            <p className="text-xs text-charcoal-500 mt-3">{APP_CONFIG.minAndroid}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            © {year} MYOFERS. All rights reserved.
          </p>
          {APP_CONFIG.version && (
            <p className="text-xs text-charcoal-600">
              Version {APP_CONFIG.version}
            </p>
          )}
          <p className="text-xs text-charcoal-600">
            Official Android App
          </p>
        </div>
      </div>
    </footer>
  )
}
