// src\public_app\layout\navbar\components\SearchBar.jsx
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  return (
    <div className="flex-1 max-w-xl mx-4">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search across all sciences..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(false)}
          className="w-full pl-10 pr-4 py-2 rounded-full border border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

        {/* Quick search suggestions (optional) */}
        {isExpanded && searchQuery.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-blue-200 dark:border-gray-800 py-2 z-50">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Quick Suggestions
            </div>
            {["Quantum Physics", "DNA Structure", "Chemical Reactions"].map(
              (suggestion) => (
                <button
                  key={suggestion}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => {
                    setSearchQuery(suggestion);
                    setIsExpanded(false);
                  }}
                >
                  {suggestion}
                </button>
              ),
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
