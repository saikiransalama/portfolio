import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, TrendingUp, Users, Target, Download, ArrowRight, Star, CheckCircle } from 'lucide-react';
import UNTLogo from '../assests/Univerisity of North Texas.png';
import OsmaniaLogo from '../assests/Osmania University.png';

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
        "Pass Rate": "100%"
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

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)]">
      {/* Section Header */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[var(--color-foreground)]" style={{ fontFamily: 'Caudex, serif' }}>
          Experience That Delivers Results
        </h2>
        <p className="text-base md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          From Amazon to academia, I've delivered results that matter—backed by data, driven by curiosity.
        </p>
      </div>
      {/* Quick Stats */}
      {/* Quick Stats */}

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
                ? 'bg-[var(--color-card-bg)] text-black border-[var(--color-card-bg)]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
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
            <h3 className="text-2xl font-bold text-black mb-8">Professional Experience</h3>
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
                    <div className="p-3 rounded-xl flex items-center justify-center bg-white">
                      {edu.school === 'University of North Texas' ? (
                        <img src={UNTLogo} alt="UNT Logo" className="h-20 w-20 object-contain" />
                      ) : edu.school === 'Osmania University' ? (
                        <img src={OsmaniaLogo} alt="Osmania University Logo" className="h-20 w-20 object-contain" />
                      ) : null}
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
        )}
      </div>

      {/* Download Resume */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get the full story—download my resume for a deep dive into my data-driven journey.
          </h3>
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

      {/* Call to Action */}
      <div className="text-center mt-4 mb-4">
        <h3 className="text-2xl font-bold text-[var(--color-foreground)]" style={{ fontFamily: 'Caudex, serif' }}>
          Let's put these skills to work—your next big win starts here.
        </h3>
        <p className="text-[var(--color-muted)] max-w-2xl mx-auto">
          I'm always excited to take on new challenges and apply my technical expertise to solve complex business problems.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 mt-2"
        >
          <ArrowRight className="h-5 w-5 mr-2" />
          Let's Discuss Your Needs
        </a>
      </div>
    </div>
  );
};

export default Resume;