import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Clock, CheckCircle, ArrowRight, Linkedin, Github } from 'lucide-react';
import XLogo from '../assests/x.png';
import LinkedInLogo from '../assests/LinkedIn.png';
import GmailLogo from '../assests/gmail.png';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4L20 20M20 4L4 20" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "salamasaikiran@gmail.com",
      description: "I typically respond within 24 hours",
      action: "mailto:salamasaikiran@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/saikiransalama",
      description: "Connect with me professionally",
      action: "https://linkedin.com/in/saikiransalama"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, India",
      description: "Open to remote and hybrid opportunities",
      action: "#"
    }
  ];

  const availability = [
    {
      day: "Monday - Friday",
      time: "9:00 AM - 6:00 PM PST",
      status: "Available"
    },
    {
      day: "Saturday",
      time: "10:00 AM - 2:00 PM PST",
      status: "Limited"
    },
    {
      day: "Sunday",
      time: "By appointment only",
      status: "Closed"
    }
  ];

  const quickActions = [
    {
      title: "Schedule a Call",
      description: "Book a 30-minute consultation to discuss your project",
      icon: Calendar,
      action: "#",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "View Portfolio",
      description: "Explore my latest projects and case studies",
      icon: MessageSquare,
      action: "#projects",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "Download Resume",
      description: "Get my complete resume with detailed experience",
      icon: Send,
      action: "#resume",
      color: "from-orange-600 to-red-600"
    }
  ];

  // Add the new intro card content
  const introCard = (
    <div className="bg-white rounded-xl shadow border border-gray-100 p-3 flex flex-col justify-center items-center h-full">
      <h3 className="text-2xl font-extrabold text-gray-900 mb-1" style={{ fontFamily: 'Caudex, serif' }}>
        Saikiran R. Salama
      </h3>
      <div className="text-xs font-semibold text-gray-700 mb-1" style={{ fontFamily: 'Avenir Light, sans-serif' }}>
        Data Analytics Graduate & Research Professional
      </div>
      <div className="text-center text-lg text-gray-700 font-bold mb-2" style={{ fontFamily: 'Avenir Light, sans-serif' }}>
        Data isn't just my job it's my passion.<br/>Let's unlock insights and create impact together.
      </div>
      <div className="flex flex-row gap-3 mt-2">
        <a href="https://www.linkedin.com/in/saikiransalama/" className="rounded-full bg-gray-100 hover:bg-blue-100 p-2 transition-colors flex items-center justify-center" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn" className="h-6 w-6" />
        </a>
        <a href="mailto:salamasaikiran@gmail.com" className="rounded-full bg-gray-100 hover:bg-red-100 p-2 transition-colors flex items-center justify-center" title="Gmail">
          <img src={GmailLogo} alt="Gmail" className="h-6 w-6" />
        </a>
        <a href="https://github.com/saikiransalama" className="rounded-full bg-gray-100 hover:bg-black/80 p-2 transition-colors flex items-center justify-center" title="GitHub" target="_blank" rel="noopener noreferrer">
          <Github className="h-6 w-6 text-black" />
        </a>
        <a href="#" className="rounded-full bg-gray-100 hover:bg-blue-100 p-2 transition-colors flex items-center justify-center" title="X">
          <img src={XLogo} alt="X" className="h-6 w-6" />
        </a>
      </div>
    </div>
  );

  // Update availability times to IST
  const availabilityIST = [
    {
      day: "Monday - Friday",
      time: "9:00 AM - 6:00 PM IST",
      status: "Available"
    },
    {
      day: "Saturday",
      time: "10:00 AM - 2:00 PM IST",
      status: "Limited"
    },
    {
      day: "Sunday",
      time: "By appointment only",
      status: "Closed"
    }
  ];

  return (
    <div id="contact" className="py-4 px-2 bg-[var(--color-background)] pb-24">
      {/* Section Header */}
      <div className="text-center mb-2">
        <h2 className="text-2xl md:text-4xl font-bold mb-1 text-black" style={{ fontFamily: 'Caudex, serif' }}>
          Ready to Collaborate?
        </h2>
        <p className="text-sm md:text-base text-muted max-w-2xl mx-auto leading-snug">
          Let's team up to turn your data into your next big advantage. Reach out let's make something amazing happen.
        </p>
      </div>

      {/* Responsive 2-column layout: left = 2x2 grid, right = Send Me a Message */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch mb-3 h-full">
        {/* Left: 2x2 grid of squares (4 cards) */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 col-span-1 md:col-span-3 h-full">
          {/* Availability (top left) */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-3 flex flex-col justify-center items-stretch h-full">
            <div className="flex items-center mb-1">
              <Clock className="h-5 w-5 mr-2 text-black" />
              <h3 className="text-lg font-bold text-gray-900">Availability</h3>
            </div>
            <div className="space-y-1 flex-1 flex flex-col justify-center">
              {availabilityIST.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-1 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-900 text-xs">{schedule.day}</div>
                    <div className="text-xs text-gray-600">{schedule.time}</div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    schedule.status === 'Available' ? 'bg-green-100 text-green-700' :
                    schedule.status === 'Limited' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {schedule.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions (top right) */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-3 flex flex-col justify-center items-stretch h-full">
            <div className="flex items-center mb-1">
              <h3 className="text-lg font-bold text-[var(--color-foreground)]">Quick Actions</h3>
            </div>
            <div className="flex flex-col gap-1 flex-1 justify-center">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.action}
                  className="group flex items-center p-1 bg-[var(--color-card)] rounded-lg hover:bg-[var(--color-background)]/60 transition-all duration-300"
                >
                  <div className={`p-1 bg-gray-300 rounded-lg mr-2 group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm md:text-base text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors truncate">
                      {action.title}
                    </h4>
                    <p className="text-xs text-[var(--color-muted)] truncate">{action.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--color-border)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Intro Card (bottom left) */}
          {introCard}

          {/* Connect With Me (bottom right) */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-3 flex flex-col justify-center h-full">
            <div className="flex items-center mb-3">
              <h3 className="text-lg font-bold text-[var(--color-foreground)]">Connect With Me</h3>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <a
                href="https://www.linkedin.com/in/saikiransalama/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2 px-3 rounded-lg font-semibold text-white text-sm transition-colors group"
                style={{ backgroundColor: '#0077B5' }}
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/saikiransalama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2 px-3 rounded-lg font-semibold text-white text-sm transition-colors group"
                style={{ backgroundColor: '#181717' }}
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
              <button
                type="button"
                className="flex items-center justify-center w-full py-2 px-3 rounded-lg font-semibold text-white text-sm transition-colors group cursor-default"
                style={{ backgroundColor: '#1DA1F2' }}
                disabled
                aria-label="X (placeholder)"
              >
                <img src={XLogo} alt="X logo" className="h-5 w-5 mr-2" />
                X
              </button>
            </div>
          </div>
        </div>

        {/* Right: Send Me a Message (spans both rows) */}
        <div className="col-span-1 md:col-span-2 flex flex-col h-full">
          <div className="bg-white rounded-xl shadow border border-gray-100 p-3 flex flex-col justify-center items-stretch h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Send Me a Message</h3>
            {submitted ? (
              <div className="text-center py-8 flex-1 flex flex-col justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-center">
                {/* Honeypot field for spam protection */}
                <input type="text" name="honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <div className="grid grid-cols-1 gap-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs"
                    >
                      <option value="">Select a subject</option>
                      <option value="job-opportunity">Job Opportunity</option>
                      <option value="project-collaboration">Project Collaboration</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="networking">Networking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs resize-none"
                      placeholder="Tell me about your project, opportunity, or how I can help..."
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-800 text-white py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-xs"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;