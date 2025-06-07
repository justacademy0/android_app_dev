import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-50 min-h-[705px] flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 font-medium text-lg">Let's Begin</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let's Find The Right{' '}
                <span className="text-blue-600">Android Course</span>{' '}
                For You
              </h1>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Master Android app development with JustAcademy's comprehensive course. Learn Kotlin, Java, and modern development practices to build professional mobile applications.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Register Now
              </button>
              <button className="flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                <Play className="w-5 h-5 fill-current" />
                Play Video
              </button>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main circular background */}
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-yellow-400 rounded-full flex items-center justify-center relative overflow-hidden">
                {/* Student image placeholder */}
                <div className="w-72 h-72 lg:w-80 lg:h-80 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                  <span className="text-sm text-center px-4">
                    [Student with laptop image would go here]
                  </span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-purple-600 rounded-full"></div>
              <div className="absolute -top-4 -right-12 w-12 h-12 bg-orange-500 rounded-full"></div>
              <div className="absolute -bottom-6 -left-12 w-10 h-10 bg-blue-500 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-14 h-14 bg-blue-400 rounded-full"></div>
              <div className="absolute top-1/2 -right-16 w-8 h-8 bg-orange-400 rounded-full"></div>
              
              {/* Decorative lines */}
              <div className="absolute top-1/3 -left-16 w-12 h-0.5 bg-orange-400 rotate-45"></div>
              <div className="absolute top-1/2 -left-14 w-8 h-0.5 bg-orange-400 rotate-45"></div>
              <div className="absolute top-2/3 -left-12 w-6 h-0.5 bg-orange-400 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-purple-300 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-5 h-5 bg-orange-300 rounded-full opacity-60"></div>
    </section>
  );
};

export default Hero;