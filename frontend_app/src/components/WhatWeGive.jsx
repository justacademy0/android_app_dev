import React from 'react';
import { User, GraduationCap, Award, HelpingHand, Briefcase } from 'lucide-react';

const WhatWeGive = () => {
  const features = [
    {
      icon: <User className="w-6 h-6 text-yellow-500" />,
      title: "Professional Teacher",
      description: "Learn from industry experts with years of Android development experience.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-yellow-500" />,
      title: "Course Certificate",
      description: "Earn a recognized certificate upon completion. Boost your resume and showcase your skills.",
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Project based Learning",
      description: "Engage with hands-on projects and real app development scenarios.",
    },
    {
      icon: <HelpingHand className="w-6 h-6 text-yellow-500" />,
      title: "Internship Assistance",
      description: "Get help finding internships to apply your skills in real-world environments.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-yellow-500" />,
      title: "Placement Support",
      description: "Receive career guidance and support to land your first job in tech.",
    },
    {
      icon: <User className="w-6 h-6 text-yellow-500" />,
      title: "Interview Prep.",
      description: "Master interviews with mock sessions, curated questions, and expert feedback to boost your confidence.",
    }
  ];

  return (
    <section className="bg-white py-16">
      <div id="whatuget" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-16">
        <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">
          WHAT WE GIVE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What do You Get From Us
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl  mb-12">
          Discover the comprehensive benefits of joining JustAcademy's Android development course. We provide everything you need to become a successful mobile app developer.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-600 rounded-xl p-6 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg text-center font-semibold">{feature.title}</h3>
                <p className="text-blue-100 text-center text-sm text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeGive;
