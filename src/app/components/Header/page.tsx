'use client'

import { Link, Menu, Spotlight } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
      <div className="flex items-center justify-between px-5 md:px-10 py-4">
        <a href="/" className="flex items-center gap-2 text-2xl font-serif font-bold text-dark">
          <Spotlight /> Joyce Beauy
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-bold">
          <a href="#services">Services</a>
          <a href="#about">À propos</a>
          <a href="#gallery">Galerie</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-5 px-5 pb-5 bg-white">
          <a href="#services">Services</a>
          <a href="#about">À propos</a>
          <a href="#gallery">Galerie</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  )
}