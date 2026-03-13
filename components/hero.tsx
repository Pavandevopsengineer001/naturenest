"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown, MapPin, Calendar } from "lucide-react"

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
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants}>
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 font-sans">
            SRLN Infra Developers Proudly Presents
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight text-balance"
          style={{ letterSpacing: "-0.02em" }}
        >
          THE DIVINE FARMS
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-accent font-serif font-medium mb-6"
        >
          A New Lifestyle Close to Nature
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/90 mb-4 max-w-3xl mx-auto font-light leading-relaxed text-balance font-sans"
          style={{ letterSpacing: "0.3px" }}
        >
          Have you ever imagined owning a peaceful place surrounded by nature? Now it's becoming a reality.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-white/80 mb-8"
        >
          <MapPin size={20} className="text-accent" />
          <span className="text-base sm:text-lg font-medium">Near Kolanupaka, Aler, Telangana</span>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {["Natural Green Environment", "Weekend Getaway", "Smart Investment"].map((item, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/20"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <Link
            href="tel:6309123731"
            className="px-10 py-4 bg-accent text-accent-foreground font-serif font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 btn-premium text-lg tracking-wide"
          >
            Call Now: 6309123731
          </Link>
          <Link
            href="#highlights"
            className="px-10 py-4 bg-white/12 backdrop-blur-md text-white font-serif font-bold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30 btn-premium text-lg tracking-wide"
          >
            Explore Project
          </Link>
        </motion.div>

        {/* Grand Launch Event CTA */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/90 backdrop-blur-md rounded-lg border border-primary/50">
            <Calendar size={20} className="text-primary-foreground" />
            <span className="text-primary-foreground font-serif font-bold">
              Grand Launch Event - You're Invited!
            </span>
          </div>
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
