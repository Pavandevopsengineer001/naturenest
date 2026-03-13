"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Phone, MapPin, Send, AlertCircle, CheckCircle, CreditCard, Gift } from "lucide-react"
import { useState } from "react"

// WhatsApp SVG Icon
function WhatsAppIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Failed to send message. Please try again.")
        return
      }

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: "", email: "", phone: "", message: "" })
      }, 4000)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Failed to send message. Please try again or call us directly.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError("")
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-8 tracking-tight text-balance">
            Get In Touch
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
            Interested in THE DIVINE FARMS? Our team is here to help you find your perfect plot
          </p>
        </motion.div>

        {/* Offers Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full text-primary-foreground">
            <CreditCard size={18} className="text-accent" />
            <span className="font-medium">EMI Options Available</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-full font-bold">
            <Gift size={18} />
            <span>FREE Resort Membership</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Contact Info Cards */}
          <motion.a
            href="tel:6309123731"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="p-8 bg-white/12 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/50 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <Phone size={36} className="text-primary-foreground mb-4 group-hover:scale-110 transition-transform" />
            </motion.div>
            <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">Call Us</h3>
            <p className="text-primary-foreground/90 font-medium text-lg">+91 6309123731</p>
            <p className="text-sm text-primary-foreground/70 mt-2">Available 9 AM - 8 PM</p>
          </motion.a>

          <motion.a
            href="https://wa.me/916309123731?text=Hi!%20I'm%20interested%20in%20THE%20DIVINE%20FARMS%20project.%20Please%20share%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="p-8 bg-white/12 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/50 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
          >
            <WhatsAppIcon size={36} className="text-primary-foreground mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">WhatsApp</h3>
            <p className="text-primary-foreground/90 font-medium">Chat with us</p>
            <p className="text-sm text-primary-foreground/70 mt-2">Quick responses guaranteed</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-white/12 backdrop-blur-xl rounded-2xl border border-white/20 group"
          >
            <MapPin size={36} className="text-primary-foreground mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">Project Location</h3>
            <p className="text-primary-foreground/90 font-medium">Near Kolanupaka, Aler</p>
            <p className="text-sm text-primary-foreground/70 mt-2">Telangana, India</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="p-8 sm:p-10 bg-white rounded-2xl shadow-2xl space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-foreground">Request a Callback</h3>
              <p className="text-muted-foreground mt-2 text-sm">Fill in your details and we'll get back to you shortly</p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your inquiry about THE DIVINE FARMS. Our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                  >
                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit phone number"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific questions about THE DIVINE FARMS?"
                    rows={4}
                    disabled={loading}
                    className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-8 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                >
                  <Send size={20} />
                  {loading ? "Sending..." : "Request Callback"}
                </motion.button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
