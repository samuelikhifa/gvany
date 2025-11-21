import ServiceHero from '../components/ServiceHero'
import WhoWeHelp from '../components/WhoWeHelp'

import CTASection from '../components/CTASection'

const CustomClearing = () => {
  const whoWeHelpItems = [
    "Importers and exporters navigating complex customs regulations.",
    "Businesses expanding into new African markets and requiring compliance support.",
    "Companies seeking to reduce customs clearance delays and costs.",
    "Manufacturers importing raw materials or exporting finished goods.",
    "E-commerce platforms handling cross-border shipments.",
    "Organizations requiring expert guidance on tariff classifications and duty calculations.",
  ]

  
  return (
    <div className="pt-20">
      <ServiceHero
        title="Custom Clearing"
        subtitle="Simplifying International Trade, One Shipment at a Time"
        image="/images/customs-hero.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <WhoWeHelp items={whoWeHelpItems} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">What We Do</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg">
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Customs brokerage and clearance</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Documentation preparation and verification</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Tariff classification and valuation</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Duty and tax calculation</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Compliance advisory and risk management</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Import and export licensing support</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Liaison with customs authorities</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Trade agreement utilization (AfCFTA, etc.)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Pre-shipment inspection coordination</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Post-clearance support and audit defense</span>
            </li>
          </ul>
        </div>
      </section>

      

      <CTASection page="home"
        
      />
    </div>
  )
}

export default CustomClearing
