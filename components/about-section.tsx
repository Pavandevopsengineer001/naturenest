"use client"

import { motion } from "framer-motion"
import { Award, Target, Eye, CheckCircle2, Building2, Users, Handshake, Phone } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-bold text-sm mb-6"
          >
            About The Developer
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight text-balance">
            SRLN Infra Developers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Building dreams, creating lifestyles, and delivering value through premium real estate developments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* About Image/Company Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Company Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 p-8 sm:p-10 text-primary-foreground shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6"
                >
                  <Building2 size={32} className="text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 tracking-tight">
                  SRLN Infra Developers
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed font-light mb-6">
                  We are committed to developing premium lifestyle destinations that seamlessly blend nature 
                  with modern amenities. Our focus is on creating spaces where families can escape the 
                  hustle of city life and reconnect with nature.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <Users size={24} className="mx-auto mb-2 text-accent" />
                    <p className="text-sm text-primary-foreground/80">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <Handshake size={24} className="mx-auto mb-2 text-accent" />
                    <p className="text-sm text-primary-foreground/80">Trust & Integrity</p>
                  </div>
                  <div className="text-center">
                    <Award size={24} className="mx-auto mb-2 text-accent" />
                    <p className="text-sm text-primary-foreground/80">Quality Delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <p className="text-sm text-muted-foreground mb-2">For inquiries about THE DIVINE FARMS:</p>
              <a 
                href="tel:6309123731" 
                className="flex items-center gap-2 text-xl font-serif font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <Phone size={20} />
                +91 6309123731
              </a>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Mission */}
            <motion.div
              whileHover={{ x: 5 }}
              className="p-6 sm:p-8 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-foreground mb-3">Our Mission</h4>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    To develop world-class residential communities that offer the perfect balance of 
                    luxury, sustainability, and connection to nature, making countryside living accessible to all.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ x: 5 }}
              className="p-6 sm:p-8 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-foreground mb-3">Our Vision</h4>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    To become a trusted name in premium farmland development in Telangana, known for 
                    integrity, quality construction, and exceptional customer satisfaction.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              whileHover={{ x: 5 }}
              className="p-6 sm:p-8 rounded-xl bg-secondary/30 border border-secondary/50 hover:border-secondary transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-foreground mb-3">Our Values</h4>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Transparency, Quality, Sustainability, and Customer-centricity. We are committed 
                    to delivering exceptional value and creating lasting relationships with our clients.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <div className="pt-4">
              <h4 className="text-xl font-serif font-bold text-foreground mb-4 tracking-tight">
                Why SRLN Infra Developers?
              </h4>
              <ul className="space-y-3">
                {[
                  "Transparent and ethical business practices",
                  "Legal compliance and clear documentation",
                  "Focus on sustainable development",
                  "Quality construction and timely delivery",
                  "Customer-first approach",
                  "Post-sale support and assistance",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
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
