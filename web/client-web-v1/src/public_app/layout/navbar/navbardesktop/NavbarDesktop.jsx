import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaAtom, FaRobot, FaCog, FaChevronDown } from "react-icons/fa";
import { navItems } from "./NavbarDesktopData";
import SearchBar from "../components/SearchBar";

const NavbarDesktop = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownEnter = (index) => setOpenDropdown(index);
  const handleDropdownLeave = () => setOpenDropdown(null);

  return (
    <nav className="sticky top-0 z-50 transition-colors duration-200">
      {/* Main Navbar with Gradient */}
      <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400"></div>

        {/* First Row: Logo, Search, Icons, Sign Up */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                <FaAtom className="text-3xl text-blue-500 dark:text-blue-400" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
                Science
                <span className="text-blue-600 dark:text-blue-400">Qubit</span>
              </span>
            </Link>

            {/* Desktop Search Component */}
            <SearchBar />

            {/* Right Side Icons */}
            <div className="flex items-center gap-2">
              {/* AI Assistant Icon */}
              <Link
                to="/ai-assistant"
                className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-800 rounded-full relative group"
                aria-label="AI Assistant"
              >
                <FaRobot size={18} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                  AI Assistant
                </span>
              </Link>

              {/* Settings Icon */}
              <Link
                to="/settings"
                className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-800 rounded-full relative group"
                aria-label="Settings"
              >
                <FaCog size={18} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                  Settings
                </span>
              </Link>

              {/* Sign Up Button */}
              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg shadow-blue-200 dark:shadow-none ml-1"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Second Row: Main Navigation Menu - No scroll, wrap if needed */}
        <div className="border-t border-blue-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
            <ul className="flex flex-wrap items-center justify-center gap-1">
              {navItems.map((item, index) => (
                <li
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.dropdown ? (
                    <div className="flex items-stretch">
                      {/* Main navigation link */}
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-4 py-2 rounded-l-lg transition-all duration-200
                          ${
                            isActive
                              ? "bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-400 font-medium"
                              : "text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800"
                          }`
                        }
                      >
                        <item.icon size={16} className={item.color} />
                        <span className="font-medium whitespace-nowrap">
                          {item.label}
                        </span>
                      </NavLink>

                      {/* Dropdown toggle button */}
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className={`px-2 py-2 rounded-r-lg transition-all duration-200
                          ${
                            openDropdown === index
                              ? "bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-400"
                              : "text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800"
                          }`}
                        aria-label="Toggle dropdown"
                      >
                        <FaChevronDown size={12} />
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdown === index && (
                        <div className="absolute left-0 top-full mt-0 w-64 bg-white dark:bg-gray-900 rounded-b-2xl shadow-xl border border-blue-200 dark:border-gray-800 py-2 z-50">
                          <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-blue-100 dark:border-gray-800 mb-1">
                            {item.label} Topics
                          </div>
                          {item.dropdown.map((subItem) => (
                            <NavLink
                              key={subItem.to}
                              to={subItem.to}
                              className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 text-sm transition-colors
                                ${
                                  isActive
                                    ? "bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-blue-400 font-medium"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800"
                                }`
                              }
                              onClick={() => setOpenDropdown(null)}
                            >
                              <subItem.icon size={14} className={item.color} />
                              <span>{subItem.label}</span>
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Items without dropdown (like Home)
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                        ${
                          isActive
                            ? "bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-400 font-medium"
                            : "text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800"
                        }`
                      }
                    >
                      <item.icon size={16} className={item.color} />
                      <span className="font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
