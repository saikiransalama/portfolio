import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState('light');

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'resume', 'contact'];
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-bold text-white text-lg md:text-xl">Portfolio</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors duration-200 ${activeSection === item.href.substring(1) ? 'bg-indigo-400 text-white' : 'text-white hover:bg-indigo-700/60'}`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-2">
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-indigo-700/60 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[var(--color-header)] px-4 pb-4 pt-2 flex flex-col space-y-2 shadow-lg">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${activeSection === item.href.substring(1) ? 'bg-indigo-400 text-white' : 'text-white hover:bg-indigo-700/60'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;