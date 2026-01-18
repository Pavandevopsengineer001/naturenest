"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  {
    title: "2000-Year-Old Jain Temple Nearby",
    description: "A sacred spiritual landmark that adds cultural richness to your weekend retreat",
    icon: "🏛️",
  },
  {
    title: "Premium Farm Plots",
    description: "Carefully selected plots with ideal dimensions and natural surroundings",
    icon: "🌾",
  },
  {
    title: "Resort-Style Amenities",
    description: "World-class facilities designed for relaxation and entertainment",
    icon: "✨",
  },
  {
    title: "Clear Titles & Legal Security",
    description: "100% transparent documentation and complete legal protection for your investment",
    icon: "📋",
  },
  {
    title: "Future Growth Corridor",
    description: "Located in high-appreciation zones with planned infrastructure development",
    icon: "📈",
  },
  {
    title: "Easy Accessibility",
    description: "Connected via highways with planned 200 ft road development",
    icon: "🛣️",
  },
]

export function TrustHighlights() {
  return (
    <section className="py-16 sm:py-24 bg-background">
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
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">
            Why NatureNest Estates?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Discover what makes us the premier choice for premium countryside living
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:border-primary"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3 tracking-tight">{highlight.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{highlight.description}</p>
              <div className="flex items-center gap-2 text-primary font-medium">
                <CheckCircle2 size={20} />
                <span>Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
