/**
 * Fresh Save — App Configuration
 *
 * Update these values when releasing a new APK version.
 * This is the single source of truth for all download-related info.
 */

export const APP_CONFIG = {
  name: 'Fresh Save',
  tagline: 'Discover local stores & products near you',
  description:
    'Fresh Save connects customers with nearby stores and products. Discover local deals, browse products, and shop smarter — all from one simple Android app.',

  // ─── APK Download ──────────────────────────────────────────────────────────
  // Replace with your real hosted APK URL before deployment.
  // Example: 'https://freshsave.app/downloads/FreshSave.apk'
  downloadUrl: '/downloads/FreshSave.apk',

  // Set to the actual version string once known, or null to hide it.
  version: null as string | null,

  // Set to the actual file size once known (e.g. '18 MB'), or null to hide it.
  apkSize: '73.9 MB' as string | null,

  // Minimum Android version required
  minAndroid: 'Android 6.0+',

  // ─── Contact / Social ──────────────────────────────────────────────────────
  // Only populate with real, live values. Leave null to hide from footer.
  contactEmail: null as string | null,
  websiteUrl: 'https://freshsave.app',

  // ─── SEO ───────────────────────────────────────────────────────────────────
  seoTitle: 'Fresh Save — Discover Local Stores & Products Near You',
  seoDescription:
    'Fresh Save is an Android app that connects you with stores and products right around your location. Download the APK and start shopping locally.',
  ogImage: '/og-image.png',
} as const
