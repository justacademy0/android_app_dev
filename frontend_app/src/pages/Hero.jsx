import React from 'react';
import { Play } from 'lucide-react';
import heroImg from '../images/heroImg.png'; // Adjust the path as necessary
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
            <img 
              src={heroImg} 
              alt="Android Development Course" 
              className="w-[547.5px] h-[547px] object-contain"
            />
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