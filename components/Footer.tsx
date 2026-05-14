import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, Heart } from 'lucide-react';
import { socialLinks, personalInfo } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] dark:bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
              <span className="font-semibold text-white">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-white/40">{personalInfo.title}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              if (!Icon) return null;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/30 flex items-center gap-1">
            Built with{" "}
            <Heart size={12} className="text-pink-500 fill-pink-500" />
            {" "}by {personalInfo.name} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
