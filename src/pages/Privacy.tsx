import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, UserCheck, AlertCircle } from 'lucide-react'
// import Hero from '../components/Hero'

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number)',
        'Business information (Company name, industry, location)',
        'Technical data (IP address, browser type, device information)',
        'Usage data (Pages visited, time spent, interaction patterns)',
        'Communication records (Emails, inquiries, support requests)'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain our services',
        'To process your transactions and manage orders',
        'To communicate with you about our services and updates',
        'To improve our website and service offerings',
        'To comply with legal obligations and prevent fraud',
        'To send marketing communications (with your consent)'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'SSL encryption for all data transmission',
        'Regular security audits and vulnerability assessments',
        'Restricted access to personal information on a need-to-know basis',
        'Secure data storage with encrypted backups',
        'Employee training on data protection and privacy practices'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Access your personal data we hold about you',
        'Request correction of inaccurate or incomplete data',
        'Request deletion of your personal data',
        'Object to processing of your personal data',
        'Request restriction of processing your data',
        'Data portability - receive your data in a structured format',
        'Withdraw consent at any time where we rely on consent'
      ]
    },
    {
      icon: Shield,
      title: 'Data Sharing',
      content: [
        'We do not sell your personal information to third parties',
        'We may share data with trusted service providers who assist our operations',
        'Legal authorities when required by law or to protect our rights',
        'Business transfers in case of merger, acquisition, or asset sale',
        'With your explicit consent for specific purposes',
        'All third parties are contractually bound to protect your data'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Cookies and Tracking',
      content: [
        'We use cookies to enhance your browsing experience',
        'Essential cookies for website functionality',
        'Analytics cookies to understand user behavior',
        'Marketing cookies for personalized advertising (with consent)',
        'You can control cookie preferences through your browser settings',
        'Disabling cookies may affect website functionality'
      ]
    }
  ]

  return (
    <div>
      {/* <Hero page="privacy" /> */}

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
              Privacy <span className="text-gradient-primary">Policy</span>
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              At GVANY, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy outlines how we collect, use, and safeguard your data.
            </p>
            <p 
              className="text-sm text-gray-500 mt-4"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Last Updated: November 2024
            </p>
          </motion.div>

          {/* Privacy Sections */}
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#01A5F9] to-[#0182C6] flex items-center justify-center flex-shrink-0">
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
                          <div className="w-1.5 h-1.5 rounded-full bg-[#01A5F9] mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="card card-gradient-primary text-white inline-block">
              <div className="p-8">
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Questions About Your Privacy?
                </h3>
                <p 
                  className="text-white/90 mb-6"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  If you have any questions or concerns about this privacy policy or our data practices, 
                  please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:privacy@gvany.com"
                    className="btn bg-white text-[#01A5F9] hover:bg-gray-100"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    privacy@gvany.com
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

export default Privacy
