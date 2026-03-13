"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Play, Sparkles } from "lucide-react"

export function TrustHighlights() {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6"
          >
            <Sparkles size={16} />
            Experience The Vision
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight text-balance">
            Your Dream Farmland Awaits
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            THE DIVINE FARMS offers the perfect combination of natural beauty, modern amenities, and investment value
          </p>
        </motion.div>

        {/* Media Placeholder - For Photos & Videos */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Video/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border group cursor-pointer shadow-xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: "url('/divine-farms-hero.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center mb-4 shadow-lg"
              >
                <Play size={36} className="text-accent-foreground ml-1" />
              </motion.div>
              <p className="text-white font-serif font-bold text-lg">Project Video Coming Soon</p>
              <p className="text-white/70 text-sm mt-1">Aerial views & walkthrough</p>
            </div>
          </motion.div>

          {/* Photo Grid Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { title: "Farm Cottage", subtitle: "Cozy Stays" },
              { title: "Glam Pods", subtitle: "Luxury Glamping" },
              { title: "Swimming Pool", subtitle: "Recreation" },
              { title: "Beach View", subtitle: "With Gazebo" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-xl overflow-hidden bg-muted border border-border relative group shadow-lg"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('/divine-farms-hero.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-primary/30 group-hover:from-primary/90 transition-colors flex flex-col items-center justify-center p-4">
                  <p className="text-primary-foreground font-serif font-bold text-center text-lg">{item.title}</p>
                  <p className="text-primary-foreground/80 text-sm mt-1">{item.subtitle}</p>
                  <p className="text-primary-foreground/60 text-xs mt-3 px-3 py-1 bg-white/20 rounded-full">Photo Coming Soon</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: "1.5", label: "Acres Amenities", detail: "World-Class Facilities" },
            { value: "Clear", label: "Legal Titles", detail: "100% Verified" },
            { value: "Gated", label: "Community", detail: "24/7 Security" },
            { value: "FREE", label: "Resort Membership", detail: "For Plot Buyers" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <p className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-foreground font-bold mb-1">{stat.label}</p>
              <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
                <CheckCircle2 size={14} className="text-accent" />
                <span>{stat.detail}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
