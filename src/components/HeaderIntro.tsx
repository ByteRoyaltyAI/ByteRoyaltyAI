import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import logo from "../assets/img/logo.jpg"
import CarouselSlider from "./CarouselSlider";


const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />



      <div className="flex items-center justify-center">
        <h1>FUTURE IS AI</h1>
        <img src={logo} style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
      </div>

      <div className="grid grid-cols-12 flex justify-center px-30 sm:px-32 py-4">
        <div className="col-span-12 sm:col-span-7 text-center">
          <h1>
            Unlock the future: AI revolutionizes the way we live, work, and connect, shaping tomorrow's everyday experience.
          </h1>
        </div>
        <div className="col-span-12 sm:col-span-5">
          <CarouselSlider />
        </div>
      </div>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-15 max-lg:flex-col max-lg:items-center" style={{ zIndex: "9" }}>
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={language === "DE" ? button.label.de : button.label.en}
            iconSVG={button.icon}
            link={`#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            onClick={() => {
              setActiveSection(button.name);
              setTimeOfLastClick(Date.now());
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default HeaderIntro;