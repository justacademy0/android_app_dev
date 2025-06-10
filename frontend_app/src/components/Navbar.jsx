import React, { useState } from 'react';
import justacademylogo from '../images/justacademylogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-2xl border-b border-gray-100 w-full">
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

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              <a href="#home" className="text-gray-900 hover:text-[#B51C72] px-2 lg:px-3 py-2 text-sm font-medium">Home</a>
              <a href="#curriculum" className="text-gray-900 hover:text-[#B51C72] px-2 lg:px-3 py-2 text-sm font-medium">Curriculum</a>
              <a href="#whatuget" className="text-gray-900 hover:text-[#B51C72] px-2 lg:px-3 py-2 text-sm font-medium">What You Get</a>
              <a href="#about" className="text-gray-700 hover:text-[#B51C72] px-2 lg:px-3 py-2 text-sm font-medium">About</a>
              <a
                href="#contact"
                className="px-3 lg:px-4 py-2 border-2 border-[#B51C72] text-[#B51C72] rounded-full font-semibold text-sm hover:bg-[#B51C72] hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(prev => !prev)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#B51C72]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on state */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <a href="#home" className="text-gray-900 hover:text-[#B51C72] block px-3 py-2 text-base font-medium">Home</a>
          <a href="#curriculum" className="text-gray-900 hover:text-[#B51C72] block px-3 py-2 text-base font-medium">Curriculum</a>
          <a href="#whatuget" className="text-gray-900 hover:text-[#B51C72] block px-3 py-2 text-base font-medium">What You Get</a>
          <a href="#about" className="text-gray-700 hover:text-[#B51C72] block px-3 py-2 text-base font-medium">About</a>
          <a href="#contact" className="text-gray-700 hover:text-[#B51C72] block px-3 py-2 text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
