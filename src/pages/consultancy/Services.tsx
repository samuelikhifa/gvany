const  ConsultancyServices
 = () => {
  const services = [
    { title: 'Business Strategy & Transformation', desc: 'Developing and executing strategies to drive sustainable growth and competitive advantage' },
    { title: 'Operational Excellence', desc: 'Streamlining processes, reducing costs, and improving efficiency across your organization' },
    { title: 'Organizational Design & Change Management', desc: 'Structuring teams and leading successful transformation initiatives' },
    { title: 'Performance Improvement', desc: 'Identifying opportunities and implementing solutions to boost profitability and productivity' },
    { title: 'Digital Transformation', desc: 'Advising and supporting technology adoption and digital capability building' },
    { title: 'Market Entry & Growth Strategies', desc: 'Strategic guidance for entering new markets, expansions, and partnership development' }
  ]

  return (
    <div>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#E56732]/10 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Our <span className="text-gradient-primary">Services</span>
          </h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-primary)' }}>
            Expert consultancy and business support solutions
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div key={i} className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-[#01A5F9] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--font-primary)' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}




export default ConsultancyServices
