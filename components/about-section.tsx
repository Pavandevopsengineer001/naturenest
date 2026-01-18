"use client"

import { motion } from "framer-motion"
import { Award, Target, Eye } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-serif font-medium tracking-[0.15em] uppercase text-xs sm:text-sm mb-6">
            Who We Are
          </p>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">
            About NatureNest Estates
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Redefining luxury countryside living through premium real estate development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden h-96 lg:h-full min-h-96"
          >
            <img src="/about-nesting-community.jpg" alt="NatureNest Community" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-6 tracking-tight">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                NatureNest Estates was founded with a vision to create premium lifestyle destinations that seamlessly
                blend nature with modern luxury. We believe everyone deserves a sanctuary where they can escape the
                hustle of city life and reconnect with nature and their loved ones.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Target size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-foreground mb-3">Our Mission</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To develop world-class residential communities that offer the perfect balance of luxury,
                      sustainability, and connection to nature.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Eye size={32} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-foreground mb-3">Our Vision</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To become the preferred real estate brand for premium country living in Telangana, known for
                      integrity, quality, and customer satisfaction.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-secondary/30 border border-secondary/50 hover:border-secondary hover:bg-secondary/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Award size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-foreground mb-3">Our Values</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Transparency, Quality, Sustainability, and Customer-centricity. We are committed to delivering
                      exceptional value and creating lasting relationships.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h4 className="text-2xl font-serif font-bold text-foreground mb-6 tracking-tight">
                Why Choose NatureNest?
              </h4>
              <ul className="space-y-3">
                {[
                  "Decades of expertise in real estate development",
                  "Transparent and ethical business practices",
                  "Legal compliance and clear documentation",
                  "Focus on sustainable and eco-friendly development",
                  "Exceptional customer service and support",
                  "Premium locations with high growth potential",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-foreground font-medium"
                  >
                    <span className="w-2.5 h-2.5 bg-gradient-to-br from-accent to-primary rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
