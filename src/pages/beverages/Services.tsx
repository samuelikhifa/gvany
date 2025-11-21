// SERVICES PAGE
const BeveragesServices = () => {
  return (
    <div>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0289DC]/10 to-white">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Our <span className="text-[#0289DC]">Services</span></h1>
          <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'var(--font-primary)' }}>Complete beverage solutions</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {[
              { title: 'Beverage Production', desc: 'Modern manufacturing facilities with quality control' },
              { title: 'Brand Development', desc: 'Creating and strengthening beverage brands' },
              { title: 'Distribution Network', desc: 'Wide-reaching distribution across markets' },
              { title: 'Quality Assurance', desc: 'Meeting African and global standards' }
            ].map((service, i) => (
              <div key={i} className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0268AE] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--font-primary)' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BeveragesServices
