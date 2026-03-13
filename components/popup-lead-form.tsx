"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Gift, CheckCircle, AlertCircle, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function PopupLeadForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("seenPopup")
      if (!hasSeenPopup) {
        setIsOpen(true)
      }
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("seenPopup", "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, message: "Lead from popup form" }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Failed to submit. Please try again.")
        return
      }

      setSubmitted(true)
      sessionStorage.setItem("seenPopup", "true")
      setTimeout(() => {
        setIsOpen(false)
        setSubmitted(false)
        setFormData({ name: "", phone: "", email: "" })
      }, 3000)
    } catch {
      setError("Failed to submit. Please call us directly at 6309123731")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError("")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-br from-primary via-primary to-primary/80 p-6 text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors z-10"
                aria-label="Close popup"
              >
                <X size={20} />
              </button>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={24} className="text-accent animate-pulse" />
                  <span className="text-sm font-medium tracking-wider uppercase text-accent">Exclusive Offer</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">THE DIVINE FARMS</h3>
                <p className="text-primary-foreground/90 text-sm font-light">
                  Get exclusive launch pricing & free resort membership!
                </p>
              </div>
            </div>

            {/* Offer Badge */}
            <div className="flex justify-center -mt-4 relative z-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full shadow-lg text-sm font-bold">
                <Gift size={16} className="animate-bounce" />
                FREE Resort Membership
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-foreground mb-2">Thank You!</h4>
                  <p className="text-muted-foreground text-sm">
                    Our team will contact you shortly with exclusive offers.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-sm"
                    >
                      <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700">{error}</p>
                    </motion.div>
                  )}

                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:scale-100"
                  >
                    <Send size={18} />
                    {loading ? "Submitting..." : "Get Exclusive Pricing"}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    EMI Options Available | 100% Legal Documentation
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
