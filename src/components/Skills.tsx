import React, { useState, useEffect } from 'react';
import { BarChart3, Database, Code, Palette, Cloud, Zap, TrendingUp, Target, CheckCircle, Star, ArrowRight } from 'lucide-react';
import pythonLogo from '../assests/python.png';
import reactLogo from '../assests/react.png';
import javascriptLogo from '../assests/javascript.png';
import mysqlLogo from '../assests/mysql.png';
import postgresqlLogo from '../assests/postgresql.png';
import mongodbLogo from '../assests/mongodb.png';
import jupyterLogo from '../assests/jupyter.png';
import bigqueryLogo from '../assests/googlebigquery.png';
import viteLogo from '../assests/vite.png';
import linuxLogo from '../assests/linux.png';
import gitLogo from '../assests/git.png';
import powerbiLogo from '../assests/PowerBI.png?url';
import tableauLogo from '../assests/Tableau.png?url';
import msexcelLogo from '../assests/MSExcel.png?url';
import matplotlibLogo from '../assests/Matplotlib.png?url';

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
      { name: 'Python', level: 95, experience: '3+ years', projects: 8, icon: pythonLogo },
      { name: 'React', level: 90, experience: '3 months', projects: 1, icon: reactLogo },
      { name: 'JavaScript', level: 75, experience: '3 months', projects: 1, icon: javascriptLogo }
    ],
    databases: [
      { name: 'PostgreSQL', level: 90, experience: '3+ years', projects: 10, icon: postgresqlLogo },
      { name: 'MySQL', level: 85, experience: '3+ years', projects: 8, icon: mysqlLogo },
      { name: 'MongoDB', level: 78, experience: '2+ years', projects: 5, icon: mongodbLogo }
    ],
    analytics: [
      { name: 'Statistical Analysis', level: 92, experience: '4+ years', projects: 20, icon: '📈' },
      { name: 'Machine Learning', level: 85, experience: '3+ years', projects: 12, icon: '🤖' },
      { name: 'Predictive Modeling', level: 88, experience: '3+ years', projects: 15, icon: '🔮' },
      { name: 'A/B Testing', level: 90, experience: '3+ years', projects: 18, icon: '🧪' },
      { name: 'Time Series Analysis', level: 82, experience: '2+ years', projects: 8, icon: '⏰' }
    ],
    visualization: [
      { name: 'Power BI', level: 90, experience: '3+ years', projects: 8, icon: powerbiLogo },
      { name: 'Tableau', level: 85, experience: '2+ years', projects: 6, icon: tableauLogo },
      { name: 'MS Excel', level: 95, experience: '3+ years', projects: 10, icon: msexcelLogo },
      { name: 'Matplotlib', level: 80, experience: '2+ years', projects: 5, icon: matplotlibLogo }
    ],
    tools: [
      { name: 'Jupyter Notebook', level: 90, experience: '3+ years', projects: 8, icon: jupyterLogo },
      { name: 'BigQuery', level: 85, experience: '2+ years', projects: 6, icon: bigqueryLogo },
      { name: 'Vite', level: 80, experience: '3 months', projects: 1, icon: viteLogo },
      { name: 'Linux (Ubuntu)', level: 80, experience: '2+ years', projects: 5, icon: linuxLogo },
      { name: 'Git', level: 75, experience: '2+ years', projects: 4, icon: gitLogo }
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
        <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[var(--color-foreground)]" style={{ fontFamily: 'Caudex, serif' }}>
          My Data Superpowers
        </h2>
        <p className="text-base md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          From code to cloud, I wield the tools that turn data into business breakthroughs.
        </p>
      </div>
      {/* Compact grid for all skill categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {skillCategories.map((category) => (
          <div key={category.id} className="group bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex flex-col h-full hover:scale-105 transition-transform duration-300">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center" style={{ fontFamily: 'Caudex, serif' }}>
                {category.name}
              </h3>
              <p className="text-xs text-gray-600 mb-2 text-center">
                {category.description}
              </p>
            </div>
            <div className="space-y-3">
              {skills[category.id as keyof typeof skills]?.map((skill, index) => (
                <div key={skill.name} className="bg-[var(--color-card)] rounded-xl p-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      {typeof skill.icon === 'string' && skill.icon.endsWith('.png') ? (
                        <img src={skill.icon} alt={`${skill.name} logo`} className="w-5 h-5 mr-2" />
                      ) : (
                        <span className="text-lg mr-2">{skill.icon}</span>
                      )}
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--color-foreground)]">{skill.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
                          <span className="flex items-center">
                            <CheckCircle className="h-3 w-3 mr-1 text-green-600" />
                            {skill.experience}
                          </span>
                          <span className="flex items-center">
                            <Target className="h-3 w-3 mr-1 text-[var(--color-accent)]" />
                            {skill.projects} projects
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[var(--color-foreground)]">{skill.level}%</div>
                      <div className="text-xs text-[var(--color-muted)]">{getLevelText(skill.level)}</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-[var(--color-border)] rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent2)] w-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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