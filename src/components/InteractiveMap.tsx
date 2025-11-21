import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {  Handshake, Building2,  Globe  } from 'lucide-react'

// Type definition for location data
interface Location {
  id: number
  name: string
  city: string
  position: { top: string; left: string }
  color: string
  flag: string
  type: string
  phone: string
  email: string
  presence: {
    partners: string
    customers: string
    industries: string[]
  }
  services: string[]
  description: string
  highlights: string[]
}

const InteractiveMap = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Updated location data showing partners and customers
  const locations: Location[] = [
    {
      id: 1,
      name: 'Nigeria',
      city: 'Lagos',
      position: { top: '44%', left: '48%' },
      color: '#01A5F9',
      flag: '🇳🇬',
      type: 'Headquarters & Operations',
      phone: '+234 xxx xxx xxxx',
      email: 'info@gvany.com',
      presence: {
        partners: '25+',
        customers: '150+',
        industries: ['Manufacturing', 'FMCG', 'Agriculture', 'Retail', 'Construction']
      },
      services: ['Marketing & Distribution', 'Haulage & Logistics', 'Custom Clearing', 'Agro-Allied', 'Real Estate', 'Consultancy'],
      description: 'Our headquarters and primary operation center. We maintain strong partnerships with major distributors, manufacturers, and logistics providers across Nigeria.',
      highlights: [
        'Direct operations and service delivery',
        'Established distribution network',
        'Strategic partnerships with key industry players'
      ]
    },
    {
      id: 2,
      name: 'Ghana',
      city: 'Accra',
      position: { top: '48%', left: '46.5%' },
      color: '#E56732',
      flag: '🇬🇭',
      type: 'Partner Network',
      phone: '+233 xxx xxx xxxx',
      email: 'ghana@gvany.com',
      presence: {
        partners: '15+',
        customers: '80+',
        industries: ['FMCG', 'Agriculture', 'Retail', 'Manufacturing']
      },
      services: ['Marketing & Distribution', 'Haulage & Logistics', 'Agro-Allied'],
      description: 'Strong partner network in Ghana supporting marketing, distribution, and logistics operations across the country.',
      highlights: [
        'Trusted local partners for distribution',
        'Growing customer base in key sectors',
        'Cross-border logistics support'
      ]
    },
    {
      id: 3,
      name: 'Ivory Coast',
      city: 'Abidjan',
      position: { top: '49%', left: '45%' },
      color: '#956582',
      flag: '🇨🇮',
      type: 'Partner Network',
      phone: '+225 xxx xxx xxxx',
      email: 'ivorycoast@gvany.com',
      presence: {
        partners: '12+',
        customers: '60+',
        industries: ['Agriculture', 'FMCG', 'Export/Import']
      },
      services: ['Marketing & Distribution', 'Custom Clearing', 'Consultancy'],
      description: 'Strategic partnerships in Francophone West Africa, facilitating trade and distribution for our clients.',
      highlights: [
        'Francophone market expertise',
        'Import/export facilitation',
        'Agricultural commodity trading'
      ]
    },
    {
      id: 4,
      name: 'Kenya',
      city: 'Nairobi',
      position: { top: '52%', left: '60%' },
      color: '#10B981',
      flag: '🇰🇪',
      type: 'Partner Network',
      phone: '+254 xxx xxx xxxx',
      email: 'kenya@gvany.com',
      presence: {
        partners: '18+',
        customers: '95+',
        industries: ['Agriculture', 'Logistics', 'Real Estate', 'Manufacturing']
      },
      services: ['Haulage & Logistics', 'Agro-Allied', 'Real Estate'],
      description: 'Extensive partner network in East Africa supporting logistics, agriculture, and real estate development.',
      highlights: [
        'East African logistics hub',
        'Agricultural value chain partnerships',
        'Regional distribution network'
      ]
    },
    {
      id: 5,
      name: 'Uganda',
      city: 'Kampala',
      position: { top: '51%', left: '58%' },
      color: '#F59E0B',
      flag: '🇺🇬',
      type: 'Partner Network',
      phone: '+256 xxx xxx xxxx',
      email: 'uganda@gvany.com',
      presence: {
        partners: '10+',
        customers: '45+',
        industries: ['Agriculture', 'FMCG', 'Distribution']
      },
      services: ['Marketing & Distribution', 'Agro-Allied'],
      description: 'Growing partner relationships supporting market penetration and agricultural operations in Uganda.',
      highlights: [
        'Agricultural product distribution',
        'Emerging market opportunities',
        'Cross-border trade facilitation'
      ]
    }
  ]

  const handleLocationClick = (location: Location) => {
    setActiveLocation(location)
    setIsModalOpen(true)
  }

 

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])


  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#01A5F9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E56732]/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
            <Globe className="w-4 h-4" />
            <span>Pan-African Network</span>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-primary mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Partner Network
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Strategic partnerships across <span className="font-bold text-[#01A5F9]">5 African countries</span>, connecting businesses and enabling growth
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto mb-12"
        >
          {/* Map Background Card */}
          <div className="card card-hover bg-white p-4 md:p-8 lg:p-12">
            <div className="relative w-full aspect-[4/5] md:aspect-[5/4]">
              {/* Detailed Africa SVG Map */}
              <svg 
                viewBox="0 0 500 600" 
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))' }}
              >
                {/* Africa Continent Shape */}
                <path
                  d="M 250 50 
                     L 280 60 L 310 80 L 330 100 L 345 130 L 350 160
                     L 355 190 L 360 220 L 365 250 L 368 280
                     L 365 310 L 358 340 L 350 370 L 340 400
                     L 325 430 L 305 460 L 280 490 L 250 510
                     L 220 490 L 195 460 L 175 430 L 160 400
                     L 150 370 L 142 340 L 135 310 L 132 280
                     L 135 250 L 140 220 L 145 190 L 150 160
                     L 155 130 L 170 100 L 190 80 L 220 60 Z"
                  fill="url(#mapGradient)"
                  stroke="#01A5F9"
                  strokeWidth="2"
                  opacity="0.15"
                />
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#01A5F9" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#956582" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#E56732" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#01A5F9" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#E56732" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* Headquarters to all partner locations */}
                {locations.slice(1).map((location, index) => (
                  <motion.line
                    key={`line-${location.id}`}
                    x1="48%"
                    y1="44%"
                    x2={location.position.left}
                    y2={location.position.top}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                  />
                ))}
              </svg>

              {/* Location Pins */}
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-full z-10"
                  style={{ top: location.position.top, left: location.position.left }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.3 + index * 0.15, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => handleLocationClick(location)}
                >
                  {/* Pin Container */}
                  <motion.div
                    animate={{
                      y: hoveredLocation === location.id ? -5 : 0,
                    }}
                    className="relative cursor-pointer group"
                  >
                    {/* Pulsing Ring Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: index * 0.3,
                      }}
                      className="absolute inset-0 rounded-full"
                      style={{ 
                        backgroundColor: location.color,
                        filter: 'blur(4px)'
                      }}
                    />

                    {/* Pin Icon */}
                    <div 
                      className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: location.color }}
                    >
                      {location.id === 1 ? (
                        <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white" fill="white" />
                      ) : (
                        <Handshake className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      )}
                    </div>

                    {/* Hover Tooltip */}
                    <AnimatePresence>
                      {hoveredLocation === location.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 whitespace-nowrap z-20"
                        >
                          <div 
                            className="px-4 py-2 rounded-lg shadow-xl text-white font-semibold text-sm"
                            style={{ backgroundColor: location.color }}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{location.flag}</span>
                              <span>{location.city}</span>
                            </div>
                            <div className="text-xs opacity-90 mt-1">{location.type}</div>
                            {/* Tooltip Arrow */}
                            <div 
                              className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                              style={{
                                borderLeft: '6px solid transparent',
                                borderRight: '6px solid transparent',
                                borderTop: `6px solid ${location.color}`
                              }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Location Label (Desktop Only) */}
                    <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                      <div className="text-xs font-bold whitespace-nowrap" style={{ color: location.color }}>
                        {location.name}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

      
        </motion.div>

 

  
      </div>

      
    </section>
  )
}

export default InteractiveMap