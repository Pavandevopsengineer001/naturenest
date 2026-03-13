"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { useState, useEffect } from "react"

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 md:hidden z-40"
    >
      <motion.a
        href="tel:6309123731"
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-3 w-full py-4 px-4 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground font-serif font-bold text-lg shadow-2xl"
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Phone size={22} />
        </motion.div>
        Call Now: 6309123731
      </motion.a>
    </motion.div>
  )
}
