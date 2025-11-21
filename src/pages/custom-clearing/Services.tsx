import { motion } from 'framer-motion'
import { Ship, Plane, Package, Truck, Warehouse, FileCheck, Clock, Shield, Globe, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import LyxHero from './components/LyxHero'
import { useState } from 'react'

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null)

  const services = [
    {
      id: 'customs-clearance',
      icon: FileCheck,
      title: 'Customs Clearance',
      description: 'Expert customs brokerage and clearance services ensuring smooth cross-border trade with full regulatory compliance.',
      fullDescription: 'Our customs clearance team handles all documentation, tariff classifications, and regulatory requirements to ensure your cargo moves seamlessly across borders. We maintain strong relationships with customs authorities across Africa.',
      image: '/images/services/customs-clearance.jpg',
      features: [
        'Import & Export Documentation',
        'Tariff Classification',
        'Duty Calculation & Payment',
        'Regulatory Compliance',
        'Fast-Track Processing',
        'Customs Consulting'
      ],
      benefits: [
        'Reduced clearance times',
        'Cost optimization',
        'Risk mitigation',
        'Expert guidance'
      ]
    },
    {
      id: 'sea-freight',
      icon: Ship,
      title: 'Sea Freight',
      description: 'Comprehensive ocean freight solutions for bulk and containerized cargo to destinations worldwide.',
      fullDescription: 'Our sea freight services provide cost-effective solutions for large volume shipments. With partnerships across major shipping lines, we ensure reliable and economical ocean transport for your cargo.',
      image: '/images/services/sea-freight.jpg',
      features: [
        'Full Container Load (FCL)',
        'Less than Container Load (LCL)',
        'Bulk Cargo Handling',
        'Roll-on/Roll-off (RoRo)',
        'Port-to-Port Service',
        'Door-to-Door Delivery'
      ],
      benefits: [
        'Cost-effective shipping',
        'Global coverage',
        'Flexible scheduling',
        'Cargo tracking'
      ]
    },
    {
      id: 'air-freight',
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services for time-sensitive shipments with priority handling.',
      fullDescription: 'When time is critical, our air freight services deliver. We work with major airlines to provide expedited shipping solutions for urgent cargo, ensuring your goods reach their destination quickly and safely.',
      image: '/images/services/air-freight.jpg',
      features: [
        'Express Air Freight',
        'Standard Air Cargo',
        'Consolidated Shipments',
        'Dangerous Goods Handling',
        'Temperature-Controlled Transport',
        'Airport-to-Airport Service'
      ],
      benefits: [
        'Fastest delivery times',
        'Global network',
        'Real-time tracking',
        'Priority handling'
      ]
    },
    {
      id: 'land-transport',
      icon: Truck,
      title: 'Land Transport',
      description: 'Efficient road transport solutions across African borders and regions with reliable delivery.',
      fullDescription: 'Our land transport network covers major routes across Africa, providing dependable road freight services. From cross-border trucking to local distribution, we ensure your cargo moves efficiently.',
      image: '/images/services/land-transport.jpg',
      features: [
        'Cross-Border Trucking',
        'Local Distribution',
        'Heavy Cargo Transport',
        'Refrigerated Transport',
        'Specialized Equipment',
        'Last-Mile Delivery'
      ],
      benefits: [
        'Flexible routing',
        'Direct delivery',
        'Cost efficiency',
        'Real-time updates'
      ]
    },
    {
      id: 'warehousing',
      icon: Warehouse,
      title: 'Warehousing & Storage',
      description: 'Secure storage and distribution facilities for your cargo with modern inventory management.',
      fullDescription: 'Our strategically located warehouses provide secure storage solutions with advanced inventory management systems. We offer flexible storage options tailored to your business needs.',
      image: '/images/services/warehousing.jpg',
      features: [
        'Secure Storage Facilities',
        'Inventory Management',
        'Order Fulfillment',
        'Distribution Services',
        'Temperature-Controlled Storage',
        'Stock Monitoring'
      ],
      benefits: [
        'Strategic locations',
        '24/7 security',
        'Flexible terms',
        'Real-time inventory'
      ]
    },
    {
      id: 'freight-forwarding',
      icon: Package,
      title: 'Freight Forwarding',
      description: 'End-to-end logistics management for seamless cargo movement across all transport modes.',
      fullDescription: 'Our freight forwarding expertise combines all transport modes to create optimal logistics solutions. We manage every aspect of your shipment from origin to destination.',
      image: '/images/services/freight-forwarding.jpg',
      features: [
        'Multimodal Transport',
        'Route Optimization',
        'Documentation Management',
        'Cargo Insurance',
        'Supply Chain Consulting',
        'Project Cargo Handling'
      ],
      benefits: [
        'Single point of contact',
        'Cost optimization',
        'Risk management',
        'Expert coordination'
      ]
    }
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround times for customs clearance and freight forwarding'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Full compliance with international trade regulations and standards'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive partnerships across Africa and worldwide destinations'
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Competitive rates without compromising on service quality'
    }
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

  return (
    <div>
      {/* Hero Section */}
      <LyxHero page="services" />

      {/* Services Grid Section */}
      <section className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Package className="w-4 h-4" />
              <span>What We Offer</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our <span className="text-gradient-primary">Services</span>
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon
              const isActive = activeService === service.id
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                  whileHover={{ y: -8 }}
                  className="card card-hover group cursor-pointer"
                >
                  <div className="p-6">
                    {/* Service Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0188F4] to-[#0272CC] flex items-center justify-center flex-shrink-0"
                        animate={{ 
                          scale: isActive ? 1.1 : 1,
                          rotate: isActive ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 
                          className="text-xl font-bold text-gray-900 group-hover:text-[#0188F4] transition-colors"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p 
                      className="text-gray-600 leading-relaxed mb-4"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {service.description}
                    </p>

                    {/* View Details Link */}
                    {/* <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-[#0188F4] font-semibold hover:gap-3 transition-all"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link> */}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>Our Advantages</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Why Choose <span className="text-gradient-primary">Lyx</span>?
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Your trusted partner for seamless logistics and customs solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center p-6"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E5F4FF] mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-[#0188F4]" />
                  </motion.div>
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sm bg-gradient-to-br from-[#0188F4] to-[#0272CC] relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-diagonal opacity-10" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ready to Streamline Your Logistics?
              </h2>
              <p 
                className="text-lg text-white/90 mb-8"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Get in touch with our team for a customized logistics solution
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/custom-clearing/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary w-full sm:w-auto"
                  >
                    <span>Contact Us Today</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
                <a href="tel:+234xxxxxxxxxx">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#0188F4] w-full sm:w-auto"
                  >
                    Call Us Now
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services