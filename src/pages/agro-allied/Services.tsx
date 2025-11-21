

const AgroAlliedServices = () => {
  return (
    <div>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#DA9E1B]/10 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Our <span className="text-[#DA9E1B]">Services</span></h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-primary)' }}>Agricultural solutions that power sustainability and food security</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {[
              { title: 'Crop Production', desc: 'High-quality cultivation practices for increased yield and healthy produce.' },
              { title: 'Agro Processing', desc: 'Value-added processing to enhance product quality and distribution efficiency.' },
              { title: 'Supply & Distribution', desc: 'Reliable delivery systems ensuring farm products reach consumers and businesses.' },
              { title: 'Food Security Support', desc: 'Programs and systems designed to promote sustainable agriculture and secure food access.' }
            ].map((service, i) => (
              <div key={i} className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-[#E56732] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--font-primary)' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}





export default AgroAlliedServices