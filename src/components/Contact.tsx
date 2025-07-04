import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Clock, CheckCircle, ArrowRight, Linkedin, Github, Twitter } from 'lucide-react';

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
      value: "saikiransalama@gmail.com",
      description: "I typically respond within 24 hours",
      action: "mailto:saikiransalama@gmail.com"
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

  return (
    <div className="py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I'm always excited to discuss research opportunities, collaborate on data analysis projects, or connect with fellow analytics professionals.
        </p>
      </div>

      {/* Contact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.action}
            className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                <info.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{info.title}</h3>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            </div>
            <div className="text-lg font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
              {info.value}
            </div>
          </a>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
          
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
              <p className="text-gray-600">Thank you for reaching out. I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="project-collaboration">Project Collaboration</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="networking">Networking</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, opportunity, or how I can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Quick Actions */}
        <div className="space-y-8">
          {/* Availability */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-3 text-blue-600" />
              Availability
            </h3>
            <div className="space-y-4">
              {availability.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <div className="font-semibold text-gray-900">{schedule.day}</div>
                    <div className="text-sm text-gray-600">{schedule.time}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
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

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.action}
                  className="group block p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className={`p-3 bg-gradient-to-r ${action.color} rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {action.title}
                      </h4>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center p-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors group"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://github.com/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center p-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-colors group"
              >
                <Github className="h-5 w-5 mr-2" />
                <span className="font-semibold">GitHub</span>
              </a>
              <a
                href="https://twitter.com/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center p-4 bg-blue-400 text-white rounded-2xl hover:bg-blue-500 transition-colors group"
              >
                <Twitter className="h-5 w-5 mr-2" />
                <span className="font-semibold">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Data?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you need help with data analysis, want to discuss a project, or just want to connect, 
            I'm here to help. Let's turn your data challenges into opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:alex.chen@email.com"
              className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;