import ServiceHero from '../components/ServiceHero'
import WhoWeHelp from '../components/WhoWeHelp'

import CTASection from '../components/CTASection'

const Consultancy = () => {
  const whoWeHelpItems = [
    "International companies entering African markets for the first time.",
    "Businesses seeking to optimize operations and improve efficiency.",
    "Organizations undergoing transformation or restructuring.",
    "SMEs looking to scale and professionalize their operations.",
    "Investors conducting due diligence on African opportunities.",
    "Government agencies and development partners on economic development programs.",
  ]

  
  return (
    <div className="pt-20">
      <ServiceHero
        title="Consultancy Services"
        subtitle="Strategic Insights for Sustainable Growth"
        image="/images/consultancy-hero.jpg"
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
              <span className="text-gray-700">Market entry strategy and feasibility studies</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Business planning and financial modeling</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Organizational design and restructuring</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Operations optimization and process improvement</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Change management and transformation support</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Due diligence and investment advisory</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Training and capacity building</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Performance management system design</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Risk management and compliance advisory</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Strategic partnerships and alliance facilitation</span>
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

export default Consultancy
