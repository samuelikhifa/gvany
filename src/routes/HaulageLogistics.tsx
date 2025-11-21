import ServiceHero from '../components/ServiceHero'
import WhoWeHelp from '../components/WhoWeHelp'

import CTASection from '../components/CTASection'

const HaulageLogistics = () => {
  const whoWeHelpItems = [
    "Importers and exporters requiring reliable freight forwarding and cargo handling.",
    "Manufacturers needing warehousing and inventory management solutions.",
    "Retailers seeking efficient last-mile delivery services.",
    "E-commerce businesses requiring fulfillment and distribution support.",
    "Companies looking to optimize their supply chain and reduce logistics costs.",
    "Businesses needing specialized transportation for fragile or temperature-sensitive goods.",
  ]

 
  return (
    <div className="pt-20">
      <ServiceHero
        title="Haulage & Logistics"
        subtitle="Moving Your Business Forward, Every Mile of the Way"
        image="/images/logistics-hero.jpg"
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
              <span className="text-gray-700">Freight forwarding and cargo handling</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Warehousing and inventory management</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Transportation (road, rail, air, and sea)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Supply chain optimization</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Last-mile delivery solutions</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Cold chain logistics for temperature-sensitive products</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Fleet management and tracking</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Cross-border logistics coordination</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Packaging and labeling services</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Real-time shipment tracking and reporting</span>
            </li>
          </ul>
        </div>
      </section>

      <CTASection
        page="home"
      />
    </div>
  )
}

export default HaulageLogistics
