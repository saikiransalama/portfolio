import React, { useState } from 'react';
import { Award, TrendingUp, Users, Target, CheckCircle, ArrowRight, BarChart3, Database, Zap, Globe, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const achievements = [
    { number: "3.9/4.0", label: "Master's CGPA", icon: TrendingUp, color: "text-green-600" },
    { number: "2", label: "Research Papers", icon: Zap, color: "text-blue-600" },
    { number: "8M+", label: "Crime Records Analyzed", icon: Users, color: "text-purple-600" },
    { number: "100%", label: "Training Pass Rate", icon: Award, color: "text-orange-600" }
  ];

  const skills = [
    { category: "Programming", items: ["Python", "R", "SQL", "JavaScript"], icon: Database },
    { category: "Analytics", items: ["Statistical Analysis", "Machine Learning", "Predictive Modeling", "A/B Testing"], icon: BarChart3 },
    { category: "Visualization", items: ["Tableau", "Power BI", "Matplotlib"], icon: Target },
    { category: "Tools", items: ["Excel", "Google Analytics", "Git"], icon: Zap }
  ];

  const values = [
    { title: "Data-Driven Decisions", description: "Every recommendation is backed by solid data analysis and statistical rigor", icon: Target },
    { title: "Business Impact", description: "Focus on actionable insights that drive measurable business outcomes", icon: TrendingUp },
    { title: "Continuous Learning", description: "Stay current with latest tools, techniques, and industry trends", icon: Lightbulb },
    { title: "Ethical Analytics", description: "Ensure data privacy and ethical use of analytics in all projects", icon: Shield }
  ];

  return (
    <div className="py-4 md:py-8 px-2 sm:px-4 lg:px-8 bg-[var(--color-background)]">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[var(--color-foreground)]" style={{ fontFamily: 'Caudex, serif' }}>
          Meet Your Next Data Partner
        </h2>
        <p className="text-base md:text-lg text-[var(--color-secondary)] max-w-xl mx-auto leading-relaxed">
          Transforming data into actionable insights that drive business growth
        </p>
      </div>

      {/* Four Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1st Card: My Journey */}
        <div className="card bg-[var(--color-card-bg)] rounded-2xl shadow-sm flex flex-col h-full p-6">
          <h3 className="text-2xl font-bold mb-6 text-[var(--color-foreground)] text-center" style={{ fontFamily: 'Caudex, serif' }}>
            My Journey in Data Analytics
          </h3>
          <p className="text-[var(--color-secondary)] mb-4 leading-relaxed text-justify">
            From coding in college to publishing research that matters, my journey is all about using data to solve real problems. At Amazon, I didn't just analyze numbers. I made them work for people.
          </p>
          <p className="text-[var(--color-secondary)] leading-relaxed text-justify">
            I specialize in advanced analytics and machine learning, with published research on COVID-19 enrollment analysis. My experience at Amazon as a Flex Payment Investigator & SME has honed my analytical skills and business acumen.
          </p>
              </div>

        {/* 2nd Card: What I Bring to the Table */}
        <div className="card bg-[var(--color-card-bg)] rounded-2xl shadow-sm flex flex-col h-full p-6">
          <h3 className="text-2xl font-bold mb-6 text-[var(--color-foreground)] text-center" style={{ fontFamily: 'Caudex, serif' }}>
            What I Bring to the Table
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <span className="text-[var(--color-secondary)] text-base font-medium">Machine learning with millions of real-world records</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <span className="text-[var(--color-secondary)] text-base font-medium">Fluent in Python, SQL, Power BI, Tableau</span>
            </li>
          </ul>
        </div>

        {/* 3rd Card: Technical Skills & Tools */}
        <div className="card bg-[var(--color-card-bg)] rounded-2xl shadow-sm flex flex-col h-full p-6">
          <h3 className="text-2xl font-bold mb-6 text-[var(--color-foreground)] text-center" style={{ fontFamily: 'Caudex, serif' }}>
            Technical Skills & Tools
          </h3>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.category} className="mb-4">
                <div className="flex items-center mb-1">
                  <div className="p-2 bg-[var(--color-card-bg)] rounded-xl mr-3 flex-shrink-0 flex items-center justify-center" style={{ width: 40, height: 40 }}>
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-lg text-[var(--color-foreground)]" style={{ fontFamily: 'Caudex, serif' }}>{skill.category}</span>
                </div>
                <div className="flex flex-wrap gap-2 ml-12">
                  {skill.items.map((item) => (
                    <span key={item} className="bg-black/10 text-[var(--color-foreground)] px-3 py-1 rounded-full text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

        {/* 4th Card: My Core Values */}
        <div className="card bg-[var(--color-card-bg)] rounded-2xl shadow-sm flex flex-col h-full p-6">
          <h3 className="text-2xl font-bold mb-6 text-[var(--color-foreground)] text-center" style={{ fontFamily: 'Caudex, serif' }}>
            My Core Values
          </h3>
          <div className="space-y-6">
                {values.map((value, index) => (
              <div key={index} className="flex items-start mb-2">
                <div className="p-2 bg-[var(--color-card-bg)] rounded-xl mr-4 flex-shrink-0 flex items-center justify-center" style={{ width: 40, height: 40 }}>
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                  <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-1" style={{ fontFamily: 'Caudex, serif' }}>{value.title}</h4>
                  <p className="text-base text-[var(--color-secondary)] leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
        </div>
      </div>
    </div>
  );
};

export default About;