import { motion } from 'framer-motion'
import { FileCheck, Scale, AlertTriangle, Ban, Clock, Users } from 'lucide-react'
import Hero from '../components/Hero'

const Terms = () => {
  const sections = [
    {
      icon: FileCheck,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using GVANY\'s website and services, you accept and agree to be bound by these Terms of Service',
        'If you do not agree with any part of these terms, you must not use our services',
        'We reserve the right to modify these terms at any time with notice',
        'Your continued use of our services after changes constitutes acceptance of the new terms',
        'These terms apply to all visitors, users, and others who access our services'
      ]
    },
    {
      icon: Users,
      title: 'Use of Services',
      content: [
        'Our services are intended for business and commercial use',
        'You must be at least 18 years old to use our services',
        'You are responsible for maintaining the confidentiality of your account',
        'You agree to provide accurate, current, and complete information',
        'You must not use our services for any illegal or unauthorized purpose',
        'We reserve the right to refuse service to anyone for any reason'
      ]
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: [
        'All content on this website is owned by GVANY or its licensors',
        'You may not reproduce, distribute, or create derivative works without permission',
        'The GVANY name, logo, and all related marks are our trademarks',
        'Unauthorized use of our intellectual property may result in legal action',
        'You retain ownership of any content you submit through our services',
        'By submitting content, you grant us a license to use it for service provision'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitations of Liability',
      content: [
        'Our services are provided "as is" without warranties of any kind',
        'We are not liable for any indirect, incidental, or consequential damages',
        'We do not guarantee uninterrupted or error-free service',
        'Maximum liability shall not exceed the amount paid for our services',
        'We are not responsible for third-party content or external links',
        'Some jurisdictions do not allow limitation of liability, so these limitations may not apply'
      ]
    },
    {
      icon: Ban,
      title: 'Prohibited Activities',
      content: [
        'Violating any applicable laws or regulations',
        'Infringing on intellectual property rights',
        'Transmitting malicious code, viruses, or harmful components',
        'Attempting to gain unauthorized access to our systems',
        'Interfering with or disrupting our services',
        'Using automated systems to access our services without permission',
        'Impersonating others or providing false information',
        'Harassing, threatening, or defaming others'
      ]
    },
    {
      icon: Clock,
      title: 'Termination',
      content: [
        'We may terminate or suspend your access immediately, without prior notice',
        'Termination may occur for breach of these terms or for any other reason',
        'Upon termination, your right to use our services ceases immediately',
        'All provisions of these terms which should survive termination shall survive',
        'You may terminate your account at any time by contacting us',
        'Termination does not relieve you of obligations incurred before termination'
      ]
    }
  ]

  return (
    <div>
      <Hero page="terms" />

      <section className="section bg-white">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Terms of <span className="text-gradient-primary">Service</span>
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Please read these Terms of Service carefully before using GVANY's services. 
              These terms govern your access to and use of our website, services, and products.
            </p>
            <p 
              className="text-sm text-gray-500 mt-4"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Last Updated: November 2024
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E56732] to-[#D9531E] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 
                          className="text-2xl font-bold text-gray-900"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {section.title}
                        </h2>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-3 text-gray-600"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E56732] mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Important Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="card bg-gray-50">
              <div className="p-6">
                <h3 
                  className="text-lg font-bold mb-3 text-gray-900"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Governing Law
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  These terms are governed by the laws of Nigeria. Any disputes shall be resolved in Nigerian courts.
                </p>
              </div>
            </div>

            <div className="card bg-gray-50">
              <div className="p-6">
                <h3 
                  className="text-lg font-bold mb-3 text-gray-900"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Dispute Resolution
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  We encourage resolving disputes through negotiation. If unsuccessful, disputes may proceed to arbitration.
                </p>
              </div>
            </div>

            <div className="card bg-gray-50">
              <div className="p-6">
                <h3 
                  className="text-lg font-bold mb-3 text-gray-900"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Changes to Terms
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  We may update these terms periodically. Continued use after changes constitutes acceptance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="card card-gradient-secondary text-white inline-block">
              <div className="p-8">
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Questions About These Terms?
                </h3>
                <p 
                  className="text-white/90 mb-6"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  If you have any questions about these Terms of Service, please contact our legal team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:legal@gvany.com"
                    className="btn bg-white text-[#E56732] hover:bg-gray-100"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    legal@gvany.com
                  </a>
                  <a 
                    href="/contact"
                    className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Terms
