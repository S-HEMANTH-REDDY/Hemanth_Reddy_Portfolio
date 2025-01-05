import React, { useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100',
    text: isDarkMode ? 'text-white' : 'text-gray-800',
    title: isDarkMode ? 'text-blue-400' : 'text-indigo-900',
    card: isDarkMode ? 'bg-gray-800' : 'bg-white',
    cardHover: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-50',
    gradient: isDarkMode 
      ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
      : 'bg-gradient-to-r from-blue-50 to-indigo-50',
    secondaryText: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    borderColor: isDarkMode ? 'border-gray-700' : 'border-slate-200',
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} transition-colors duration-300`}>
      {/* Theme Toggle Button */}
      <div className="fixed top-0 right-0 p-4 z-50 flex items-center justify-center">
        <button
          onClick={toggleTheme}
          className={`p-2.5 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800'} shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center`}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Home Section */}
      <section id="home" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className={`text-4xl font-bold mb-4 ${themeClasses.title}`}>Hi there! I'm Hemanth Reddy Sankaramaddi</h1>
              <p className={`text-xl ${themeClasses.secondaryText} mb-8`}>A passionate Computer Science Graduate Student at University of Florida</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="mailto:hemanth1729hr@gmail.com" className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg">
                  <Mail className="mr-2" size={20} />
                  Contact Me
                </a>
                <a href="https://github.com/S-HEMANTH-REDDY" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg">
                  <Github className="mr-2" size={20} />
                  GitHub
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-xl">
                <img 
                  src="/src/pages/img.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-16 ${themeClasses.card}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.title}`}>Professional Experience</h2>
          <div className="space-y-12">
            {[
              {
                title: "Research Assistant",
                company: "University of Florida, College of Dentistry",
                period: "November 2024 - Present",
                description: "Spearheading groundbreaking research in dental implant analysis, processing over 100,000 procedure records using advanced Python frameworks. Engineered machine learning models that achieved a 20% improvement in prediction accuracy. Developed comprehensive data visualizations that enhanced interdisciplinary team decision-making through innovative use of Matplotlib and Seaborn."
              },
              {
                title: "Software Intern",
                company: "Defence Research and Development Organisation (DRDO)",
                period: "October 2023 - March 2024",
                description: "Led the development of a cutting-edge airplane detection system utilizing YOLOv8 Nano technology. Successfully managed the comprehensive annotation of 20,000 images and implemented sophisticated data augmentation techniques that boosted detection reliability by 30%. Innovated the classification system to distinguish four distinct airplane categories with exceptional accuracy."
              },
              {
                title: "Software Intern",
                company: "Defence Research and Development Organisation (DRDO)",
                period: "July 2023 - August 2023",
                description: "Pioneered the development of sophisticated algorithms for missile navigation systems, achieving a 25% improvement in targeting accuracy. Led a dynamic team of five engineers in implementing advanced geometric algorithms including ray casting and intersection techniques. Successfully enhanced overall system performance by 20% through innovative optimization strategies."
              }
            ].map((exp, index) => (
              <div key={index} className={`${themeClasses.gradient} p-8 rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${themeClasses.title}`}>{exp.title}</h3>
                    <p className={`text-lg ${themeClasses.secondaryText} mt-2`}>{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className={`${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-indigo-100 text-indigo-700'} px-4 py-2 rounded-full text-sm font-medium`}>
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className={`${themeClasses.secondaryText} leading-relaxed`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 ${themeClasses.background}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.title}`}>Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Amazon-Inspired MERN Stack Application",
                description: "Full-stack CRUD application with payment integration using MongoDB, Express.js, React.js, and Node.js. Enhanced user engagement by 25% and reduced bounce rates.",
                link: "https://github.com/S-HEMANTH-REDDY/Amazon-Inspired-MERN-Stack-CRUD-Application-with-Payment-Integration"
              },
              {
                title: "Plant Disease Detection System",
                description: "CNN-based disease detection system achieving 98% training accuracy on 20,000 images. Built real-time system using TensorFlow Serving and FASTAPI.",
                link: "https://github.com/S-HEMANTH-REDDY/Detecting_Leaf_Diseases_in_Plants_Using_CNN"
              },
              {
                title: "Student Management Portal",
                description: "Web-based portal built with MySQL and React.js, improving efficiency for 500+ students and staff. Reduced manual tracking time by 30%.",
                link: "https://github.com/S-HEMANTH-REDDY/Student_Management_Portal"
              },
              {
                title: "GeoVision Image Classifier",
                description: "Landmark classification model achieving 92% accuracy on 25,000 images. Deployed with Docker and Kubernetes on Google Cloud, reducing deployment time by 40%.",
                link: "https://github.com/S-HEMANTH-REDDY/GeoVision-Classifier"
              }
            ].map((project, index) => (
              <div key={index} className={`${themeClasses.card} p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300`}>
                <h3 className={`text-xl font-semibold mb-2 ${themeClasses.title}`}>{project.title}</h3>
                <p className={`${themeClasses.secondaryText} mb-4`}>{project.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-indigo-600 hover:text-indigo-800'} transition-colors duration-200`}
                  >
                    <Github className="mr-1" size={16} />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 ${themeClasses.card}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.title}`}>Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Programming & Development */}
            <div className={`${themeClasses.gradient} p-8 rounded-xl shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-blue-900/30' : 'bg-indigo-100'} rounded-lg flex items-center justify-center`}>
                  <svg className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-indigo-600'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3L3 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3L21 8L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold ${themeClasses.title}`}>Programming & Development</h3>
              </div>
              <div className="space-y-3">
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Python, Java, C</span>
                </div>
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>React.js, Node.js, Angular</span>
                </div>
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>HTML5, CSS, JavaScript</span>
                </div>
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Bootstrap, Express.js, Spring</span>
                </div>
              </div>
            </div>

            {/* Data Science & Analytics */}
            <div className={`${themeClasses.gradient} p-8 rounded-xl shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-blue-900/30' : 'bg-indigo-100'} rounded-lg flex items-center justify-center`}>
                  <svg className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold ${themeClasses.title}`}>Data Science & Analytics</h3>
              </div>
              <div className="space-y-3">
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>PyTorch, TensorFlow, Keras</span>
                </div>
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Pandas, NumPy, Scikit-learn</span>
                </div>
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Power BI, Tableau</span>
                </div>
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Ultralytics, NLP</span>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className={`${themeClasses.gradient} p-8 rounded-xl shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-blue-900/30' : 'bg-indigo-100'} rounded-lg flex items-center justify-center`}>
                  <svg className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold ${themeClasses.title}`}>Cloud & DevOps</h3>
              </div>
              <div className="space-y-3">
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>AWS, GCP</span>
                </div>
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Docker, Kubernetes</span>
                </div>
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>Git, GitHub</span>
                </div>
                <div className={`flex items-center ${themeClasses.card} p-3 rounded-lg`}>
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className={themeClasses.secondaryText}>MySQL, MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className={`py-16 ${themeClasses.background}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${themeClasses.title}`}>Research Publications</h2>
          <div className="space-y-8">
            <div className={`${themeClasses.card} p-8 rounded-xl shadow-lg`}>
              <h3 className={`text-2xl font-bold ${themeClasses.title} mb-4`}>Detecting Leaf Diseases in Bell Pepper, Potato, and Tomato Plants using Convolutional Neural Network</h3>
              <div className={`${themeClasses.secondaryText} mb-4`}>
                <span className="font-semibold">Authors:</span> Mr. Ravindra P, Dr. Raghavender Raju L, Hemanth Reddy S, Harshavardhan Chary V
              </div>
              <p className={`${themeClasses.secondaryText} leading-relaxed mb-4`}>
                This research focuses on implementing advanced machine learning techniques, specifically CNNs, for detecting leaf diseases in crucial food crops. The study achieved 98-99% prediction accuracy on a dataset of 20,000 images, offering a scalable solution for early disease detection in agricultural applications.
              </p>
              <div className="flex justify-between items-center">
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Matrusri Engineering College, Hyderabad, India
                </div>
                <a 
                  href="https://www.ijisrt.com/assets/upload/files/IJISRT23OCT949.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-indigo-600 hover:text-indigo-800'} transition-colors duration-200`}
                >
                  View Publication
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={`${themeClasses.card} p-8 rounded-xl shadow-lg`}>
              <h3 className={`text-2xl font-bold ${themeClasses.title} mb-4`}>Public Figure Recognition Using SVM and Computer Vision Techniques</h3>
              <div className={`${themeClasses.secondaryText} mb-4`}>
                <span className="font-semibold">Authors:</span> Dr. Raghavender Raju L, Harshavardhan Chary V, Khyathi Y, Hemanth Reddy S
              </div>
              <p className={`${themeClasses.secondaryText} leading-relaxed mb-4`}>
                This study explores the development of a Public Figure Recognition system using SVM and computer vision techniques. The research achieved 90.24% accuracy on test data, demonstrating the effectiveness of SVM for facial recognition in scenarios with limited training data.
              </p>
              <div className="flex justify-between items-center">
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Matrusri Engineering College, Hyderabad, India
                </div>
                <a 
                  href="https://www.irjet.net/archives/V10/i10/IRJET-V10I1082.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-indigo-600 hover:text-indigo-800'} transition-colors duration-200`}
                >
                  View Publication
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 ${themeClasses.card}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl font-bold mb-8 ${themeClasses.title}`}>Get in Touch</h2>
          <div className={`max-w-lg mx-auto ${themeClasses.gradient} p-8 rounded-xl shadow-lg`}>
            <p className={`${themeClasses.secondaryText} mb-8`}>Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/Hemanth-Reddy-UF" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${isDarkMode ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'} p-4 rounded-full transition-colors duration-200`}
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/S-HEMANTH-REDDY" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${isDarkMode ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'} p-4 rounded-full transition-colors duration-200`}
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:hemanth1729hr@gmail.com" 
                className={`${isDarkMode ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'} p-4 rounded-full transition-colors duration-200`}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
