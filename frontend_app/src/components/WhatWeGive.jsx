import React from 'react';
import { Video, Award, HelpCircle } from 'lucide-react';

const WhatWeGive = () => {
  const features = [
  {
    icon: <Video className="w-6 h-6 text-[#B51C72]" />,
    title: "Live & Recorded Sessions",
    description: "Join interactive live classes and revisit every lesson anytime with lifetime access to recordings.",
  },
  {
    icon: <Award className="w-6 h-6 text-[#B51C72]" />,
    title: "Industry Certification",
    description: "Earn an industry-recognized certificate upon completion to showcase your expertise to employers.",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-[#B51C72]" />,
    title: "Doubt Solving Support",
    description: "Get one-on-one help via WhatsApp, Zoom, or in-class sessions to clear any roadblocks instantly.",
  },
];

  return (
    <section className="bg-white py-16">
      <div id="whatuget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-16">
        <p className="text-[#B51C72] font-medium text-sm uppercase tracking-wide mb-2">
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
              className="bg-[#B51C72] rounded-xl p-6 text-white hover:bg-[#91165B] transition-colors duration-300"
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
