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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Saikiran Salama
              </h3>
              <p className="text-blue-300 font-semibold">Data Analytics Graduate & Research Professional</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Recent Master's graduate in Advanced Data Analytics with published research and expertise in machine learning. 
              Specialized in statistical analysis, predictive modeling, and data visualization.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="p-2 bg-gray-800 rounded-xl mr-3 group-hover:bg-gray-700 transition-colors">
                      <contact.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-gray-400 text-sm">
                © {currentYear} Saikiran Salama. All rights reserved.
              </span>
              <span className="mx-2 text-gray-600">•</span>
              <span className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in Hyderabad, India
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span className="text-gray-600">•</span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
                title="Back to top"
              >
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#contact"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title="Get in touch"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;