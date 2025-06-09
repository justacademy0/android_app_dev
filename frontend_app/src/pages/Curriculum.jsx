//testing


import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Code, Smartphone, Database, Globe, Settings, Zap, Trophy } from 'lucide-react';

const Curriculum = () => {
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const getModuleIcon = (index) => {
    const icons = [
      Smartphone, Code, Settings, BookOpen, Settings, 
      Zap, Database, Database, Database, Globe, 
      Globe, Code, Trophy, Database
    ];
    const IconComponent = icons[index] || BookOpen;
    return <IconComponent className="w-5 h-5" />;
  };

  const modules = [
    {
      id: 1,
      title: "Introduction to Android",
      topics: [
        "What is Android and Android Studio?",
        "Android Architecture and Libraries",
        "Dalvik Virtual Machine, DDMS, SDK Manager and AVD Manager",
        "Android API levels (versions & version names)",
        "Setting Android Programming Environment"
      ]
    },
    {
      id: 2,
      title: "Application Structure",
      topics: [
        "Basic Building blocks – Activities and Activity Life Cycle",
        "AndroidManifest.xml",
        "Gradle & Build.Gradle",
        "Layouts & Drawable Resource",
        "Values (Color.xml, String.xml and styles.xml)",
        "First sample Application"
      ]
    },
    {
      id: 3,
      title: "Emulator-Android Virtual Device",
      topics: [
        "Create emulator",
        "Editing emulator settings",
        "Emulator shortcuts",
        "Log-cat usage",
        "Timber library",
        "Testing Application in Different Screens resolutions And OS version Emulators"
      ]
    },
    {
      id: 4,
      title: "UI Design",
      topics: [
        "Form widgets",
        "Text Fields",
        "Using CoordinatorLayout",
        "RelativeLayout",
        "LinearLayout",
        "ConstraintLayout",
        "Material Design (Snackbar, fab button, toolbar etc)"
      ],
      projects: [
        "Life Cycle App",
        "Calculator App",
        "Kids App to learn Month, Weekdays, number 1 to 10",
        "Personal Info App"
      ]
    },
    {
      id: 5,
      title: "UI Components",
      topics: [
        "Time-picker and Date-picker",
        "ImageView and Vector Images",
        "Radio Button and Radio Group",
        "CheckBox & Spinner",
        "SeekBar & AutoCompleteTextview"
      ]
    },
    {
      id: 6,
      title: "Intents",
      topics: [
        "Explicit Intents (Communicating data among Activities)",
        "Implicit intents (Phone Calls, SMS and Email Sending)",
        "Services & Broadcast Sending and Receivers",
        "Problems with services and solutions",
        "Thread Running in Background Services"
      ],
      projects: [
        "Kids App to learn Month, Weekdays, number 1 to 10",
        "Personal Info App"
      ]
    },
    {
      id: 7,
      title: "Adapters and List Views",
      topics: [
        "RecyclerView with CardView",
        "CustomListview, Listview and Gridview",
        "Using ArrayAdapters, BaseAdapters"
      ],
      projects: [
        "Implement RecyclerView with Grid Layout Manager"
      ]
    },
    {
      id: 8,
      title: "Data Storage",
      topics: [
        "Shared Preferences",
        "Android File System"
      ],
      projects: [
        "Sign-In, Sign Out And Sign-up App"
      ]
    },
    {
      id: 9,
      title: "Database (Content Providers)",
      topics: [
        "Creating Database",
        "Inserting, Updating, Deleting & Select Operations",
        "Using Cursor Reading and updating records in DB"
      ],
      projects: [
        "Develop an App for CRUD operations",
        "Food recipe mobile app"
      ]
    },
    {
      id: 10,
      title: "Google API Services",
      topics: [
        "GPS, Location Manager based Services",
        "Google MAP Integration with API Key",
        "Apps Notification"
      ]
    },
    {
      id: 11,
      title: "Networking Connection",
      topics: [
        "Implementing Async Task",
        "JSON Parsing with GET and POST Requests Using Retrofit Or Volley Library",
        "Glide Library for Image Loading from URL",
        "Accessing Image from Gallery and Upload on Web Server Using API"
      ],
      projects: [
        "Capture Photos & Upload on Server Using Retrofit or Volley",
        "Display list of category and onClick content inside with view pager",
        "Implement ViewPager. Create share and download option for content like text, audio, video and Image"
      ]
    },
    {
      id: 12,
      title: "Fragments",
      topics: [
        "Fragments Life Cycle With respect to Activity Class",
        "Communication between two fragments",
        "Communication and data transfer between activity and fragment",
        "View Pager",
        "TabLayout"
      ]
    },
    {
      id: 13,
      title: "Advanced Topics",
      topics: [
        "Animation",
        "Transition Animation",
        "Action Bar and Custom Action Bar",
        "Swipe Refresh",
        "Drag Drop Effect",
        "VideoView & Media player",
        "Using Webview",
        "Dashboard UI Design",
        "Alert Dialog Boxes",
        "NavigationView with DrawerLayout",
        "Introduction to MVVM",
        "Generate Signed APK for Google App Store"
      ]
    },
    {
      id: 14,
      title: "Firebase Database",
      topics: [
        "Firebase database",
        "Configure firebase",
        "Integrating into your application",
        "Access",
        "Create a new project",
        "Configure database access"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            COMPREHENSIVE CURRICULUM
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Android Development Course
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master Android development through our structured 14-module curriculum covering everything from basics to advanced topics with hands-on projects.
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="grid gap-4">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 rounded-xl transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                    {getModuleIcon(index)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Module {module.id}: {module.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {module.topics.length} topics
                      {module.projects && ` • ${module.projects.length} projects`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                    {module.topics.length + (module.projects?.length || 0)} items
                  </span>
                  {expandedModules[module.id] ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Module Content */}
              {expandedModules[module.id] && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    {/* Topics */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Learning Topics
                      </h4>
                      <div className="grid gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    {module.projects && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          Hands-on Projects
                        </h4>
                        <div className="grid gap-2">
                          {module.projects.map((project, projectIndex) => (
                            <div
                              key={projectIndex}
                              className="flex items-start space-x-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200"
                            >
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 font-medium leading-relaxed">{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">14</div>
            <div className="text-sm text-gray-600">Modules</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">80+</div>
            <div className="text-sm text-gray-600">Topics</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Practical</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">₹21,600</div>
            <div className="text-sm text-gray-600">Course Fees</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-indigo-600 mb-2">30hrs</div>
            <div className="text-sm text-gray-600">Duration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;