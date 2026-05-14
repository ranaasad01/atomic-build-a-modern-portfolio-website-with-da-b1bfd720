"use client";

import { useState, useEffect } from "react";
import { Menu } from 'lucide-react';
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300 " +
          (scrolled
            ? "bg-[#0f0f0f]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent")
        }
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/25">
                A
              </div>
              <span className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                Alex Chen
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 " +
                      (isActive
                        ? "text-indigo-400 bg-indigo-500/10"
                        : "text-white/60 hover:text-white hover:bg-white/5")
                    }
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              >
                Resume
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={18} className="text-white/70" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
      />
    </>
  );
}
