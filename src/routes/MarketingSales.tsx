import ServiceHero from '../components/ServiceHero'
import WhoWeHelp from '../components/WhoWeHelp'

import CTASection from '../components/CTASection'

const MarketingSales = () => {
  const whoWeHelpItems = [
    "Manufacturers needing to bring products to market or expand distribution.",
    "Companies seeking improved brand visibility, retail presence, and demand generation.",
    "Firms looking for demand generation, lead nurturing, and channel marketing.",
    "Businesses requiring sales force management and performance tracking.",
    "Organizations needing market research and consumer insights.",
    "Brands wanting to establish or strengthen their presence across Africa.",
  ]

  
  return (
    <div className="pt-20">
      <ServiceHero
        title="Marketing, Sales & Distribution"
        subtitle="From Strategy to Shelf – We Make It Happen"
        image="/images/marketing-hero.jpg"
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
              <span className="text-gray-700">Marketing strategy and planning</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Brand development and creative services</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Advertising and media buying</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Sales force deployment and management</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Distribution network development</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Retail merchandising and point-of-sale activation</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Market research and consumer insights</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Digital marketing and e-commerce enablement</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Trade marketing and channel partner management</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Performance analytics and reporting</span>
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

export default MarketingSales
