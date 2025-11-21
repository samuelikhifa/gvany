import ServiceHero from '../components/ServiceHero'
import WhoWeHelp from '../components/WhoWeHelp'

import CTASection from '../components/CTASection'

const RealEstate = () => {
  const whoWeHelpItems = [
    "Investors seeking lucrative real estate opportunities in Africa.",
    "Developers looking for land acquisition and project management support.",
    "Individuals and families searching for residential or commercial properties.",
    "Corporate clients requiring office space and facility management.",
    "Property owners seeking professional leasing and management services.",
    "International clients exploring African real estate markets.",
  ]

 
  return (
    <div className="pt-20">
      <ServiceHero
        title="Real Estate"
        subtitle="Building Prosperity Through Strategic Property Solutions"
        image="/images/realestate-hero.jpg"
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
              <span className="text-gray-700">Property development and construction</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Land acquisition and due diligence</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Property sales and leasing</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Real estate investment advisory</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Property and facility management</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Property valuation and appraisal</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Tenant placement and lease administration</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Property maintenance and renovation</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Real estate market research and analysis</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Joint venture and partnership facilitation</span>
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

export default RealEstate
