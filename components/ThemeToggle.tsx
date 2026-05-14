"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-200 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <Sun
        size={16}
        className="absolute transition-all duration-300 text-amber-400 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={16}
        className="absolute transition-all duration-300 text-indigo-400 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}
