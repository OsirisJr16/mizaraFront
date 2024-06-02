import { useEffect, useState } from "react";

const useDarkMode = ({ initialValue }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialValue);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]); // Exécute cet effet seulement quand `isDarkMode` change.

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return {
    mode: isDarkMode,
    toggleMode,
  };
};

export default useDarkMode;
