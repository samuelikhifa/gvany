import { motion } from 'framer-motion'
import { Megaphone, Target, ShoppingCart, BarChart3, Users, TrendingUp,  ArrowRight, Zap, Award } from 'lucide-react'

import HLHero from './components/HLHero'
import { CTASection } from './components/CTASection'
import { useState } from 'react'

const HaulageLogisticsServices = () => {
  const [activeService, setActiveService] = useState<string | null>(null)

  const services = [
    {
      id: 'marketing-strategy',
      icon: Megaphone,
      title: 'Marketing Strategy & Planning',
      description: 'Data-driven marketing strategies that position your brand for success in competitive African markets.',
      fullDescription: 'Our strategic marketing team develops comprehensive plans based on deep market research, consumer insights, and competitive analysis to ensure your brand stands out.',
      color: '#E03E7D',
      image: '/images/services/marketing-strategy.jpg',
      features: [
        'Market Research & Analysis',
        'Brand Positioning Strategy',
        'Campaign Planning & Execution',
        'Competitive Intelligence',
        'Consumer Behavior Analysis',
        'Marketing Budget Optimization'
      ],
      benefits: [
        'Clear market differentiation',
        'Targeted customer acquisition',
        'Optimized marketing spend',
        'Measurable ROI'
      ]
    },
    {
      id: 'brand-development',
      icon: Target,
      title: 'Brand Development & Creative',
      description: 'Create powerful brand identities that resonate with your target audience and drive lasting loyalty.',
      fullDescription: 'From brand strategy to visual identity, we craft compelling brand experiences that connect emotionally with your customers and stand the test of time.',
      color: '#01A5F9',
      image: '/images/services/brand-development.jpg',
      features: [
        'Brand Identity Design',
        'Visual Language Creation',
        'Brand Guidelines Development',
        'Messaging & Tone of Voice',
        'Brand Architecture',
        'Rebranding & Refresh'
      ],
      benefits: [
        'Strong brand recognition',
        'Customer loyalty building',
        'Premium positioning',
        'Consistent brand experience'
      ]
    },
    {
      id: 'sales-distribution',
      icon: ShoppingCart,
      title: 'Sales & Distribution',
      description: 'Optimize your sales channels and distribution networks for maximum market penetration and efficiency.',
      fullDescription: 'We design and manage distribution strategies that ensure your products reach the right customers at the right time through the right channels.',
      color: '#E03E7D',
      image: '/images/services/sales-distribution.jpg',
      features: [
        'Channel Strategy Development',
        'Distribution Network Design',
        'Partner Relationship Management',
        'Sales Process Optimization',
        'Territory Management',
        'Retail Execution'
      ],
      benefits: [
        'Expanded market reach',
        'Improved sell-through rates',
        'Reduced distribution costs',
        'Better channel performance'
      ]
    },
    {
      id: 'digital-marketing',
      icon: BarChart3,
      title: 'Digital Marketing & Performance',
      description: 'Leverage digital channels to reach and engage your customers effectively across all platforms.',
      fullDescription: 'Our digital experts create and execute integrated campaigns that drive traffic, engagement, and conversions across social media, search, and digital advertising.',
      color: '#01A5F9',
      image: '/images/services/digital-marketing.jpg',
      features: [
        'Social Media Marketing',
        'Search Engine Marketing (SEM)',
        'Content Marketing Strategy',
        'Email Marketing Campaigns'
        
      ],
      benefits: [
        'Enhanced online presence',
        'Increased engagement rates'
      ]
    },
    {
      id: 'sales-enablement',
      icon: Users,
      title: 'Sales Enablement & Training',
      description: 'Equip your sales team with tools, training, and resources to close deals efficiently and effectively.',
      fullDescription: 'We provide comprehensive sales enablement solutions including training programs, CRM setup, sales tools, and ongoing support to maximize your team\'s performance.',
      color: '#E03E7D',
      image: '/images/services/sales-enablement.jpg',
      features: [
        'Sales Team Training',
        'CRM Implementation',
        'Sales Collateral Development',
        'Performance Tracking Systems',
        
      ],
      benefits: [
        'Higher win rates',
        'Faster sales cycles',
        'Improved productivity',
        'Better forecast accuracy'
      ]
    },
    {
      id: 'analytics-insights',
      icon: TrendingUp,
      title: 'Analytics & Market Insights',
      description: 'Transform data into actionable insights that drive business growth and competitive advantage.',
      fullDescription: 'Our analytics team uses advanced tools and methodologies to uncover insights that inform strategic decisions and optimize marketing performance.',
      color: '#01A5F9',
      image: '/images/services/analytics-insights.jpg',
      features: [
        'Market Intelligence',
        'Campaign Performance Analysis',
        'Customer Journey Mapping',
        'ROI Measurement',
       
      ],
      benefits: [
        'Data-driven decisions',
        'Improved targeting',
        'Optimized campaigns',
        'Competitive intelligence'
      ]
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Deep dive into your business, market, and objectives'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Develop comprehensive marketing and distribution plans'
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Implement campaigns and activate distribution channels'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Measure, analyze, and continuously improve performance'
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
      <HLHero page="services" />

      {/* Services Grid */}
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
              <Award className="w-4 h-4" />
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
              Comprehensive marketing and distribution solutions for business growth
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
                  className="card card-hover group"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}08 0%, ${service.color}03 100%)`
                  }}
                >
                  <div className="p-6">
                    <motion.div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                      style={{ backgroundColor: service.color }}
                      animate={{ 
                        scale: isActive ? 1.1 : 1,
                        rotate: isActive ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E03E7D] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {service.title}
                    </h3>

                    <p 
                      className="text-gray-600 leading-relaxed mb-4"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {service.description}
                    </p>


                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      

      {/* Our Process */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Zap className="w-4 h-4" />
              <span>How We Work</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our <span className="text-gradient-secondary">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that drives results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="card p-6 text-center h-full">
                  <div 
                    className="text-6xl font-bold mb-4 opacity-20"
                    style={{ 
                      fontFamily: 'var(--font-display)',
                      color: index % 2 === 0 ? '#E03E7D' : '#01A5F9'
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection page="services" />
    </div>
  )
}

export default HaulageLogisticsServices