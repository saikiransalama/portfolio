import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Mail, Github, Linkedin, Download, TrendingUp, BarChart3, Database, Zap, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const texts = [
    "Data-Driven Insights",
    "Business Intelligence",
    "Statistical Analysis",
    "Predictive Modeling"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "4+", label: "Years Experience", icon: TrendingUp },
    { number: "15+", label: "Projects Completed", icon: BarChart3 },
    { number: "95%", label: "Client Satisfaction", icon: Zap },
    { number: "6", label: "Programming Languages", icon: Database }
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Available for New Opportunities
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Saikiran Salama
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-2xl md:text-4xl font-semibold mb-8 h-12 flex items-center justify-center">
            <span className="text-gray-600 mr-3">I transform data into</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent min-w-[300px]">
              {texts[currentText]}
            </span>
            <span className="ml-2 animate-pulse">|</span>
          </div>

          {/* Compelling Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Recent Master of Science in Advanced Data Analytics graduate with a <span className="font-bold text-green-600">3.9/4.0 CGPA</span> from the University of North Texas. 
            Expert in <span className="font-semibold text-blue-600">Python</span>, <span className="font-semibold text-purple-600">SQL</span>, and <span className="font-semibold text-indigo-600">Power BI</span> with published research on COVID-19 enrollment analysis and crime prediction models.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <a 
              href="#projects" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center text-lg"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 backdrop-blur-sm transition-all duration-300 flex items-center text-lg"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Let's Talk
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
            <div className="flex items-center text-gray-600 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <MapPin className="h-5 w-5 mr-2 text-blue-600" />
              <span className="font-medium">Hyderabad, India</span>
            </div>
            <div className="flex items-center text-gray-600 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Mail className="h-5 w-5 mr-2 text-blue-600" />
              <span className="font-medium">saikiransalama@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/alexchen" 
              className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md hover:bg-white/70 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/alexchen" 
              className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md hover:bg-white/70 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="#resume" 
              className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md hover:bg-white/70 transition-all duration-300 group"
            >
              <Download className="h-6 w-6 text-gray-600 group-hover:text-green-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout} 
          className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md hover:bg-white/70 transition-all duration-300 animate-bounce"
        >
          <ChevronDown className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Hero;