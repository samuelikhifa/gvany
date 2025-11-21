import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useState, FormEvent, ChangeEvent } from 'react'
// import HLHero from './components/HLHero'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const services = [
    'Marketing Strategy',
    'Sales Solutions',
    'Distribution Networks',
    'Brand Development',
    'Market Research',
    'General Inquiry'
  ]

  const validateForm = () => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
      setErrors({})
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // if (errors[name]) {
    //   setErrors(prev => ({ ...prev, [name]: '' }))
    // }
  }

  return (
    <div>
      {/* <HLHero page="contact" /> */}

      <section className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E03E7D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#01A5F9]/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="card">
                <div className="p-8 md:p-10">
                  <div className="mb-8">
                    <h2
                      className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Send Us a <span className="text-gradient-primary">Message</span>
                    </h2>
                    <p
                      className="text-gray-600"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Fill out the form and we'll get back to you within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="label">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="John Doe"
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            style={{ fontFamily: 'var(--font-primary)' }}
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="label">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                          placeholder="john@example.com"
                        />
                        <AnimatePresence>
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-500 text-sm mt-1 flex items-center gap-1"
                              style={{ fontFamily: 'var(--font-primary)' }}
                            >
                              <AlertCircle className="w-4 h-4" />
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div>
                        <label htmlFor="phone" className="label">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input"
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="label">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="label">Service of Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="select"
                      >
                        <option value="">Select a service...</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="label">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`textarea ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="Tell us about your marketing and distribution needs..."
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            style={{ fontFamily: 'var(--font-primary)' }}
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </form>

                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p
                            className="font-semibold text-green-900"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            Message sent successfully!
                          </p>
                          <p
                            className="text-sm text-green-700"
                            style={{ fontFamily: 'var(--font-primary)' }}
                          >
                            We'll get back to you within 24 hours.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p
                            className="font-semibold text-red-900"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            Something went wrong
                          </p>
                          <p
                            className="text-sm text-red-700"
                            style={{ fontFamily: 'var(--font-primary)' }}
                          >
                            Please try again or contact us directly.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card card-gradient-primary text-white sticky top-24">
                <div className="p-8">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Get In Touch
                  </h3>
                  <p
                    className="text-white/90 mb-6"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Contact us through any of these channels
                  </p>

                  <div className="space-y-4">
                    <a
                      href="mailto:info@adret.com"
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <div
                          className="font-semibold text-sm"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          Email
                        </div>
                        <div
                          className="text-sm text-white/90"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          emma.okodugha@gmail.com
                        </div>
                      </div>
                    </a>

                    <a
                      href="tel:+234xxxxxxxxxx"
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <div
                          className="font-semibold text-sm"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          Phone
                        </div>
                        <div
                          className="text-sm text-white/90"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          +234 081 0162 8455
                        </div>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <div
                          className="font-semibold text-sm"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          Location
                        </div>
                        <div
                          className="text-sm text-white/90"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          Lagos, Nigeria
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact