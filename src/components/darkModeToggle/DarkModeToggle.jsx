// ToggleSwitch.jsx

import React, { useState, useEffect } from "react";
import "./darkmode-toggle.css";

const DarkModeToggle = () => {
  const [checked, setChecked] = useState(false);

  // When component mounts, read the preference from localStorage and set the state accordingly
  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference) {
      setChecked(darkModePreference === "enabled");
    }
  }, []);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    const enableDarkMode = darkModePreference === "enabled";
    setChecked(enableDarkMode);
    document.body.className = enableDarkMode ? "dark-mode" : "";
  }, []);

  // Function to handle the toggle
  const handleToggle = () => {
    const newPreference = !checked;
    setChecked(newPreference);
    localStorage.setItem("darkMode", newPreference ? "enabled" : "disabled");
    // Here you can also update the actual theme of the application, e.g., applying a CSS class to the body
    document.body.className = newPreference ? "dark-mode" : "";
  };

  return (
    <div className="darkmode-toggle-container">
    <div className="darkmode-toggle-button">
      <button
        className={`darkmode-switch ${checked ? "dark" : ""}`}
        onClick={handleToggle}
      >
        {checked ? (
          <i className="moon ri-moon-fill"></i>
        ) : (
          <i className="ri-sun-line"></i>
        )}
      </button>
    </div>
  </div>
  );
};

export default DarkModeToggle;
