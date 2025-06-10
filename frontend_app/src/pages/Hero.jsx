import React from 'react';
import { Play, Phone, Mail } from 'lucide-react';
import heroImg from '../images/heroImg.png'; // Adjust the path as necessary

const Hero = () => {
  return (
    <>
      <section className="bg-gray-50 min-h-[705px] flex items-center relative overflow-hidden">
        <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#B71B72] font-medium text-lg">Let's Begin</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-[#B71B72]">Android </span>App Development Course
                </h1>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 w-full max-w-sm mt-4">
                <a
                  href="tel:919987184296"
                  className="w-full flex items-center justify-center gap-2 border-2 border-pink-700 text-pink-700 px-6 py-3 rounded-full font-semibold text-base transition-colors duration-200 hover:bg-pink-700 hover:text-white"
                >
                  <Phone className="w-5 h-5" />
                  91 9987184296
                </a>

                <a
                  href="mailto:info@justacademy.co"
                  className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold text-base transition-colors duration-200 hover:bg-gray-100"
                >
                  <Mail className="w-5 h-5" />
                  info@justacademy.co
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src={heroImg}
                alt="Android Development Course"
                className="w-full max-w-[547.5px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 left-20 w-6 h-6 bg-purple-300 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-5 h-5 bg-orange-300 rounded-full opacity-60"></div>
      </section>
    </>
  );
};

export default Hero;
