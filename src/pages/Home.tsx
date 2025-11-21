import { motion } from 'framer-motion'
import { Target, Eye, Globe, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import InteractiveMap from '../components/InteractiveMap'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO';

// import CTASection from '../components/CTASection'

const Home = () => {
  const services: Array<{
    title: string
    description: string
    shortDesc: string
    icon: string
    logo: string
    color: string
    link: string
    features: string[]
    // stats: Record<string, string>
  }> = [
{
  title: 'Beverages ',
  description: 'Focused on premium beverage production, branding, and distribution. We craft high-quality drinks that blend African heritage with global standards, ensuring excellence from factory to shelf.',
  shortDesc: 'Premium Beverages • Production • Branding • Distribution',
  icon: 'beverages',
  logo: '/images/services/lantique-logo.png',        // Update path when you add the logo
  color: '#D4AF37',                                  // Elegant gold – fits luxury beverage branding (change if you have official color)
  link: '/beverages',
  features: [
    'Beverage Production',
    'Brand Development & Packaging',
    'Nationwide Distribution',
    'Export-Ready Standards',
    'Quality Assurance & Compliance'
  ],
},
    {
      title: 'Haulage, Logistics & Supply Chain',
      description: 'Reliable transportation and warehousing solutions ensuring your goods reach their destination safely and efficiently.',
      shortDesc: 'Efficient supply chain solutions',
      icon: 'logistics',
      logo: '/images/services/logistics-icon.png',
      color: '#10B981',
      link: '/haulage-logistics',
      features: ['Transportation', 'Warehousing', 'Freight Forwarding', 'Last-Mile Delivery'],
      // stats: { fleet: '100+', routes: 'Pan-African' }
    },
    {
      title: 'Custom Clearing & Forwarding',
      description: 'Expert customs brokerage and clearance services streamlining your import-export operations across land, air, and sea.',
      shortDesc: 'Seamless import-export',
      icon: 'customs',
      logo: '/images/services/customs-icon.png',
      color: '#E56732',
      link: '/custom-clearing',
      features: ['Import/Export Services', 'Cargo Insurance', 'Documentation', 'Compliance'],
      // stats: { clearances: '1000+', borders: 'Air, Land, Sea' }
    },
    {
      title: 'Agro-Allied Services',
      description: 'Comprehensive agricultural supply chain solutions from farm to market, supporting food security and economic growth.',
      shortDesc: 'Farm to market solutions',
      icon: 'agriculture',
      logo: '/images/services/agro-icon.png',
      color: '#F59E0B',
      link: '/agro-allied',
      features: ['Crop Production', 'Livestock', 'Agro Processing', 'Export Services'],
      // stats: { farms: '30+', products: '50+ Commodities' }
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
      // stats: { projects: '15+', locations: '3 Countries' }
    },
    {
      title: 'Consultancy Services',
      description: 'Strategic business consulting for market entry, operations optimization, and organizational development across Africa.',
      shortDesc: 'Expert business guidance',
      icon: 'consultancy',
      logo: '/images/services/consultancy-icon.png',
      color: '#6366F1',
      link: '/consultancy',
      features: ['Business Strategy', 'Market Entry', 'Operations', 'Training'],
      // stats: { clients: '100+', success: '95%' }
    },
  ]


  // const coreValues = [
  //   {
  //     icon: Target,
  //     title: 'Excellence',
  //     description: 'Committed to delivering superior quality in every project and service'
  //   },
  //   {
  //     icon: Users,
  //     title: 'Partnership',
  //     description: 'Building lasting relationships based on trust and mutual growth'
  //   },
  //   {
  //     icon: Award,
  //     title: 'Integrity',
  //     description: 'Operating with transparency and ethical standards in all dealings'
  //   },
  //   {
  //     icon: TrendingUpIcon,
  //     title: 'Innovation',
  //     description: 'Embracing modern solutions to drive business transformation'
  //   }
  // ]

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

  return (
    <>
      <SEO
        title="GVANY Sales & Distribution | Adding Value Across Africa"
        description="Leading African conglomerate delivering excellence in Marketing & Sales, Haulage & Logistics, Custom Clearing, Real Estate, Agro-Allied Services and Consultancy."
        canonical="/"
      />
    <div>
      {/* Hero Section */}
      <Hero page="home" />

      {/* Vision, Mission, Presence Section */}
      <section className="section-sm bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#01A5F9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E56732]/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Globe className="w-4 h-4" />
              <span>Our Foundation</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-primary mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Building Africa's Future Together
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card card-hover group"
            >
              <div className="p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#01A5F9] to-[#33B6FA] flex items-center justify-center shadow-lg"
                >
                  <Eye className="h-8 w-8 text-white" />
                </motion.div>
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leader in our chosen field of business, ensuring great value is added to owners, operators, and customer's interests across Africa.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card card-hover group"
            >
              <div className="p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E56732] to-[#ED8559] flex items-center justify-center shadow-lg"
                >
                  <Target className="h-8 w-8 text-white" />
                </motion.div>
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver quality projects and products while rendering the best services to all our customers across the globe with professionalism and excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card card-hover group"
            >
              <div className="p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#956582] to-[#A97E98] flex items-center justify-center shadow-lg"
                >
                  <Globe className="h-8 w-8 text-white" />
                </motion.div>
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Presence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategically positioned across Nigeria, Kenya, Uganda, Ghana, and Ivory Coast with a growing network of partners and customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-2"
          >
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline-primary"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

      {/* Core Values Section */}
      {/* <section className="section-sm bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 badge badge-secondary mb-4">
              <Award className="w-4 h-4" />
              <span>What Drives Us</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Core <span className="text-gradient-secondary">Values</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#E56732]/10 mb-4">
                    <Icon className="w-7 h-7 text-[#E56732]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section> */}

      {/* Interactive Map */}
      <InteractiveMap />

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
                // stats={service.stats}
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

      {/* CTA Section */}
      <CTASection page="home"
        // title="Ready to Transform Your Business?"
        // description="Partner with GVANY and unlock the potential of the African market"
        // buttonText="Get Started Today"
        // link="/contact"
      />
    </div>
    </>
  )
}

export default Home