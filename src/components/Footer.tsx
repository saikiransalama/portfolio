import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/saikiransalama', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'GitHub', href: 'https://github.com/saikiransalama', icon: Github, color: 'hover:text-gray-900' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'salamasaikiran@gmail.com', href: 'mailto:salamasaikiran@gmail.com' },
    { icon: MapPin, text: 'Hyderabad, India', href: '#' }
  ];

  return (
    <footer className="bg-[var(--color-card)] text-primary">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Brand Section */}
          {/* Quick Links Section */}
          {/* Info Section (right side) */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-divider)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-muted text-sm">
                © {currentYear} Saikiran Salama. All rights reserved.
              </span>
              <span className="mx-2 text-muted">•</span>
              <span className="text-muted text-sm flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-accent2" /> in Hyderabad, India
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-muted hover:text-primary text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-muted">•</span>
              <a
                href="#"
                className="text-muted hover:text-primary text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span className="text-muted">•</span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-surface rounded-xl hover:bg-card transition-all duration-300 group"
                title="Back to top"
              >
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#contact"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-accent to-accent2 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title="Get in touch"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;