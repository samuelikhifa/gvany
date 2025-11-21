
import { Ship, FileCheck, Globe, Award, Users, Target } from 'lucide-react'
import LyxHero from './components/LyxHero'
import {CTASection }from './components/CTASection'
// import { CTASection } from './components/CTASection'
import { motion} from 'framer-motion'
import SEO from '@/components/SEO'
const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering superior service in every shipment'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships with our clients'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Operating with transparency and ethical standards'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing modern logistics solutions'
    }
  ]

  return (
    <>
    <SEO
  title="About Adret Custom Clearing | GVANY"
  description="Learn about Adret – GVANY’s dedicated customs and freight forwarding division serving the entire African continent."
  canonical="/custom-clearing/about"
/>
    <div>
      <LyxHero page="about" />

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                About <span className="text-gradient-primary">Lyx Clearing & Forwarding</span>
              </h2>
              <p 
                className="text-lg text-gray-700 leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Lyx Clearing & Forwarding Co. Ltd specializes in customs clearing and freight forwarding services, handling documentation and logistics to guarantee smooth cross-border trade across Africa.
              </p>
              <p 
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                As a proud member of the GVANY family, we bring years of expertise, reliability, and a commitment to excellence in every shipment we handle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section pt-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What We <span className="text-gradient-primary">Do</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: FileCheck,
                title: 'Customs Clearing',
                description: 'Expert customs brokerage and clearance services ensuring compliance with all regulations'
              },
              {
                icon: Ship,
                title: 'Freight Forwarding',
                description: 'Comprehensive air, sea, and land freight solutions for all your cargo needs'
              },
              {
                icon: Globe,
                title: 'Cross-Border Trade',
                description: 'Seamless documentation and logistics management for international shipments'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E5F4FF] mb-4">
                    <Icon className="w-8 h-8 text-[#0188F4]" />
                  </div>
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-white pt-0">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Core <span className="text-gradient-primary">Values</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#E5F4FF] mb-4">
                    <Icon className="w-7 h-7 text-[#0188F4]" />
                  </div>
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {value.title}
                  </h3>
                  <p 
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* GVANY Connection */}
      <section className="section bg-gradient-to-br from-[#0188F4] to-[#0272CC] relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-diagonal opacity-10" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              A GVANY Company
            </h2>
            <p 
              className="text-lg text-white/90 leading-relaxed"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              As part of GVANY Sales & Distribution Company Limited, we leverage the strength and network of a trusted African conglomerate to deliver exceptional logistics and customs clearing services across the continent.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection page="about" />
    </div>
    </>
  )
}

export default About