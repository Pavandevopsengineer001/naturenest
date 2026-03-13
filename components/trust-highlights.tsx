"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Play } from "lucide-react"

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
            Experience The Vision
          </p>
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
            className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border group cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/luxury-resort-cottages-in-nature-setting-with-roll.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Play size={36} className="text-accent-foreground ml-1" />
              </div>
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
              { title: "Entrance Gate", subtitle: "Grand Welcome" },
              { title: "Green Landscapes", subtitle: "Nature Views" },
              { title: "Internal Roads", subtitle: "Infrastructure" },
              { title: "Amenity Area", subtitle: "Facilities" },
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden bg-muted border border-border relative group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/project-${index + 1}-nature-cottage-farm-land.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/70 transition-colors flex flex-col items-center justify-center p-4">
                  <p className="text-primary-foreground font-serif font-bold text-center">{item.title}</p>
                  <p className="text-primary-foreground/80 text-sm mt-1">{item.subtitle}</p>
                  <p className="text-primary-foreground/60 text-xs mt-2">Photo Coming Soon</p>
                </div>
              </div>
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
            { value: "Premium", label: "Plot Sizes", detail: "Multiple Options" },
            { value: "Clear", label: "Legal Titles", detail: "100% Verified" },
            { value: "Gated", label: "Community", detail: "24/7 Security" },
            { value: "Strategic", label: "Location", detail: "Near Kolanupaka" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-foreground font-medium mb-1">{stat.label}</p>
              <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
                <CheckCircle2 size={14} className="text-primary" />
                <span>{stat.detail}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
