import React from 'react';
import justacademylogo from '../images/justacademylogo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="bg-white shadow-2xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={justacademylogo}
              alt="JustAcademy"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>


              <a
                href="#curriculum"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Curriculum
              </a>

              <a
                href="#whatuget"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                What You Get
              </a>

              <a
                href="#about"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <a
            href="#home"
            className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
          >
            Home
          </a>
          <a
            href="#curriculum"
            className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
          >
            Curriculum
          </a>
          <a
            href="#whatuget"
            className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
          >
            What You Get
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;