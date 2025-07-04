import React, { useState } from 'react';
import { ExternalLink, Github, BarChart3, TrendingUp, Users, DollarSign, Calendar, ArrowRight, Play, Eye, Code, Database, Zap } from 'lucide-react';

const Projects = () => {
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

  return (
    <div className="py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Academic research projects and data analysis work showcasing advanced analytics skills and published research contributions.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border-2 hover:scale-105"
            style={{
              backgroundColor: index === 0 ? 'rgb(59 130 246)' : 'transparent',
              color: index === 0 ? 'white' : 'rgb(107 114 128)',
              borderColor: index === 0 ? 'rgb(59 130 246)' : 'rgb(229 231 235)'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Project Showcase */}
      <div className="mb-16">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Project Image */}
            <div className="relative h-96 lg:h-full overflow-hidden">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {projects[activeProject].category}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">{projects[activeProject].duration}</span>
                <Users className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">{projects[activeProject].team}</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {projects[activeProject].title}
              </h3>
              
              <p className="text-lg text-blue-600 font-semibold mb-6">
                {projects[activeProject].subtitle}
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {projects[activeProject].description}
              </p>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(projects[activeProject].impact).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
                  <Play className="h-4 w-4 mr-2" />
                  View Case Study
                </button>
                <button className="flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  <Code className="h-4 w-4 mr-2" />
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              activeProject === index ? 'border-blue-600' : 'border-gray-100 hover:border-blue-200'
            }`}
            onClick={() => setActiveProject(index)}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="absolute top-2 right-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </span>
              </div>
            </div>

            <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
              {project.title}
            </h4>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {project.subtitle}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {project.duration}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="h-4 w-4 mr-1" />
                {project.team}
              </div>
            </div>

            {/* Hover Effect */}
            {hoveredProject === index && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <Eye className="h-8 w-8 mx-auto mb-2" />
                  <span className="text-sm font-semibold">View Details</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to see more of my work?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I have additional case studies and projects that demonstrate my expertise in data analytics, 
            machine learning, and business intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/alexchen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              View GitHub
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;