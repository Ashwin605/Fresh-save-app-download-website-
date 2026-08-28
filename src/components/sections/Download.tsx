import { APP_CONFIG } from '../../config/app'
import { useDeviceDetect } from '../../hooks/useDeviceDetect'
import { RevealWrapper } from '../ui/RevealWrapper'

export function Download() {
  const device = useDeviceDetect()

  // Build the public URL for QR code
  const qrUrl = APP_CONFIG.websiteUrl
    ? `${APP_CONFIG.websiteUrl}/#download`
    : APP_CONFIG.downloadUrl

  return (
    <section
      id="download"
      className="section-padding relative overflow-hidden"
      aria-label="Download Fresh Save"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-surface" aria-hidden="true" />
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fresh-100/40 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-page relative">
        <RevealWrapper>
          <div className="text-center mb-12">
            <span className="section-label mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-fresh-500" aria-hidden="true" />
              Download
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-950 tracking-tight mt-4 mb-4 text-balance">
              Get Fresh Save on{' '}
              <span className="text-gradient">Android</span>
            </h2>
            <p className="text-lg text-charcoal-500 max-w-lg mx-auto leading-relaxed">
              Download the latest Fresh Save APK and start discovering stores around you.
            </p>
          </div>
        </RevealWrapper>

        {/* Download card */}
        <RevealWrapper variant="scale">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 md:p-10 text-center">
              {/* Android icon */}
              <div className="w-16 h-16 rounded-3xl bg-fresh-50 border border-fresh-200 flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-fresh-600" aria-hidden="true">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
                  <path d="M13 14v4M9 14v4M13 14l-2 2-2-2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Device-specific messaging */}
              {device === 'ios' ? (
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-charcoal-50 border border-charcoal-200 text-charcoal-600 text-sm font-medium mb-3">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0 text-charcoal-400" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75"/>
                      <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                    </svg>
                    Fresh Save is currently available for Android
                  </div>
                  <p className="text-sm text-charcoal-500">
                    To download, open this page on an Android device or scan the QR code below from an Android phone.
                  </p>
                </div>
              ) : (
                <>
                  {/* Download button */}
                  <a
                    href={APP_CONFIG.downloadUrl}
                    download
                    className="btn-primary text-lg px-10 py-5 mb-4 inline-flex"
                    aria-label="Download Fresh Save APK for Android"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                      <path d="M12 3v13m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Download for Android
                  </a>

                  {device === 'desktop' && (
                    <p className="text-sm text-charcoal-500 mb-2">
                      Or scan the QR code below from your Android phone
                    </p>
                  )}
                </>
              )}

              {/* Download info */}
              <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-charcoal-500 mt-4 mb-6">
                {APP_CONFIG.version && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-charcoal-300" aria-hidden="true" />
                    Version {APP_CONFIG.version}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-charcoal-300" aria-hidden="true" />
                  Android {APP_CONFIG.minAndroid ? `(${APP_CONFIG.minAndroid})` : ''}
                </span>
                {APP_CONFIG.apkSize && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-charcoal-300" aria-hidden="true" />
                    {APP_CONFIG.apkSize}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-charcoal-100 my-6" aria-hidden="true" />

              {/* QR Code */}
              <div className={device === 'android' ? 'hidden' : ''}>
                <p className="text-sm font-semibold text-charcoal-700 mb-4">
                  Scan to download on your phone
                </p>
                <div className="flex justify-center mb-3">
                  <a
                    href={APP_CONFIG.downloadUrl}
                    download
                    className="block hover:opacity-80 hover:scale-105 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-400 focus-visible:ring-offset-2 rounded-2xl"
                    aria-label="Click QR code to download Fresh Save APK for Android"
                    title="Click to download APK directly"
                  >
                    <img 
                      src="/qr.png" 
                      alt="Scan to download Fresh Save" 
                      className="w-40 h-40 rounded-xl border border-charcoal-100 shadow-card bg-white p-2"
                    />
                  </a>
                </div>
                <p className="text-2xs text-charcoal-400">
                  Point your Android phone&apos;s camera at the QR code
                </p>
              </div>

              {/* Mobile — show reduced QR text */}
              {device === 'android' && (
                <p className="text-sm text-charcoal-500">
                  Share this page with friends so they can download Fresh Save too.
                </p>
              )}
            </div>
          </div>
        </RevealWrapper>

        {/* Trust badges */}
        <RevealWrapper>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
                    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: 'Official download',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path d="M12 3v13m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  </svg>
                ),
                text: 'Latest version',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  </svg>
                ),
                text: 'Secure HTTPS connection',
              },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-charcoal-500">
                <span className="text-fresh-600">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
