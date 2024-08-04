import React, { useEffect, useState } from "react";
import "./RippleButton.css";

interface RippleButtonProps {
  label: string;
  // onClick: () => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({ label }) => {
  const [ripples, setRipples] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples((prevRipples) => [...prevRipples, Date.now()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a href="#consultation">
      <button className="ripple-button ">
        {ripples.map((ripple) => (
          <span key={ripple} className="ripple" />
        ))}
        {label}
      </button>
    </a>
  );
};

export default RippleButton;
