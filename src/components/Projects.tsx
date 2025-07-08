import React, { useState } from 'react';
import { ExternalLink, Github, BarChart3, TrendingUp, Users, DollarSign, Calendar, ArrowRight, Play, Eye, Code, Database, Zap } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "COVID-19 Enrollment Analysis",
      subtitle: "Published research on pandemic impact on US education",
      description: "Conducted quantitative analysis of COVID-19's impact on undergraduate enrollment in the United States, published in Proceedings of the 6th International Conference on Data Analytics & Management (ICDAM 2025).",
      impact: {
        published: "ICDAM 2025",
        analysis: "Quantitative",
        scope: "US Education",
        impact: "Policy"
      },
      tech: ["Python", "Pandas", "Statistical Analysis", "Research"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      category: "Research",
      duration: "6 months",
      team: "Individual"
    },
    {
      id: 2,
      title: "Chicago Crime Prediction Model",
      subtitle: "Analyzed 8M+ crime records with ML models",
      description: "Developed advanced machine learning models including XGBoost, LSTM, and Facebook Prophet for crime prediction and time-series forecasting using over 8 million crime records from Chicago (2001-2025).",
      impact: {
        records: "8M+",
        models: "XGBoost/LSTM",
        accuracy: "High",
        status: "Under Review"
      },
      tech: ["Python", "XGBoost", "LSTM", "Prophet"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Machine Learning",
      duration: "8 months",
      team: "Individual"
    },
    {
      id: 3,
      title: "Netflix Content Analysis",
      subtitle: "Team-based analysis of content library trends",
      description: "Led comprehensive analysis of Netflix's content library using Python, Pandas, BigQuery, and SQL to identify trends and provide actionable insights into content strategy and viewer preferences.",
      impact: {
        tools: "Python/SQL",
        viz: "Power BI",
        presentation: "Prezi",
        team: "Collaborative"
      },
      tech: ["Python", "Pandas", "BigQuery", "Power BI"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      category: "Data Analysis",
      duration: "3 months",
      team: "4 students"
    },
    {
      id: 4,
      title: "Hotel Cancellation Analysis",
      subtitle: "Reduced cancellation rates through data insights",
      description: "Analyzed hotel dataset using Python, Pandas, and statistical analysis (Regression and ANOVA) to identify trends and provide actionable insights into reducing hotel booking cancellations.",
      impact: {
        analysis: "Regression",
        method: "ANOVA",
        eda: "Correlation Matrix",
        focus: "Reduction"
      },
      tech: ["Python", "Pandas", "Regression", "ANOVA"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Statistical Analysis",
      duration: "2 months",
      team: "3 students"
    }
  ];

  const categories = ["All", "Research", "Machine Learning", "Data Analysis", "Statistical Analysis"];

  // Filter projects based on activeCategory
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  // Ensure activeProject index is within filteredProjects
  const safeActiveProject = Math.min(activeProject, filteredProjects.length - 1);

  return (
    <div className="py-4 md:py-6 lg:py-8 px-2 sm:px-3 lg:px-4 bg-[var(--color-background)]">
      {/* Section Header */}
      <div className="text-center mb-4 md:mb-5">
        <h2 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-[var(--color-foreground)]">
          Proof in the Projects
        </h2>
        <p className="text-sm md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          See how I've turned complex data into real-world results—each project is a story of impact.
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 mb-4 md:mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveCategory(category);
              setActiveProject(0); // Reset to first project in new category
            }}
            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-2xl font-semibold transition-all duration-300 border-2 text-xs md:text-base ${activeCategory === category ? 'bg-[var(--color-card-bg)] text-black border-[var(--color-card-bg)]' : 'bg-white text-[var(--color-muted)] border-[var(--color-border)] hover:bg-[var(--color-card-bg)]/40 hover:text-black'}`}
            style={{ minHeight: 36 }}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Uniform Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="card cursor-pointer transition-all duration-300 hover:shadow-xl p-4 md:p-6 hover:border-[var(--color-accent)] flex flex-col h-full"
            onClick={() => setActiveProject(index)}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{ minHeight: 36 }}
          >
            {/* Removed image section for minimal design */}
            <div className="flex justify-end mb-2">
              <span className="bg-[var(--color-card-bg)] text-[var(--color-foreground)] px-2 py-1 rounded-full text-xs md:text-base font-semibold border border-[var(--color-border)]">
                  {project.category}
                </span>
            </div>
            <h4 className="font-bold text-[var(--color-foreground)] mb-2 line-clamp-2 text-lg md:text-xl">
              {project.title}
            </h4>
            <p className="text-sm md:text-base text-[var(--color-muted)] mb-2 line-clamp-2">
              {project.subtitle}
            </p>
            <p className="text-gray-600 mb-3 leading-relaxed text-sm md:text-base line-clamp-3">
              {project.description}
            </p>
            {/* Impact Metrics */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {Object.entries(project.impact).map(([key, value]) => (
                <div key={key} className="bg-gray-50 rounded-xl p-2 text-center">
                  <div className="text-sm font-bold text-green-600 mb-1">{value}</div>
                  <div className="text-xs text-gray-600 capitalize">{key}</div>
                </div>
              ))}
              </div>
            {/* Tech Stack */}
            <div className="mb-3">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-black rounded-full text-xs font-medium border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-2 mt-auto">
              {project.title === "COVID-19 Enrollment Analysis" ? (
                <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5222094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[var(--color-button-primary-fill)] text-[var(--color-button-primary-text)] px-5 py-2.5 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center text-base min-h-[40px] border-2 border-[var(--color-button-primary-border)] hover:bg-[var(--color-button-primary-hover-fill)] hover:text-[var(--color-button-primary-hover-text)]"
                >
                  <Play className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform text-[var(--color-button-primary-text)]" />
                  View Case Study
                </a>
              ) : project.title === "Chicago Crime Prediction Model" ? (
                <a
                  href="https://github.com/saikiransalama/chicago-crime-prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[var(--color-button-primary-fill)] text-[var(--color-button-primary-text)] px-5 py-2.5 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center text-base min-h-[40px] border-2 border-[var(--color-button-primary-border)] hover:bg-[var(--color-button-primary-hover-fill)] hover:text-[var(--color-button-primary-hover-text)]"
                >
                  <Play className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform text-[var(--color-button-primary-text)]" />
                  View Case Study
                </a>
              ) : (
                <button className="group bg-[var(--color-button-primary-fill)] text-[var(--color-button-primary-text)] px-5 py-2.5 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center text-base min-h-[40px] border-2 border-[var(--color-button-primary-border)] hover:bg-[var(--color-button-primary-hover-fill)] hover:text-[var(--color-button-primary-hover-text)]">
                  <Play className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform text-[var(--color-button-primary-text)]" />
                  View Case Study
                </button>
              )}
              {project.title === "Chicago Crime Prediction Model" ? (
                <a
                  href="https://github.com/saikiransalama/chicago-crime-prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[var(--color-button-primary-fill)] text-[var(--color-button-primary-text)] px-5 py-2.5 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center text-base min-h-[40px] border-2 border-[var(--color-button-primary-border)] hover:bg-[var(--color-button-primary-hover-fill)] hover:text-[var(--color-button-primary-hover-text)]"
                >
                  <Code className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform text-[var(--color-button-primary-text)]" />
                  View Code
                </a>
              ) : (
                <button className="group bg-[var(--color-button-primary-fill)] text-[var(--color-button-primary-text)] px-5 py-2.5 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center text-base min-h-[40px] border-2 border-[var(--color-button-primary-border)] hover:bg-[var(--color-button-primary-hover-fill)] hover:text-[var(--color-button-primary-hover-text)]">
                  <Code className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform text-[var(--color-button-primary-text)]" />
                  View Code
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;