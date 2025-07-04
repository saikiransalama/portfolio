import React, { useState, useEffect } from 'react';
import { BarChart3, Database, Code, Palette, Cloud, Zap, TrendingUp, Target, CheckCircle, Star, ArrowRight } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: boolean}>({});

  const skillCategories = [
    {
      id: 'programming',
      name: 'Programming Languages',
      icon: Code,
      description: 'Core programming skills for data manipulation and analysis'
    },
    {
      id: 'databases',
      name: 'Databases & SQL',
      icon: Database,
      description: 'Database management and query optimization expertise'
    },
    {
      id: 'analytics',
      name: 'Analytics & ML',
      icon: BarChart3,
      description: 'Statistical analysis and machine learning capabilities'
    },
    {
      id: 'visualization',
      name: 'Data Visualization',
      icon: Palette,
      description: 'Creating compelling visual stories from data'
    },
    {
      id: 'tools',
      name: 'Tools & Platforms',
      icon: Cloud,
      description: 'Modern analytics tools and cloud platforms'
    }
  ];

  const skills = {
    programming: [
      { name: 'Python', level: 95, experience: '3+ years', projects: 8, icon: '🐍' },
      { name: 'SQL', level: 90, experience: '3+ years', projects: 6, icon: '🗄️' },
      { name: 'R', level: 75, experience: '2+ years', projects: 4, icon: '📊' },
      { name: 'JavaScript', level: 70, experience: '1+ year', projects: 3, icon: '⚡' }
    ],
    databases: [
      { name: 'PostgreSQL', level: 90, experience: '3+ years', projects: 10, icon: '🐘' },
      { name: 'MySQL', level: 85, experience: '3+ years', projects: 8, icon: '🐬' },
      { name: 'MongoDB', level: 78, experience: '2+ years', projects: 5, icon: '🍃' },
      { name: 'Redis', level: 72, experience: '1+ year', projects: 4, icon: '🔴' },
      { name: 'Snowflake', level: 80, experience: '2+ years', projects: 6, icon: '❄️' }
    ],
    analytics: [
      { name: 'Statistical Analysis', level: 92, experience: '4+ years', projects: 20, icon: '📈' },
      { name: 'Machine Learning', level: 85, experience: '3+ years', projects: 12, icon: '🤖' },
      { name: 'Predictive Modeling', level: 88, experience: '3+ years', projects: 15, icon: '🔮' },
      { name: 'A/B Testing', level: 90, experience: '3+ years', projects: 18, icon: '🧪' },
      { name: 'Time Series Analysis', level: 82, experience: '2+ years', projects: 8, icon: '⏰' }
    ],
    visualization: [
      { name: 'Power BI', level: 90, experience: '3+ years', projects: 8, icon: '💼' },
      { name: 'Tableau', level: 85, experience: '2+ years', projects: 6, icon: '📊' },
      { name: 'MS Excel', level: 95, experience: '3+ years', projects: 10, icon: '📋' },
      { name: 'Matplotlib', level: 80, experience: '2+ years', projects: 5, icon: '📉' }
    ],
    tools: [
      { name: 'Jupyter Notebook', level: 90, experience: '3+ years', projects: 8, icon: '📓' },
      { name: 'BigQuery', level: 85, experience: '2+ years', projects: 6, icon: '☁️' },
      { name: 'Linux (Ubuntu)', level: 80, experience: '2+ years', projects: 5, icon: '🐧' },
      { name: 'Git', level: 75, experience: '2+ years', projects: 4, icon: '📝' }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(prev => ({
        ...prev,
        [activeCategory]: true
      }));
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-green-600';
    if (level >= 80) return 'from-blue-500 to-blue-600';
    if (level >= 70) return 'from-yellow-500 to-yellow-600';
    return 'from-gray-400 to-gray-500';
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)]">
      {/* Section Header */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-[var(--color-foreground)] to-[var(--color-muted)] bg-clip-text text-transparent">
          My Data Superpowers
        </h2>
        <p className="text-base md:text-xl text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
          From code to cloud, I wield the tools that turn data into business breakthroughs.
        </p>
      </div>
      {/* Skills Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {[
          { number: "4", label: "Programming Languages", icon: Code },
          { number: "8", label: "Academic Projects", icon: Target },
          { number: "3+", label: "Years Experience", icon: TrendingUp },
          { number: "3.9/4.0", label: "Master's CGPA", icon: Star }
        ].map((stat, index) => (
          <div key={index} className="card group p-4 md:p-6">
            <div className="flex items-center justify-center mb-2 md:mb-4">
              <div className="p-2 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent2)] rounded-xl group-hover:scale-110 transition-transform">
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
            </div>
            <div className="text-lg md:text-3xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent2)] bg-clip-text text-transparent mb-1 md:mb-2">
              {stat.number}
            </div>
            <div className="text-xs md:text-sm text-[var(--color-muted)] font-medium text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border-2 hover:scale-105 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
            }`}
          >
            <category.icon className="h-5 w-5 mr-2" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {skillCategories.find(cat => cat.id === activeCategory)?.name}
          </h3>
          <p className="text-gray-600">
            {skillCategories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>

        <div className="space-y-6">
          {skills[activeCategory as keyof typeof skills]?.map((skill, index) => (
            <div key={skill.name} className="bg-[var(--color-card)] rounded-2xl p-6 hover:bg-[var(--color-background)]/60 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--color-foreground)]">{skill.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-[var(--color-muted)]">
                      <span className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                        {skill.experience}
                      </span>
                      <span className="flex items-center">
                        <Target className="h-4 w-4 mr-1 text-[var(--color-accent)]" />
                        {skill.projects} projects
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-[var(--color-foreground)]">{skill.level}%</div>
                  <div className="text-sm text-[var(--color-muted)]">{getLevelText(skill.level)}</div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-[var(--color-border)] rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent2)] transition-all duration-1000 ease-out ${
                      animatedSkills[activeCategory] ? 'w-full' : 'w-0'
                    }`}
                    style={{ width: animatedSkills[activeCategory] ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Achievements */}
      <div className="mt-16 bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-accent2)]/10 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-6 text-center">
          Certifications & Achievements
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Google Data Analytics Professional Certificate",
              issuer: "Google",
              year: "2023",
              icon: "📊"
            },
            {
              title: "AWS Certified Cloud Practitioner",
              issuer: "Amazon Web Services",
              year: "2023",
              icon: "☁️"
            },
            {
              title: "Tableau Desktop Specialist",
              issuer: "Tableau",
              year: "2022",
              icon: "📈"
            }
          ].map((cert, index) => (
            <div key={index} className="card">
              <div className="text-3xl mb-4">{cert.icon}</div>
              <h4 className="font-semibold text-[var(--color-foreground)] mb-2">{cert.title}</h4>
              <div className="text-sm text-[var(--color-muted)]">
                <div>{cert.issuer}</div>
                <div>{cert.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="card">
          <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
            Let's put these skills to work—your next big win starts here.
          </h3>
          <p className="text-[var(--color-muted)] mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and apply my technical expertise to solve complex business problems.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5 mr-2" />
            Let's Discuss Your Needs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;