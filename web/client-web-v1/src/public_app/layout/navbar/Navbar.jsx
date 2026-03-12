// src\public_app\layout\navbar\Navbar.jsx
import React, { useState, useEffect } from "react";
import NavbarDesktop from "./navbardesktop/NavbarDesktop";
import NavbarMobile from "./navbarmobile/NavbarMobile";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from your auth state

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Desktop Navbar - hidden on mobile */}
      <div className="hidden lg:block">
        <NavbarDesktop
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          isLoggedIn={isLoggedIn}
        />
      </div>

      {/* Mobile Navbar - hidden on desktop */}
      <div className="lg:hidden">
        <NavbarMobile
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </>
  );
};

export default Navbar;
