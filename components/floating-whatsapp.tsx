"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/916309123731?text=Hi!%20I'm%20interested%20in%20THE%20DIVINE%20FARMS%20project.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-50" style={{ animationDelay: "0.5s" }} />
      
      {/* Main button */}
      <motion.div
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.4)",
            "0 0 0 15px rgba(34, 197, 94, 0)",
            "0 0 0 0 rgba(34, 197, 94, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <MessageCircle size={28} className="text-white" fill="white" />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: [0, 1, 1, 0], x: [10, 0, 0, 10] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <div className="px-4 py-2 bg-foreground text-primary-foreground text-sm font-medium rounded-lg whitespace-nowrap shadow-lg">
          Chat with us!
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
        </div>
      </motion.div>
    </motion.a>
  )
}
