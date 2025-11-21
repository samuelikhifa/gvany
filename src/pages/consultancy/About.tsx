import { motion } from 'framer-motion'
import { Target, Users, Award, CheckCircle } from 'lucide-react'

const ConsultancyAbout = () => {
  const whoWeHelp = [
    'Organizations seeking to streamline operations and improve efficiency',
    'Companies planning business transformation or performance turnaround',
    'Businesses looking to optimize processes, reduce costs, and boost profitability',
    'Firms needing organizational restructuring or change management support',
    'Enterprises pursuing market entry, expansion, or partnership strategies',
    'Leadership teams requiring governance, risk, compliance, or strategic advisory',
  ]

  return (
    <div>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[#01A5F9]/10 to-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Our About 
            </h1>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-primary)' }}>
              Delivering expert consultancy and business support services that help organizations streamline operations and unlock sustainable growth opportunities
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Users className="w-4 h-4" />
              <span>Who We Help</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Perfect For</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-0">
            {whoWeHelp.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-[#01A5F9] flex-shrink-0 mt-1" />
                <p className="text-gray-700" style={{ fontFamily: 'var(--font-primary)' }}>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-gray-50 to-white mt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Strategic Expertise', description: 'Tailored, data-driven advisory focused on operational excellence and growth' },
              { icon: Award, title: 'Proven Impact', description: 'Successfully guided transformation projects for clients across multiple sectors and regions' },
              { icon: Users, title: 'Experienced Team', description: 'Seasoned consultants with deep industry knowledge and practical implementation experience' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card card-hover text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#01A5F9]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#01A5F9]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                  <p className="text-gray-600" style={{ fontFamily: 'var(--font-primary)' }}>{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConsultancyAbout
