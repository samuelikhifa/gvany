import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

// Beverages - Barrel Import
import { Layout as BeveragesLayout, Home as BEHome, About as BEAbout, Services as BEServices, Contact as BEContact } from './pages/beverages/main'

// Haulage & Logistics - Barrel Import
import { Layout as HaulageLogisticsLayout, Home as HLHome, About as HLAbout, Services as HLServices, Contact as HLContact } from './pages/haulage-logistics/main'

// Custom Clearing - Barrel Import
import { Layout as CustomClearingLayout, Home as CCHome, About as CCAbout, Services as CCServices, Contact as CCContact } from './pages/custom-clearing/main'

// Agro-Allied - Barrel Import
import { Layout as AgroAlliedLayout, Home as AAHome, About as AAAbout, Services as AAServices, Contact as AAContact } from './pages/agro-allied/main'

// Real Estate - Barrel Import
import { Layout as RealEstateLayout, Home as REHome, About as REAbout, Services as REServices, Contact as REContact } from './pages/real-estate/main'

// Consultancy - Barrel Import
import { Layout as ConsultancyLayout, Home as ConHome, About as ConAbout, Services as ConServices, Contact as ConContact } from './pages/consultancy/main'

function App() {
  return (
    <Router>
      <Routes>
        {/* General Site - Uses MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        {/* Service: Beverages - Isolated Layout */}
        <Route path="/beverages" element={<BeveragesLayout />}>
          <Route index element={<BEHome />} />
          <Route path="about" element={<BEAbout />} />
          <Route path="services" element={<BEServices />} />
          <Route path="contact" element={<BEContact />} />
        </Route>

        {/* Service: Haulage & Logistics - Isolated Layout */}
        <Route path="/haulage-logistics" element={<HaulageLogisticsLayout />}>
          <Route index element={<HLHome />} />
          <Route path="about" element={<HLAbout />} />
          <Route path="services" element={<HLServices />} />
          <Route path="contact" element={<HLContact />} />
        </Route>

        {/* Service: Custom Clearing - Isolated Layout */}
        <Route path="/custom-clearing" element={<CustomClearingLayout />}>
          <Route index element={<CCHome />} />
          <Route path="about" element={<CCAbout />} />
          <Route path="services" element={<CCServices />} />
          <Route path="contact" element={<CCContact />} />
        </Route>

        {/* Service: Agro-Allied - Isolated Layout */}
        <Route path="/agro-allied" element={<AgroAlliedLayout />}>
          <Route index element={<AAHome />} />
          <Route path="about" element={<AAAbout />} />
          <Route path="services" element={<AAServices />} />
          <Route path="contact" element={<AAContact />} />
        </Route>

        {/* Service: Real Estate - Isolated Layout */}
        <Route path="/real-estate" element={<RealEstateLayout />}>
          <Route index element={<REHome />} />
          <Route path="about" element={<REAbout />} />
            <Route path="services" element={<REServices />} />
          <Route path="contact" element={<REContact />} />
        </Route>

        {/* Service: Consultancy - Isolated Layout */}
        <Route path="/consultancy" element={<ConsultancyLayout />}>
          <Route index element={<ConHome />} />
          <Route path="about" element={<ConAbout />} />
          <Route path="services" element={<ConServices />} />
          <Route path="contact" element={<ConContact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
