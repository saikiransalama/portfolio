import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, TrendingUp, Users, Target, Download, ArrowRight, Star, CheckCircle } from 'lucide-react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      id: 1,
      title: "Shipping & Delivery Support Associate",
      company: "Amazon, India",
      location: "India",
      period: "Apr 2022 - Jun 2023",
      type: "Full-time",
      role: "Flex Payment Investigator & SME (Subject Matter Expert)",
      achievements: [
        "Collaborated with cross-functional teams to improve accuracy of payment and delivery information, resulting in a 10% increase in employee productivity",
        "Served as the Subject Matter Expert for payment processes, research, and dispute resolution, ensuring prompt resolution of customer issues",
        "Analyzed and compiled customer payment data, adhering to company policies and procedures, leading to improved financial transparency",
        "Trained 40 new agents successfully, achieving a 100% pass rate in the ramp-up phase"
      ],
      skills: ["Payment Analysis", "Process Improvement", "Training", "Customer Service", "Data Analysis"],
      impact: {
        productivity: "+10%",
        training: "40 agents",
        pass_rate: "100%"
      }
    },
    {
      id: 2,
      title: "Shipping & Delivery Support Associate",
      company: "Amazon, India",
      location: "India",
      period: "Aug 2021 - Mar 2022",
      type: "Full-time",
      role: "Flex App Support",
      achievements: [
        "Monitored and resolved an average of 80 customer service tickets per day, ensuring timely resolution and maintaining a customer satisfaction rate of 95%",
        "Provided technical support to over 200 customers daily through email, resulting in a reduction of unresolved issues by 30% within three months",
        "Developed and implemented new payment protocols in collaboration with the compliance team, resulting in a decrease in payment disputes by 20%",
        "Maintained high adherence to industry standards and company policies"
      ],
      skills: ["Technical Support", "Customer Service", "Process Optimization", "Compliance", "Email Support"],
      impact: {
        tickets: "80/day",
        satisfaction: "95%",
        disputes: "-20%"
      }
    }
  ];

  const education = [
    {
      degree: "Master of Science in Advanced Data Analytics",
      school: "University of North Texas",
      location: "Denton, TX",
      period: "2023 - 2025",
      gpa: "3.9/4.0",
      highlights: [
        "CGPA: 3.9/4.0",
        "Published research on COVID-19 enrollment analysis",
        "Advanced machine learning with 8M+ crime records",
        "Research paper under review for peer-reviewed journal"
      ],
      relevant_courses: [
        "Advanced Data Analytics",
        "Machine Learning",
        "Statistical Analysis",
        "Data Visualization",
        "Research Methods"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Osmania University",
      location: "Hyderabad, Telangana, India",
      period: "2018 - 2022",
      gpa: "8.95/10",
      highlights: [
        "CGPA: 8.95/10",
        "Majors: Computer Science",
        "Minors: Botany, Zoology",
        "Strong foundation in programming and data structures"
      ],
      relevant_courses: [
        "Computer Science",
        "Programming Fundamentals",
        "Data Structures",
        "Algorithms",
        "Database Systems"
      ]
    }
  ];

  const certifications = [
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2023",
      credential: "GOOG-DA-2023-001",
      status: "Active"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "AWS-CCP-2023-456",
      status: "Active"
    },
    {
      name: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2022",
      credential: "TAB-DS-2022-789",
      status: "Active"
    },
    {
      name: "Microsoft Excel Expert",
      issuer: "Microsoft",
      date: "2022",
      credential: "MS-EXCEL-EXP-2022",
      status: "Active"
    }
  ];

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)]">
      {/* Section Header */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-[var(--color-foreground)] to-[var(--color-muted)] bg-clip-text text-transparent">
          Resume & Experience
        </h2>
        <p className="text-base md:text-xl text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
          Academic excellence with published research and professional experience in data analysis and customer service optimization.
        </p>
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {[
          { number: "2+", label: "Years Experience", icon: Briefcase },
          { number: "2", label: "Research Papers", icon: Users },
          { number: "3.9/4.0", label: "Master's CGPA", icon: TrendingUp },
          { number: "100%", label: "Training Pass Rate", icon: Star }
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

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { id: 'experience', label: 'Work Experience', icon: Briefcase },
          { id: 'education', label: 'Education', icon: GraduationCap },
          { id: 'certifications', label: 'Certifications', icon: Award }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border-2 hover:scale-105 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
            }`}
          >
            <tab.icon className="h-5 w-5 mr-2" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden w-full max-w-full">
        {activeTab === 'experience' && (
          <div className="p-4 sm:p-6 md:p-8 overflow-x-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={job.id} className="flex items-start">
                  {/* Timeline Icon/Line Column */}
                  <div className="flex flex-col items-center w-8 flex-shrink-0">
                    {/* Main timeline dot at the top */}
                    {index === 0 ? (
                      <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-xl shadow-md z-10 mb-2">
                        {/* Briefcase icon or filled circle */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 7V6a2 2 0 012-2h8a2 2 0 012 2v1" /><rect width="20" height="14" x="2" y="7" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 13a4 4 0 01-8 0" /></svg>
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-lg shadow-md z-10 mb-2">
                        {/* Small dot for other items */}
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
                      </span>
                    )}
                    {/* Vertical line */}
                    <div className="flex-1 w-px bg-[var(--color-muted)]"></div>
                  </div>
                  {/* Content Column */}
                  <div className="flex-1 pl-4 sm:pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1 break-words">{job.title}</h4>
                        <div className="flex items-center text-blue-600 font-semibold mb-2 break-words">
                          {job.company}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {job.period}
                          </span>
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      {/* Impact Metrics */}
                      <div className="mt-4 md:mt-0">
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(job.impact).map(([key, value]) => (
                            <div key={key} className="bg-white rounded-xl px-3 py-2 text-center min-w-[80px]">
                              <div className="text-sm font-bold text-green-600 break-words">{value}</div>
                              <div className="text-xs text-gray-600 capitalize break-words">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-blue-600" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm leading-relaxed break-words">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Skills */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-blue-600" />
                        Technologies & Skills
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium break-words"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                      <div className="text-blue-600 font-semibold mb-2">{edu.school}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-blue-600" />
                        Highlights & Achievements
                      </h5>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-blue-600" />
                        Relevant Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant_courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h4>
                      <div className="text-blue-600 font-semibold mb-2">{cert.issuer}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {cert.date}
                        </span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                          {cert.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono bg-white px-3 py-2 rounded-lg border">
                    Credential ID: {cert.credential}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Download Resume */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to see the full resume?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Download my complete resume with detailed project descriptions, technical skills, and professional references.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF Resume
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;