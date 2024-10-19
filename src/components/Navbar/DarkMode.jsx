import React, { useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    saveTheme();
  },[theme]);
  function saveTheme() {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
  function handleSwitch(e){
    setTheme(theme==="light"  ? "dark" : "light");
    
  }
  return (
    <div className="relative" onClick={handleSwitch}>
      <img
        src={LightButton}
        className={`w-12 cursor-pointer
         drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
          transition-all 
          duration-300 absolute
           right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} `}
        alt=""
      />
      <img
        src={DarkButton}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`}
        alt=""
      />
    </div>
  );
};

export default DarkMode;
