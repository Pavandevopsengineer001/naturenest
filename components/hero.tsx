"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/luxury-resort-cottages-in-nature-setting-with-roll.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants}>
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 font-sans">
            Welcome to Nature Paradise
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight text-balance"
          style={{ letterSpacing: "-0.02em" }}
        >
          Own Your Weekend Paradise
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/95 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-balance font-sans"
          style={{ letterSpacing: "0.3px" }}
        >
          Premium Farm Plots & Resort-Style Cottages in Kolanupaka & Aleru, Telangana. Your escape to luxury living
          awaits.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link
            href="tel:9154658651"
            className="px-10 py-4 bg-accent text-accent-foreground font-serif font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 btn-premium text-lg tracking-wide"
          >
            Call Now: 9154658651
          </Link>
          <Link
            href="#projects"
            className="px-10 py-4 bg-white/12 backdrop-blur-md text-white font-serif font-bold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30 btn-premium text-lg tracking-wide"
          >
            Explore Projects
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex justify-center"
        >
          <ChevronDown size={32} className="text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
