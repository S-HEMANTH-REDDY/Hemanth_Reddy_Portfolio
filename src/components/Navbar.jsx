import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {/* Menu Items */}
          <div className="hidden md:flex space-x-12">
            {['home', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-blue-500 transition-colors duration-200 capitalize text-lg"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;