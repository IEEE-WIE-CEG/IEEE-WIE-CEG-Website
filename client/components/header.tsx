"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/events", label: "Events" },
    { href: "/research", label: "Research" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-purple-700 shadow-sm">
      <div className="flex items-center justify-between h-20 px-4 md:px-6">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-tight text-white">
          <Image
            src="/logo2.png"
            alt="IEEE WIE-CEG Student Chapter Logo"
            width={80}
            height={80}
            className="w-18 h-16 md:w-18 md:h-16"
          />
          <span className="hidden sm:inline text-sm md:text-xl">IEEE WIE-CEG Student Chapter</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-6 xl:gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="transition-colors text-purple-100 hover:text-white font-medium px-3 py-2 rounded-md hover:bg-white/10"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-purple-800 border-t border-purple-600">
          <nav className="px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    onClick={closeMenu}
                    className="block transition-colors text-purple-100 hover:text-white font-medium px-3 py-3 rounded-md hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
