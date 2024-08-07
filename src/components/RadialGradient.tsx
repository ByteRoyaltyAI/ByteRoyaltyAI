import React, { useEffect, useState } from "react";
import { useTheme } from "../context/theme-context";

interface RadialGradientProps {
  scale?: string;
  opacity: string;
  position?: string;
  overflow?: string;
}

const RadialGradient: React.FC<RadialGradientProps> = ({
  // scale,
  opacity,
  position,
  overflow,
}) => {
  const [mouseXPercentage, setMouseXPercentage] = useState<number>(0);
  const [mouseYPercentage, setMouseYPercentage] = useState<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newMouseXPercentage = Math.round((event.pageX / windowWidth) * 100);
      const newMouseYPercentage = Math.round(
        (event.pageY / windowHeight) * 100
      );

      setMouseXPercentage(newMouseXPercentage);
      setMouseYPercentage(newMouseYPercentage);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const radialGradientStyle: React.CSSProperties = {
    background: `radial-gradient(at ${mouseXPercentage}% ${mouseYPercentage}%, #1b243a, ${
      theme === "dark" ? "#0c1220" : "" // No need for conditional check as theme is always "dark"
    })`,
  };

  return (
    <div
      // rotate-180 for mirrored effect
      className={`radial-gradient-styling absolute ${position} left-0 w-full -z-[1] h-[100vh] ${opacity} ${overflow}`}
      style={radialGradientStyle}
    ></div>
  );
};

export default RadialGradient;
