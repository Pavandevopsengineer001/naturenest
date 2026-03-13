"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Leaf } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Highlights", href: "#highlights" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/98 backdrop-blur-md supports-[backdrop-filter]:bg-white/95 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Leaf size={28} className="text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-serif font-bold text-foreground leading-tight">
                THE DIVINE FARMS
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-medium tracking-wider">
                by SRLN Infra Developers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:6309123731"
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-sm btn-premium"
            >
              <Phone size={18} />
              <span className="hidden md:inline">6309123731</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2 border-t border-border pt-4 bg-background/50 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/30 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:6309123731"
              className="flex items-center gap-2 px-4 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:shadow-lg transition-all mt-3 btn-premium"
            >
              <Phone size={18} />
              <span>Call: 6309123731</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
