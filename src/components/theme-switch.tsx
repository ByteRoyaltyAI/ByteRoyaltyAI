import { useTheme } from "../context/theme-context";
import {
  BsMoon,
  BsSun,
} from "react-icons/bs";
import { useState, useEffect } from "react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    const handleTouchMove = () => {
      setIsTooltipVisible(false);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("touchmove", handleTouchMove);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className={`fixed right-10  transition-all z-50
      ${isTooltipVisible ? "h-[24rem] w-[4rem] z-10" : " h-[4rem] w-[4rem] z-10"
        }
      ${isMobile ? "top-10 h-[20rem]" : "bottom-5"}`}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <button
        className={`shortcut-btn fixed z-10 bottom-5 right-10  w-[4rem] h-[4rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 ${theme === "dark" ? "bg-[--darkblue]" : "bg-white"
          }
        ${isMobile ? "bottom-5" : "bottom-5"}
        `}
        onClick={toggleTheme}
        aria-label="Switch Dark and Light"
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>

    </div>
  );
}
