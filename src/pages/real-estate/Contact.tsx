import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  propertyType: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const RealEstateContact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // FIXED: allow "success" | "error" | null
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const propertyTypes = [
    'Residential',
    'Commercial',
    'Land',
    'Investment',
    'Rental',
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

  // FIXED: async + removed broken return
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log("Form submitted:", formData)

      setSubmitStatus("success")
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: '',
      })
      setErrors({})

      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // FIXED: add proper event type
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#2C5333]/10 to-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get In <span className="text-[#2C5333]">Touch</span>
          </motion.h1>
          <p
            className="text-lg text-gray-600"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Let's discuss your property needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="card p-8">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Send Us a <span className="text-[#2C5333]">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME */}
                  <div>
                    <label className="label">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="John Doe"
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* EMAIL + PHONE */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="john@example.com"
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className="label">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                  </div>

                  {/* PROPERTY TYPE */}
                  <div>
                    <label className="label">Property Type</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="select"
                    >
                      <option value="">Select property type...</option>
                      {propertyTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="label">Message <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`textarea ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell us about your property needs..."
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`btn btn-secondary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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

                {/* SUCCESS / ERROR ALERTS */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-900" style={{ fontFamily: 'var(--font-heading)' }}>
                          Message sent successfully!
                        </p>
                        <p className="text-sm text-green-700" style={{ fontFamily: 'var(--font-primary)' }}>
                          We'll get back to you within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-900" style={{ fontFamily: 'var(--font-heading)' }}>
                          Something went wrong
                        </p>
                        <p className="text-sm text-red-700" style={{ fontFamily: 'var(--font-primary)' }}>
                          Please try again or contact us directly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>



          </div>
        </div>
      </section>
    </div>
  )
}

export default RealEstateContact
