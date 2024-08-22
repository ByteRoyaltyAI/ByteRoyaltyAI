import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="flex justify-center w-full  -mb-10 mt-10">
        <div className="flex flex-col items-center  gap-10 ">
          <ComingSoonAnimation />
          <p className="text-[25px]">
            Contact us to stay updated with the best AI tools in market.
          </p>
          <p className="text-[16px] font-[500]">
            Streamline hiring, enhance candidate selection, and empower your HR
            team with AI-driven tools.
          </p>
        </div>
      </div>
  )
}

const ComingSoonAnimation: React.FC = () => {
    const letters = [
      "C",
      "o",
      "m",
      "i",
      "n",
      "g",
      " ",
      "s",
      "o",
      "o",
      "n",
      " ",
      ".",
      ".",
      ".",
    ];
  
    return (
      <div className="text-[4.rem] sm:text-[55px] font-semibold flex flex-wrap">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={letter === " " ? "w-[10px]" : ""}
            initial={{ opacity: 0, y: 20, color: "#4D4D4D" }}
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

export default ComingSoon
