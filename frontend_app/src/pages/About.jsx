import React from 'react';
import { Award, Users, Briefcase, Target, CheckCircle, MapPin, BookOpen, TrendingUp, Clock } from 'lucide-react';

const About = () => {
  const features = [
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Learn from top-tier professionals who bring real-world experience and industry insights into every session.",
  },
  {
    icon: BookOpen,
    title: "Live Project Training",
    description: "Build real applications with hands-on training that mirrors actual development environments.",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    description: "Choose from online or offline batches with timings that fit your routine — perfect for students and working professionals.",
  },
  {
    icon: Briefcase,
    title: "Placement & Interview Prep",
    description: "Receive 100% placement support, mock interviews, and personalized guidance to crack your dream job.",
  },
  {
    icon: Award,
    title: "Career-Boosting Certifications",
    description: "Earn industry-recognized certificates that add strong credibility to your resume and job profile.",
  }
];


  const courses = [
    "Web Design and Development",
    "Mobile App Development", 
    "Software Testing",
    "UI/UX Design",
    "Digital Marketing",
    "Java",
    "SAP",
    "Cloud Computing",
    "Data Analytics"
  ];

  const stats = [
    { number: "650+", label: "Hiring Partners", color: "text-blue-600" },
    { number: "5000+", label: "Students Trained", color: "text-green-600" },
    { number: "15+", label: "Course Programs", color: "text-orange-600" }
  ];

  return (
    <section className="py-16 bg-white">
      <div id="about"  className="max-w-6xl mx-auto px-6 scroll-mt-16">
        {/* Header */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            ABOUT US
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About JustAcademy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Learn more about our mission, values, and commitment to excellence in IT education.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Introduction */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                Welcome to JustAcademy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A leading IT training and certification institute dedicated to empowering individuals with the skills needed to excel in the ever-evolving technology landscape. Located in Mumbai, we are committed to providing top-notch, practical-oriented education that bridges the gap between academic knowledge and industry demands.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At JustAcademy, we believe in hands-on learning. Our comprehensive range of courses are meticulously designed by industry experts. We ensure our curriculum is always up-to-date with the latest trends and technologies.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 text-orange-600 mr-2" />
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to transform aspiring IT professionals into job-ready experts. We achieve this by offering intensive, practical training delivered by experienced trainers who bring real-world insights into the classroom.
              </p>
            </div>
          </div>

          {/* Right Column - Courses */}
          <div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 h-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                Our Comprehensive Courses
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {courses.map((course, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose JustAcademy?
            </h3>
            <p className="text-lg text-gray-600">
              Discover what sets us apart in the IT training landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your IT Career Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join JustAcademy and take the first step towards a successful and rewarding career in the IT industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Enroll Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;