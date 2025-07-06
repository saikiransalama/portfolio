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
import statisticalAnalysisLogo from '../assests/Statistical Analysis.png?url';
import machineLearningLogo from '../assests/Machine Learning.png?url';
import predictiveModelingLogo from '../assests/Predictive Modeling.png?url';
import timeSeriesLogo from '../assests/Time Series.png?url';
import abTestingLogo from '../assests/AB Testing.png?url';
import googleAdsLogo from '../assests/Google Display Ads .png';

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
      { name: 'Statistical Analysis', level: 92, experience: '4+ years', projects: 20, icon: statisticalAnalysisLogo },
      { name: 'Machine Learning', level: 85, experience: '3+ years', projects: 12, icon: machineLearningLogo },
      { name: 'Predictive Modeling', level: 88, experience: '3+ years', projects: 15, icon: predictiveModelingLogo },
      { name: 'A/B Testing', level: 90, experience: '3+ years', projects: 18, icon: abTestingLogo },
      { name: 'Time Series Analysis', level: 82, experience: '2+ years', projects: 8, icon: timeSeriesLogo }
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
    <div className="py-4 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)]">
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
                      {typeof skill.icon === 'string' && skill.icon.includes('.png') ? (
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
      <div className="mt-4 bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-accent2)]/10 rounded-3xl p-6">
        <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-6 text-center" style={{ fontFamily: 'Caudex, serif' }}>
          Certifications & Achievements
        </h3>
        <div className="grid md:grid-cols-3 gap-6 justify-center">
          {/* Google Ads Display Certification Card */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs bg-white rounded-2xl shadow-2xl p-2 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 duration-300">
              <h4 className="text-xl font-bold mb-1" style={{ fontFamily: 'Caudex, serif', color: 'black' }}>
                Google Ads Display Certification
              </h4>
              <div className="text-base font-semibold mb-0.5" style={{ color: 'black' }}>Saikiran Reddy Salama</div>
              <div className="text-xs mb-0.5" style={{ color: 'black' }}>Has successfully completed and is certified in</div>
              <div className="text-sm font-medium mb-1" style={{ color: 'black' }}>Google Ads Display Certification</div>
              <div className="flex flex-col gap-0 text-xs mb-1" style={{ color: 'black' }}>
                <div><span className="font-semibold">Issue Date:</span> June 28, 2025</div>
                <div><span className="font-semibold">Expiry Date:</span> June 28, 2026</div>
                <div><span className="font-semibold">Certificate ID:</span> 153601841</div>
              </div>
              <a
                href="https://skillshop.credential.net/82d987ef-d160-471e-aa22-b920dc970609#acc.wbuj5KeR"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-1 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 transition-colors duration-200 text-sm"
              >
                Verify
              </a>
            </div>
          </div>
          {/* Google IT Support Certificate Card */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs bg-white rounded-2xl shadow-2xl p-2 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 duration-300">
              <h4 className="text-xl font-bold mb-1" style={{ fontFamily: 'Caudex, serif', color: 'black' }}>
                Google IT Support
              </h4>
              <div className="text-base font-semibold mb-0.5" style={{ color: 'black' }}>Saikiran Reddy Salama</div>
              <div className="text-xs mb-0.5" style={{ color: 'black' }}>Professional Certificate</div>
              <div className="text-xs mb-0.5" style={{ color: 'black' }}>Issued: Jun 29, 2025</div>
              <div className="text-xs mb-1" style={{ color: 'black' }}>Coursera / Google</div>
              <a
                href="https://coursera.org/verify/professional-cert/2B6BT01ZDV4K"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-1 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 transition-colors duration-200 text-sm"
              >
                Verify
              </a>
            </div>
          </div>
          {/* Udemy Probability and Statistics Certificate Card */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs bg-white rounded-2xl shadow-2xl p-2 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 duration-300">
              <h4 className="text-xl font-bold mb-1" style={{ fontFamily: 'Caudex, serif', color: 'black' }}>
                Workshop in Probability and Statistics
              </h4>
              <div className="text-base font-semibold mb-0.5" style={{ color: 'black' }}>Saikiran Reddy Salama</div>
              <div className="text-xs mb-0.5" style={{ color: 'black' }}>Certificate of Completion</div>
              <div className="text-xs mb-0.5" style={{ color: 'black' }}>Issued: Jan 24, 2023</div>
              <div className="text-xs mb-1" style={{ color: 'black' }}>Udemy / George Ingersoll</div>
              <a
                href="https://www.udemy.com/certificate/UC-03d43da9-278d-4b53-b963-c08d975cc568/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-1 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 transition-colors duration-200 text-sm"
              >
                Verify
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;