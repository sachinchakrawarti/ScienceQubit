// src\public_app\features\mathematics\Mathematics.jsx
import React from "react";
import { Link } from "react-router-dom";

import { navItems } from "../../layout/navbar/navbardesktop/NavbarDesktopData";

const Mathematics = () => {
  // Find the mathematics item from navItems
  const mathItem = navItems.find((item) => item.label === "Mathematics");
  const topics = mathItem?.dropdown || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mathematics
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore the language of the universe. From algebra to topology, dive
            into the world of numbers, patterns, and abstract structures.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
          Mathematics Topics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.to}
              to={topic.to}
              className="group block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl text-red-500">
                  {topic.icon && <topic.icon />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors">
                    {topic.label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Learn about {topic.label.toLowerCase()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-blue-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none text-center">
            <p className="text-gray-700 dark:text-gray-300">
              Mathematics is not just about numbers; it's a way of thinking.
              Whether you're a student, researcher, or enthusiast, our resources
              will guide you through the fascinating world of mathematical
              concepts.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mathematics;
