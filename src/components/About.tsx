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
    { category: "Visualization", items: ["Tableau", "Power BI", "D3.js", "Matplotlib"], icon: Target },
    { category: "Tools", items: ["Excel", "Google Analytics", "AWS", "Git"], icon: Zap }
  ];

  const values = [
    { title: "Data-Driven Decisions", description: "Every recommendation is backed by solid data analysis and statistical rigor", icon: Target },
    { title: "Business Impact", description: "Focus on actionable insights that drive measurable business outcomes", icon: TrendingUp },
    { title: "Continuous Learning", description: "Stay current with latest tools, techniques, and industry trends", icon: Lightbulb },
    { title: "Ethical Analytics", description: "Ensure data privacy and ethical use of analytics in all projects", icon: Shield }
  ];

  return (
    <div className="py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Recent Master of Science in Advanced Data Analytics graduate with published research on COVID-19 enrollment analysis and crime prediction models using machine learning.
        </p>
      </div>

      {/* Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl group-hover:scale-110 transition-transform">
                <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
              </div>
            </div>
            <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
              {achievement.number}
            </div>
            <div className="text-sm text-gray-600 font-medium text-center">
              {achievement.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tabbed Content */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          {[
            { id: 'story', label: 'My Story', icon: Users },
            { id: 'skills', label: 'Skills & Tools', icon: Database },
            { id: 'values', label: 'Values', icon: Target }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center py-6 px-4 font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="h-5 w-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === 'story' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">My Journey in Data Analytics</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    My passion for data began during my Bachelor's in Computer Science at Osmania University, where I discovered the power of transforming raw numbers into meaningful insights. I've since completed my Master's in Advanced Data Analytics at the University of North Texas with a 3.9/4.0 CGPA.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I specialize in advanced analytics and machine learning, with published research on COVID-19 enrollment analysis and crime prediction models using over 8 million records. My experience at Amazon as a Flex Payment Investigator & SME has honed my analytical skills and business acumen.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group cursor-pointer">
                    <span>Read my full story</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">What I Bring to the Table</h4>
                  <ul className="space-y-3">
                    {[
                      "Master's in Advanced Data Analytics (3.9/4.0 CGPA)",
                      "Published research on COVID-19 enrollment analysis",
                      "Advanced machine learning with 8M+ crime records",
                      "Amazon Flex Payment Investigator & SME experience",
                      "Expertise in Python, SQL, Power BI, and Tableau"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Technical Skills & Tools</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mr-3">
                        <skillGroup.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">My Core Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                    <div className="flex items-start">
                      <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mr-4">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;