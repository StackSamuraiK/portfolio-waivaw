
import React from 'react';
import { Instagram  } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-neutral-950/70 border-b border-slate-200 dark:border-slate-800 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter">
          WAIVAW<span className="text-blue-500">.</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#work" className="hover:text-blue-500 transition-colors">Work</a>
          <a href="#stats" className="hover:text-blue-500 transition-colors">Analytics</a>
          <a href="#location" className="hover:text-blue-500 transition-colors">Location</a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2 hidden sm:block"></div>
          <div className="hidden sm:flex space-x-3">
            <Instagram size={18} className="cursor-pointer hover:text-pink-500 transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
