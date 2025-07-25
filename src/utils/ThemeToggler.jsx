import React, { useState, useEffect } from "react";

function ThemeToggler() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Apply theme class to body when theme changes
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return (
    <div className="theme-toggle-container">
      <label className="theme-toggle-label">
        <input
          type="checkbox"
          checked={isDarkTheme}
          onChange={toggleTheme}
          className="theme-toggle-checkbox"
        />
        <span className="theme-toggle-slider"></span>
      </label>
      <span className="theme-label">
        {isDarkTheme ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
}


export default ThemeToggler;
