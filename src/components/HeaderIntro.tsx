import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";
import CarouselSlider from "./CarouselSlider";



const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();

  function scroll(val: string) {
    let element = document.getElementById(`${val}`);

    if (element) {
      const offset = -70; // Adjust 50 according to our need

      // Get the element's top position relative to the viewport
      const elementTop = element.getBoundingClientRect().top;

      // Scroll to the element's position with an offset
      window.scrollBy({
        top: elementTop + offset,
        behavior: 'smooth'
      });
    }


  }

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center  max-lg:gap-6"
      id="home"
      style={{ marginTop: "100px" }}
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />
      <div className="grid grid-cols-12 flex justify-center px-30 sm:px-32 py-4" style={{ marginTop: "40px" }}>
        <div className="col-span-12 md:col-span-7 text-center">
          <div className="typing-container">
            <img className="typing-image" src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=WELCOME+TO;+Imaigen;" />
          </div>
          <h1>
            Empower Your Business Today: Streamline Operations, Enhance Customer Experiences, and Gain a Competitive Edge with AI.
          </h1>
        </div>
        <div className="col-span-12 md:col-span-5" style={{ zIndex: "-1" }}>
          <CarouselSlider />
        </div>
      </div>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-15 max-lg:flex-col max-lg:items-center z-9999" style={{ zIndex: "9" }}>
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={language === "DE" ? button.label.de : button.label.en}
            iconSVG={button.icon}
            link={`#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            onClick={() => {
              scroll(button.link)
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default HeaderIntro;
