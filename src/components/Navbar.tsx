
import React, { useState } from 'react';
import { Instagram, Twitter, Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Work', href: '#work' },
    { label: 'Analytics', href: '#stats' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-neutral-950/70 border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter">
          WAIVAW<span className="text-blue-500">.</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-blue-500 transition-colors">{link.label}</a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-2 hidden sm:block"></div>
          <div className="hidden sm:flex space-x-3">
            <a href="https://www.instagram.com/vai05" target='_blank'>
            <Instagram size={18} className="cursor-pointer hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://x.com/CallMeVaii" target='_blank'>
            <Twitter size={18} className="cursor-pointer hover:text-blue-400 transition-colors" />
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-slate-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-blue-500 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-4 flex space-x-3">
              <a href="https://www.instagram.com/vai05" target='_blank'>
                <Instagram size={18} className="cursor-pointer hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
