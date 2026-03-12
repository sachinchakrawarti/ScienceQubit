import React from "react";
import {
  BiAtom,
  BiSolidFlask, // Changed from BiFlask to BiSolidFlask
  BiDna,
  BiMath,
  BiPlanet,
  BiHeart,
  BiRocket,
  BiBookOpen,
  BiChevronRight,
  BiStar,
} from "react-icons/bi";

const HeroSection = () => {
  const stats = [
    { label: "Scientific Articles", value: "10K+", icon: <BiBookOpen /> },
    { label: "Active Learners", value: "50K+", icon: <BiRocket /> },
    { label: "Expert Contributors", value: "500+", icon: <BiStar /> },
  ];

  const scienceDisciplines = [
    {
      name: "Mathematics",
      icon: <BiMath />,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      name: "Biology",
      icon: <BiDna />,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      name: "Chemistry",
      icon: <BiSolidFlask />,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    }, // Changed here
    {
      name: "Physics",
      icon: <BiAtom />,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Astronomy",
      icon: <BiPlanet />,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      name: "Sexology",
      icon: <BiHeart />,
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
            Discover the Universe of Science
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Explore the Wonders of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Science & Knowledge
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10">
            Your comprehensive platform for mathematics, biology, chemistry,
            physics, astronomy, and sexology. Learn from experts, explore
            interactive content, and join a community of curious minds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center justify-center space-x-2">
                <span>Start Exploring</span>
                <BiChevronRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700">
              Watch Free Lectures
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Science Disciplines Grid */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
              Explore Our Scientific Disciplines
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {scienceDisciplines.map((discipline) => (
                <button
                  key={discipline.name}
                  className={`group p-6 rounded-2xl ${discipline.bgColor} hover:shadow-lg transition-all transform hover:-translate-y-1`}
                >
                  <div
                    className={`text-4xl ${discipline.color} mb-3 group-hover:scale-110 transition-transform`}
                  >
                    {discipline.icon}
                  </div>
                  <div className={`text-sm font-medium ${discipline.color}`}>
                    {discipline.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <BiBookOpen size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Comprehensive Curriculum
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Structured learning paths from basics to advanced topics across
                all scientific disciplines.
              </p>
            </div>

            <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <BiAtom size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Interactive Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Hands-on experiments, simulations, and quizzes to reinforce your
                understanding.
              </p>
            </div>

            <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <BiRocket size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Expert Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Connect with researchers, educators, and fellow learners
                worldwide.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-20 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-3xl">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300">
              "The important thing is not to stop questioning. Curiosity has its
              own reason for existing."
            </blockquote>
            <cite className="block mt-4 text-sm text-gray-500 dark:text-gray-400">
              — Albert Einstein
            </cite>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
