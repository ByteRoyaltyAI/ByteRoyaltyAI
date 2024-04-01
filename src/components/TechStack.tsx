import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";

import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import RadialGradient from "./RadialGradient";
import { motion, useScroll, useTransform } from "framer-motion";
import Banner from "./ServiceBanner";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Services");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <React.Fragment>
      <section
        className="relative tech-stack max-lg:p-16 "
        id="services"
        ref={ref}
      >
        <RadialGradient
          scale="scale-y-[3]"
          opacity={theme === "light" ? "opacity-30" : "opacity-30"}
          position="top-[55rem]"
        />
        <div className="title-container flex flex-col justify-center items-center p-32    gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:items-start max-lg:py-16 ">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}
          >
            <div className="rainbow " style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 8px", width: "300px" }}>
              <p className="font-black  text-center" >
                <div className="waviy">
                  <span className="waviy-span" style={{ color: "orange" }}>O</span>
                  <span className="waviy-span" style={{ color: "orange" }}>u</span>
                  <span className="waviy-span" style={{ color: "orange" }}>r</span>
                  <span className="waviy-span" style={{ color: "orange" }}>&nbsp;</span>
                  <span className="waviy-span" style={{ color: "orange" }}>S</span>
                  <span className="waviy-span" style={{ color: "orange" }}>e</span>
                  <span className="waviy-span" style={{ color: "orange" }}>r</span>
                  <span className="waviy-span" style={{ color: "orange" }}>v</span>
                  <span className="waviy-span" style={{ color: "orange" }}>i</span>
                  <span className="waviy-span" style={{ color: "orange" }}>c</span>
                  <span className="waviy-span" style={{ color: "orange" }}>e</span>
                  <span className="waviy-span" style={{ color: "orange" }}>s</span>
                </div>
              </p >
            </div><br />
            <h2 className="w-full px-4 sm:px-6 md:px-8 text-center">
              {language === "DE"
                ? "Meine Techstack und Skills"
                : "We Help You To Build High-Quality Digital Solutions And Products As Well As Deliver A Wide Range Of Related Professional Services. We Are Providing World-Class Service To Our Clients."}
            </h2>

          </motion.div>
        </div>
        <div className="flex justify-center items-center hover-slider">
          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/4 xl:w-3/4">
            <Banner />
          </div>
        </div>

      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          zIndex: 10,
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default TechStack;
