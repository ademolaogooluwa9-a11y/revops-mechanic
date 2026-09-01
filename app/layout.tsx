"use client";

import { useState } from "react";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-950 text-white font-sans antialiased">
        
        {/* ===== NAVBAR ===== */}
        <Navbar />

        {/* ===== PAGE CONTENT ===== */}
        <div className="flex-1">{children}</div>

        {/* ===== FOOTER ===== */}
        <Footer />

      </body>
    </html>
  );
}

// ============================================================
//  NAVBAR COMPONENT (Shared Across All Pages)
// ============================================================
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-4 bg-gray-950/90 border-b border-gray-800/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl md:text-2xl font-extrabold text-orange-500 tracking-tight">RevOps</span>
          <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight">Mechanic</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-orange-400 hover:text-orange-300 transition font-medium">Home</Link>
          <Link href="/about" className="text-sm text-gray-300 hover:text-white transition font-medium">About</Link>
          <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition font-medium">Contact</Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold text-sm transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200"
          >
            Free Audit
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white transition p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="absolute top-16 left-4 right-4 bg-gray-900/95 backdrop-blur-sm rounded-xl border border-gray-700/60 shadow-xl p-4 z-50">
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-white transition font-medium px-3 py-2 hover:bg-gray-800/50 rounded-lg"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-white transition font-medium px-3 py-2 hover:bg-gray-800/50 rounded-lg"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-white transition font-medium px-3 py-2 hover:bg-gray-800/50 rounded-lg"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold text-sm text-center transition shadow-lg shadow-orange-500/30"
                  onClick={toggleMenu}
                >
                  Free Audit
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

// ============================================================
//  FOOTER COMPONENT (Shared Across All Pages)
// ============================================================
function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-gray-800 bg-gray-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left: Copyright + Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="text-sm text-gray-400">
            &copy; 2026 RevOps Mechanic. All rights reserved.
          </span>
          <div className="flex gap-3">
            {/* Gmail */}
            <span 
              title="Gmail" 
              className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group"
            >
              <svg className="w-5 h-5 text-red-500 group-hover:text-white transition" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.164 1.075 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.269.268.431.643.431 1.068z"/>
              </svg>
            </span>

            {/* LinkedIn */}
            <span 
              title="LinkedIn" 
              className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group"
            >
              <svg className="w-5 h-5 text-blue-500 group-hover:text-white transition" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </span>

            {/* Twitter/X */}
            <span 
              title="Twitter" 
              className="w-10 h-10 bg-gray-800 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </span>

            {/* Instagram */}
            <span 
              title="Instagram" 
              className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group"
            >
              <svg className="w-5 h-5 text-pink-500 group-hover:text-white transition" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
        </div>

      </div>
    </footer>
  );
}