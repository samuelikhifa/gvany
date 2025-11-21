import ServiceHero from '../components/ServiceHero'
import WhoWeHelp from '../components/WhoWeHelp'

import CTASection from '../components/CTASection'

const AgroAllied = () => {
  const whoWeHelpItems = [
    "Farmers seeking access to quality inputs and modern farming techniques.",
    "Agricultural cooperatives looking for processing and marketing support.",
    "Food manufacturers requiring reliable supply of agricultural commodities.",
    "Exporters needing aggregation and quality assurance services.",
    "Investors exploring opportunities in African agriculture.",
    "Development organizations partnering on agricultural value chain projects.",
  ]

  
  return (
    <div className="pt-20">
      <ServiceHero
        title="Agro-Allied Services"
        subtitle="Cultivating Growth from Farm to Market"
        image="/images/agro-hero.jpg"
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
              <span className="text-gray-700">Agricultural input supply and distribution</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Crop aggregation and procurement</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Post-harvest handling and storage</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Primary processing and value addition</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Quality assurance and certification support</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Market linkage and offtake arrangements</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Farmer training and extension services</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Cooperative organization and management</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Agricultural finance facilitation</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl font-bold mt-1">•</span>
              <span className="text-gray-700">Export facilitation for agricultural products</span>
            </li>
          </ul>
        </div>
      </section>

     

      <CTASection page="home"
      
      />
    </div>
  )
}

export default AgroAllied
