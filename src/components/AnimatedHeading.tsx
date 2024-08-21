// src/components/AnimatedHeading.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  title: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ title }) => {
  const letters = title.split("");

  return (
    <div
      className="text-center"
      style={{
        fontSize: "clamp(4rem, 5vw, 7rem)",
        textShadow: "0 0 10px rgba(0,255,255,0.5)",
        height: "clamp(4rem, 15vw, 8rem)",
        fontWeight: "600",
        marginBottom: "50px",
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={letter === " " ? "w-[10px]" : ""}
          initial={{ opacity: 0, y: 20, color: "black" }}
          animate={{ opacity: 1, y: 0, color: "white" }}
          transition={{
            opacity: { duration: 0.4, delay: index * 0.1 },
            y: { duration: 0.4, delay: index * 0.1 },
            color: {
              duration: 0.4,
              delay: letters.length * 0.07 + index * 0.07,
            },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedHeading;
