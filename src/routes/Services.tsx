import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion'
import {  Award } from 'lucide-react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

const Services = () => {
  const services: Array<{
    title: string
    description: string
    shortDesc: string
    icon: string
    logo: string
    color: string
    link: string
    features: string[]
    stats: Record<string, string>
  }> = [
    {
      title: 'Marketing, Sales & Distribution',
      description: 'End-to-end solutions from strategy to shelf, driving brand growth and market penetration across Africa.',
      shortDesc: 'Brand growth & market penetration',
      icon: 'marketing', // Will map to logo image
      logo: '/images/services/marketing-icon.png',
      color: '#01A5F9',
      link: '/services/marketing-sales',
      features: ['Marketing Strategy', 'Brand Development', 'Distribution Network', 'Digital Marketing'],
      stats: { clients: '50+', reach: '5 Countries' }
    },
    {
      title: 'Haulage, Logistics & Supply Chain',
      description: 'Reliable transportation and warehousing solutions ensuring your goods reach their destination safely and efficiently.',
      shortDesc: 'Efficient supply chain solutions',
      icon: 'logistics',
      logo: '/images/services/logistics-icon.png',
      color: '#10B981',
      link: '/services/haulage-logistics',
      features: ['Transportation', 'Warehousing', 'Freight Forwarding', 'Last-Mile Delivery'],
      stats: { fleet: '100+', routes: 'Pan-African' }
    },
    {
      title: 'Custom Clearing & Forwarding',
      description: 'Expert customs brokerage and clearance services streamlining your import-export operations across land, air, and sea.',
      shortDesc: 'Seamless import-export',
      icon: 'customs',
      logo: '/images/services/customs-icon.png',
      color: '#E56732',
      link: '/services/custom-clearing',
      features: ['Import/Export Services', 'Cargo Insurance', 'Documentation', 'Compliance'],
      stats: { clearances: '1000+', borders: 'Air, Land, Sea' }
    },
    {
      title: 'Agro-Allied Services',
      description: 'Comprehensive agricultural supply chain solutions from farm to market, supporting food security and economic growth.',
      shortDesc: 'Farm to market solutions',
      icon: 'agriculture',
      logo: '/images/services/agro-icon.png',
      color: '#F59E0B',
      link: '/services/agro-allied',
      features: ['Crop Production', 'Livestock', 'Agro Processing', 'Export Services'],
      stats: { farms: '30+', products: '50+ Commodities' }
    },
    {
      title: 'Real Estate',
      description: 'Property development, sales, and leasing services across prime African locations with focus on quality and value.',
      shortDesc: 'Premium property solutions',
      icon: 'realestate',
      logo: '/images/services/realestate-icon.png',
      color: '#956582',
      link: '/services/real-estate',
      features: ['Property Development', 'Sales & Leasing', 'Investment Advisory', 'Facility Management'],
      stats: { projects: '15+', locations: '3 Countries' }
    },
    {
      title: 'Consultancy Services',
      description: 'Strategic business consulting for market entry, operations optimization, and organizational development across Africa.',
      shortDesc: 'Expert business guidance',
      icon: 'consultancy',
      logo: '/images/services/consultancy-icon.png',
      color: '#6366F1',
      link: '/services/consultancy',
      features: ['Business Strategy', 'Market Entry', 'Operations', 'Training'],
      stats: { clients: '100+', success: '95%' }
    },
  ]

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

// const Services = () => {
//   const services = [
//     {
//       title: 'Marketing, Sales & Distribution',
//       description: 'Comprehensive marketing strategies, brand development, and distribution network management across Africa.',
//       icon: TrendingUp,
//       link: '/services/marketing-sales',
//     },
//     {
//       title: 'Haulage & Logistics',
//       description: 'Professional freight forwarding, transportation, warehousing, and supply chain optimization services.',
//       icon: Truck,
//       link: '/services/haulage-logistics',
//     },
//     {
//       title: 'Custom Clearing',
//       description: 'Expert customs brokerage, documentation, and compliance services for seamless international trade.',
//       icon: FileCheck,
//       link: '/services/custom-clearing',
//     },
//     {
//       title: 'Agro-Allied Services',
//       description: 'End-to-end agricultural solutions including sourcing, processing, storage, and distribution.',
//       icon: Sprout,
//       link: '/services/agro-allied',
//     },
//     {
//       title: 'Real Estate',
//       description: 'Property development, investment advisory, sales, and property management services.',
//       icon: HomeIcon,
//       link: '/services/real-estate',
//     },
//     {
//       title: 'Consultancy Services',
//       description: 'Strategic business consulting for market entry, operational excellence, and organizational transformation.',
//       icon: Briefcase,
//       link: '/services/consultancy',
//     },
//   ]

  return (
    <div>
      <Hero page="services" />
      
       {/* Services Section */}
  <section className="section bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern-dots opacity-5" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Award className="w-4 h-4" />
              <span>What We Offer</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-primary mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Services
            </h2>
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Comprehensive solutions designed to drive your business forward across the African continent
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                shortDesc={service.shortDesc}
                logo={service.logo}
                color={service.color}
                link={service.link}
                features={service.features}
                stats={service.stats}
                index={index}
              />
            ))}
          </motion.div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline-primary"
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>


    {/* Why Choose Us */}
      <section className="section bg-white">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 
        className="text-4xl font-bold text-[#01A5F9] mb-4"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Why Choose GVANY?
      </h2>
      <p 
        className="text-xl text-gray-600"
        style={{ fontFamily: 'var(--font-primary)' }}
      >
        Your trusted partner for sustainable growth in Africa
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        { title: 'Local Expertise', desc: 'Deep understanding of African markets and cultural nuances' },
        { title: 'Proven Track Record', desc: 'Years of successful operations across multiple countries' },
        { title: 'Integrated Solutions', desc: 'End-to-end services covering all aspects of your business' },
        { title: 'Reliable Network', desc: 'Extensive partnerships and distribution channels' },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-50 p-6 rounded-lg"
        >
          <h3 
            className="text-xl font-bold text-[#01A5F9] mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {item.title}
          </h3>
          <p 
            className="text-gray-600"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}
 

export default Services
