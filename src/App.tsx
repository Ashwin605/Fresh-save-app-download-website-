import { Navigation } from './components/Navigation'
import { Hero } from './components/sections/Hero'
import { AppShowcase } from './components/sections/AppShowcase'
import { HowItWorks } from './components/sections/HowItWorks'
import { Features } from './components/sections/Features'
import { LocationDiscovery } from './components/sections/LocationDiscovery'
import { NearbyStores } from './components/sections/NearbyStores'
import { ProductDiscovery } from './components/sections/ProductDiscovery'
import { ShopkeeperEcosystem } from './components/sections/ShopkeeperEcosystem'
import { Download } from './components/sections/Download'
import { InstallationGuide } from './components/sections/InstallationGuide'
import { FAQ } from './components/sections/FAQ'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AppShowcase />
        <HowItWorks />
        <Features />
        <LocationDiscovery />
        <NearbyStores />
        <ProductDiscovery />
        <ShopkeeperEcosystem />
        <Download />
        <InstallationGuide />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
