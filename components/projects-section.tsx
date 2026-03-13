"use client"

import { motion } from "framer-motion"
import { Leaf, Sun, TrendingUp, Shield, MapPin, Home, Trees, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Leaf,
    title: "Natural Green Environment",
    description: "Surrounded by lush greenery and pristine natural landscapes that rejuvenate your soul",
  },
  {
    icon: Sun,
    title: "Weekend Getaway Feeling",
    description: "Escape the city stress and enjoy peaceful weekends with family in your own paradise",
  },
  {
    icon: TrendingUp,
    title: "Smart Future Investment",
    description: "Located in a high-growth corridor with excellent appreciation potential",
  },
  {
    icon: Shield,
    title: "Clear Legal Documentation",
    description: "100% transparent documentation with complete legal protection for your peace of mind",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Strategically located near Kolanupaka with easy access to major highways and cities",
  },
  {
    icon: Home,
    title: "Gated Community",
    description: "Secure gated community with 24/7 security and premium infrastructure",
  },
  {
    icon: Trees,
    title: "Eco-Friendly Development",
    description: "Sustainable development practices preserving natural beauty and environment",
  },
  {
    icon: Sparkles,
    title: "Premium Amenities",
    description: "World-class facilities designed for comfort, relaxation, and entertainment",
  },
]

export function ProjectsSection() {
  return (
    <section id="highlights" className="py-16 sm:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-serif font-medium tracking-[0.15em] uppercase text-xs sm:text-sm mb-6">
            Why Choose Us
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight text-balance">
            Project Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Discover what makes THE DIVINE FARMS the perfect choice for your dream farmland investment
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <highlight.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 tracking-tight">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Price Section Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-10 rounded-2xl bg-primary text-primary-foreground text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Attractive Pricing & Flexible Payment Plans
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
            Premium farm plots at competitive prices. Contact us for detailed pricing and exclusive launch offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6309123731"
              className="px-8 py-4 bg-accent text-accent-foreground font-serif font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 btn-premium text-lg"
            >
              Get Price Details
            </a>
            <a
              href="https://wa.me/916309123731"
              className="px-8 py-4 bg-white/15 backdrop-blur-md text-primary-foreground font-serif font-bold rounded-lg hover:bg-white/25 transition-all duration-300 border border-white/30 btn-premium text-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
