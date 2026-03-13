"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Phone, Gift, Percent } from "lucide-react"
import { useState } from "react"

export function InlineLeadForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" })
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, message: "Lead from inline form" }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Failed to submit. Please try again.")
        return
      }

      setSubmitted(true)
    } catch {
      setError("Failed to submit. Please call us at 6309123731")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError("")
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Gift size={18} className="text-primary" />
              <span className="text-sm font-bold text-primary">Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight text-balance">
              Book Your Dream Farm Plot Today!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Own a piece of paradise at THE DIVINE FARMS. Premium farm plots with world-class amenities, perfect for weekend getaways and smart investment.
            </p>

            {/* Offers */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Percent size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Easy EMI Options Available</p>
                  <p className="text-sm text-muted-foreground">Flexible payment plans to suit your needs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gift size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">FREE Resort Membership</p>
                  <p className="text-sm text-muted-foreground">Complimentary for all plot buyers</p>
                </div>
              </div>
            </div>

            <a
              href="tel:6309123731"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <Phone size={20} />
              Or Call: 6309123731
            </a>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl shadow-2xl border border-border p-8 sm:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Get Instant Callback
                </h3>
                <p className="text-muted-foreground text-sm">
                  Fill in your details for exclusive pricing
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                    <CheckCircle size={48} className="text-green-600" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-foreground mb-2">Thank You!</h4>
                  <p className="text-muted-foreground">
                    Our team will contact you within 24 hours with exclusive pricing details.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2"
                    >
                      <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:scale-100"
                  >
                    <Send size={20} />
                    {loading ? "Submitting..." : "Get Price Details"}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Your information is 100% secure and will not be shared
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
