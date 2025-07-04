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
          <div className="lg:col-span-2 mb-4 md:mb-0">
            <div className="mb-3 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                Saikiran Salama
              </h3>
              <p className="text-accent font-semibold text-sm md:text-base">Data Analytics Graduate & Research Professional</p>
            </div>
            <p className="text-muted mb-3 md:mb-6 leading-relaxed text-xs md:text-base">
              Data isn't just my job—it's my passion. Let's unlock insights and create impact together.
            </p>
            <div className="flex space-x-2 md:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 md:p-4 bg-primary border border-[var(--color-border)] rounded-2xl hover:bg-accent hover:text-white transition-all duration-300 ${social.color}`}
                  style={{ minWidth: 44, minHeight: 44 }}
                >
                  <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links Section */}
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs card py-4 md:py-6 px-4 md:px-6 flex flex-col items-start space-y-2 md:space-y-4">
              <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-primary">Quick Links</h4>
              <ul className="w-full space-y-1 md:space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Resume', href: '#resume' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name} className="w-full">
                    <a
                      href={link.href}
                      className="block w-full py-2 md:py-3 px-2 md:px-3 rounded-md text-primary font-medium hover:bg-accent/10 hover:text-accent transition-colors text-xs md:text-base"
                      style={{ minHeight: 44 }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Info Section (right side) */}
          <div className="col-span-1 flex flex-col items-end space-y-2 md:space-y-4">
            {/* Email Card */}
            <div className="flex items-center bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl px-3 md:px-4 py-1.5 md:py-2 shadow-sm text-xs md:text-base">
              <Mail className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 text-[var(--color-accent)]" />
              <span className="font-medium text-[var(--color-foreground)]">salamasaikiran@gmail.com</span>
            </div>
            {/* Location Card */}
            <div className="flex items-center bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl px-3 md:px-4 py-1.5 md:py-2 shadow-sm text-xs md:text-base">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 text-[var(--color-accent)]" />
              <span className="font-medium text-[var(--color-foreground)]">Hyderabad, India</span>
            </div>
          </div>
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