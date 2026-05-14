"use client";

import { useEffect } from "react";
import { X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  activeSection: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  activeSection,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = (href: string) => {
    onClose();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-full w-72 bg-[#0f0f0f] dark:bg-[#0a0a0a] border-l border-white/10 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-lg font-semibold text-white">Menu</span>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X size={18} className="text-white/70" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-6">
              {navLinks.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                const activeClass = "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30";
                const inactiveClass = "text-white/70 hover:text-white hover:bg-white/5";
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={() => handleClick(link.href)}
                    className={"text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 " + (isActive ? activeClass : inactiveClass)}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </nav>
            <div className="mt-auto p-6 border-t border-white/10">
              <p className="text-xs text-white/30 text-center">Alex Chen &middot; Portfolio 2024</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
