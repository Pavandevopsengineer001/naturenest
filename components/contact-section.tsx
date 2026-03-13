"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle, MessageCircle } from "lucide-react"
import { useState } from "react"

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
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-primary/95 to-primary/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Contact Info Cards */}
          <motion.a
            href="tel:6309123731"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white/12 backdrop-blur-xl rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
          >
            <Phone size={36} className="text-primary-foreground mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">Call Us</h3>
            <p className="text-primary-foreground/90 font-medium text-lg">+91 6309123731</p>
            <p className="text-sm text-primary-foreground/70 mt-2">Available 9 AM - 8 PM</p>
          </motion.a>

          <motion.a
            href="https://wa.me/916309123731"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-white/12 backdrop-blur-xl rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
          >
            <MessageCircle size={36} className="text-primary-foreground mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">WhatsApp</h3>
            <p className="text-primary-foreground/90 font-medium">Chat with us</p>
            <p className="text-sm text-primary-foreground/70 mt-2">Quick responses guaranteed</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-white/12 backdrop-blur-xl rounded-xl border border-white/20 group"
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
          <form onSubmit={handleSubmit} className="p-8 sm:p-10 bg-white rounded-xl shadow-2xl space-y-6">
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
                    className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                  >
                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-serif font-bold text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-serif font-bold text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit phone number"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-serif font-bold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-serif font-bold text-foreground mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific questions about THE DIVINE FARMS?"
                    rows={4}
                    disabled={loading}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-8 bg-primary text-primary-foreground font-serif font-bold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 btn-premium text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                >
                  <Send size={20} />
                  {loading ? "Sending..." : "Request Callback"}
                </button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
