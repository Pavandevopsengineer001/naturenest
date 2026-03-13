"use client"

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
    <div
      className={`fixed bottom-0 left-0 right-0 md:hidden z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="tel:6309123731"
        className="flex items-center justify-center gap-3 w-full py-4 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-serif font-bold text-lg hover:opacity-95 transition-opacity shadow-lg btn-premium"
      >
        <Phone size={22} />
        Call Now: 6309123731
      </a>
    </div>
  )
}
