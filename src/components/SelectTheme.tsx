import React, { useContext } from 'react';
import { ThemeContext } from './../theme/ThemeContext';

const SelectTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          borderRadius: "4px",
          backgroundColor: theme.secondaryColor,
          color: theme.onSecondaryColor,
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
          transition: "background-color 0.5s ease",
        }}
      >
        {theme.mode === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
  )
}

export default SelectTheme