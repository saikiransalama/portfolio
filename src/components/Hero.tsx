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
    <div className="relative py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-background)]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--color-accent2)]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>     {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="flex items-center px-6 py-3 bg-[var(--color-accent)] rounded-full shadow-lg text-white text-lg md:text-2xl font-bold tracking-wide" style={{letterSpacing: '0.03em'}}>
              <span className="w-4 h-4 bg-[var(--color-accent2)] rounded-full mr-3 animate-pulse border-2 border-white shadow" />
              <span className="drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.15)'}}>Open to Game-Changing Roles</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 leading-tight text-[var(--color-foreground)]">
            <span className="bg-gradient-to-r from-[var(--color-foreground)] via-[var(--color-accent)] to-[var(--color-accent2)] bg-clip-text text-transparent">
              Saikiran Salama: Turning Data Into Opportunity
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-xl md:text-2xl font-semibold mb-6 h-10 flex items-center justify-center text-[var(--color-secondary)]">
            <span className="mr-2">I turn raw data into:</span>
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent2)] bg-clip-text text-transparent min-w-[180px]">
              {['Breakthrough Insights','Business Wins','Predictive Power','Smart Decisions'][currentText]}
            </span>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-[var(--color-secondary)] mb-6 max-w-2xl mx-auto leading-relaxed">
            Data Analytics trailblazer (<span className="font-bold text-[var(--color-highlight)]">3.9/4.0 CGPA</span>, UNT) with a knack for <span className="font-semibold text-[var(--color-accent)]">Python</span>, <span className="font-semibold text-[var(--color-accent2)]">SQL</span>, and <span className="font-semibold text-[var(--color-highlight)]">Power BI</span>. Published researcher—my work on COVID-19 enrollment is shaping real-world decisions.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 group p-4 md:p-6 bg-[var(--color-surface)] backdrop-blur-md rounded-2xl">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent2)] rounded-xl group-hover:scale-110 transition-transform">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent2)] bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-[var(--color-secondary)] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
            <a 
              href="#projects" 
              className="group bg-[var(--color-button-primary-fill)] text-[var(--color-button-primary-text)] px-6 py-2 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center text-base min-h-[44px] border-2 border-[var(--color-button-primary-border)] hover:bg-[var(--color-button-primary-hover-fill)] hover:text-[var(--color-button-primary-hover-text)]"
            >
              See My Impact
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="group bg-[var(--color-button-secondary-fill)] text-[var(--color-button-secondary-text)] px-6 py-2 rounded-2xl font-semibold border-2 border-[var(--color-button-secondary-border)] hover:bg-[var(--color-button-secondary-hover-fill)] hover:text-[var(--color-button-secondary-hover-text)] transition-all duration-300 flex items-center text-base min-h-[44px]"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Start a Conversation
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-2 md:space-x-4 mb-6">
            <a 
              href="https://github.com/saikiransalama" 
              className="p-3 md:p-4 bg-[var(--color-surface)] rounded-2xl shadow-sm hover:shadow-md hover:bg-[var(--color-accent)] transition-all duration-300 group min-h-[44px] min-w-[44px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 text-[var(--color-foreground)] group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/saikiransalama/" 
              className="p-3 md:p-4 bg-[var(--color-surface)] rounded-2xl shadow-sm hover:shadow-md hover:bg-[var(--color-accent)] transition-all duration-300 group min-h-[44px] min-w-[44px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 text-[var(--color-foreground)] group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#resume" 
              className="p-3 md:p-4 bg-[var(--color-surface)] rounded-2xl shadow-sm hover:shadow-md hover:bg-[var(--color-accent)] transition-all duration-300 group min-h-[44px] min-w-[44px]"
            >
              <Download className="h-6 w-6 text-[var(--color-foreground)] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout} 
          className="p-3 bg-[var(--color-surface)] rounded-2xl shadow-sm hover:shadow-md hover:bg-[var(--color-accent)] transition-all duration-300 animate-bounce min-h-[44px] min-w-[44px]"
        >
          <ChevronDown className="h-5 w-5 text-[var(--color-foreground)] hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default Hero;