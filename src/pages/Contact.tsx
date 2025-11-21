import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import Hero from '../components/Hero'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  country: string
  service: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const services: string[] = [
    'Marketing, Sales & Distribution',
    'Haulage, Logistics & Supply Chain',
    'Custom Clearing & Forwarding',
    'Agro-Allied Services',
    'Real Estate',
    'Consultancy Services',
    'General Inquiry'
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        service: '',
        message: '',
      })
      setErrors({})
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero page="contact" />

      {/* Contact Form & Info Section */}
      <section className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#01A5F9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E56732]/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes 3 columns */}
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
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
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
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email & Phone Row */}
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
                            >
                              <AlertCircle className="w-4 h-4" />
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div>
                        <label htmlFor="phone" className="label">
                          Phone Number
                        </label>
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

                    {/* Company & Country Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="label">
                          Company Name
                        </label>
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
                        <label htmlFor="country" className="label">
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="input"
                          placeholder="Nigeria"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="label">
                        Service of Interest
                      </label>

                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="select"
                      >
                        <option value="">Select a service...</option>
                        {services.map(service => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Field */}
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
                        placeholder="Tell us about your project or inquiry..."
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

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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

                  {/* Success/Error Messages */}
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
                          <p className="font-semibold text-green-900">Message sent successfully!</p>
                          <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
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
                          <p className="font-semibold text-red-900">Something went wrong</p>
                          <p className="text-sm text-red-700">Please try again or contact us directly.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Sidebar - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Contact Card */}
              <div className="card card-gradient-primary text-white">
                <div className="p-8">
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Get In Touch
                  </h3>
                  <p className="text-white/90 mb-6">
                    Reach out to us through any of these channels
                  </p>

                  <div className="space-y-4">
                    <a 
                      href="mailto:info@gvany.com"
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Email</div>
                        <div className="text-sm text-white/90">emma.okodugha@gmail.com</div>
                      </div>
                    </a>

                    <a 
                      href="tel:+234xxxxxxxxxx"
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Phone</div>
                        <div className="text-sm text-white/90">+234 081 0162 8455</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">Headquarters</div>
                        <div className="text-sm text-white/90">Di Maria plaza, Plot 3012 Block 24,
Rafiu Babatunde Tinubu Road, Amuwo Odofin, Lagos, Nigeria.</div>
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