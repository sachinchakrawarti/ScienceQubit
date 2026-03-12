import React from "react";
import {
  BiAtom,
  BiFlask,
  BiDna,
  BiMath,
  BiPlanet,
  BiHeart,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoYoutube,
  BiLogoInstagram,
  BiEnvelope,
  BiPhone,
  BiMap,
  BiNews,
  BiBookOpen,
  BiHelpCircle,
  BiShieldQuarter,
  BiCookie,
} from "react-icons/bi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#", icon: <BiBookOpen /> },
    { name: "Contact", href: "#", icon: <BiEnvelope /> },
    { name: "FAQ", href: "#", icon: <BiHelpCircle /> },
    { name: "Blog", href: "#", icon: <BiNews /> },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#", icon: <BiShieldQuarter /> },
    { name: "Terms of Service", href: "#", icon: <BiBookOpen /> },
    { name: "Cookie Policy", href: "#", icon: <BiCookie /> },
  ];

  const scienceCategories = [
    { name: "Mathematics", icon: <BiMath />, href: "#" },
    { name: "Biology", icon: <BiDna />, href: "#" },
    { name: "Chemistry", icon: <BiFlask />, href: "#" },
    { name: "Physics", icon: <BiAtom />, href: "#" },
    { name: "Astronomy", icon: <BiPlanet />, href: "#" },
    { name: "Sexology", icon: <BiHeart />, href: "#" },
  ];

  const socialLinks = [
    {
      icon: <BiLogoGithub />,
      href: "#",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: <BiLogoTwitter />,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: <BiLogoLinkedin />,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: <BiLogoYoutube />,
      href: "#",
      label: "YouTube",
      color: "hover:text-red-600",
    },
    {
      icon: <BiLogoInstagram />,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
  ];

  const contactInfo = [
    { icon: <BiMap />, text: "123 Science Avenue, Knowledge City, SC 12345" },
    { icon: <BiPhone />, text: "+1 (555) 123-4567" },
    { icon: <BiEnvelope />, text: "info@sciencequbit.com" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BiAtom className="text-3xl text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Science
                <span className="text-blue-600 dark:text-blue-400">Qubit</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering minds with comprehensive science education and research
              resources. Your gateway to understanding the universe, from
              quantum particles to cosmic scales.
            </p>
            {/* Newsletter Signup */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Science Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Science Categories
            </h3>
            <ul className="space-y-2">
              {scienceCategories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="flex items-center space-x-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="text-blue-600 dark:text-blue-400">
                      {category.icon}
                    </span>
                    <span>{category.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="text-blue-600 dark:text-blue-400">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="text-blue-600 dark:text-blue-400">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`text-2xl text-gray-500 dark:text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      SSL
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">
                      PCI
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Secure & Trusted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} ScienceQubit. All rights reserved.
            </div>

            {/* Footer Navigation */}
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Careers
              </a>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Press
              </a>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Partners
              </a>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <select className="text-xs bg-transparent border border-gray-300 dark:border-gray-700 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Floating */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
