import React from 'react';
import { User, GraduationCap, Award } from 'lucide-react';

const WhatWeGive = () => {
  const features = [
    {
      icon: <User className="w-6 h-6 text-yellow-500" />,
      title: "Professional Teacher",
      description: "Learn from industry experts with years of Android development experience."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-yellow-500" />,
      title: "Course Certificate",
      description: "Earn a recognized certificate upon completion. Boost your resume and showcase your skills."
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Interesting Learning",
      description: "Engage with hands-on projects and real app development scenarios."
    }
  ];

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wide">
                WHAT WE GIVE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                What do You Get From Us
              </h2>
            </div>
            
            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              Discover the comprehensive benefits of joining JustAcademy's Android development course. We provide everything you need to become a successful mobile app developer.
            </p>
          </div>
          
          {/* Right Cards Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-blue-600 rounded-xl p-6 text-white hover:bg-blue-700 transition-colors duration-300">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeGive;