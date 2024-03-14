
import React, { useRef } from "react";
import { aboutMeData } from "../assets/lib/data";

import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import Client from "../assets/img/download.png"

const AboutMe: React.FC = () => {
 
  const { ref } = useSectionInView("About Us");
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
      <section className="about-me relative mt-16 " id="aboutus" ref={ref}>
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-full max-lg:w-full max-lg:p-7 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}
          >
            <center>
              <div className="rainbow " style={{ width: "330px", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 10px" }}>

                <p className="text-[--black] " style={{ padding: "10px 0px" }}>
                  <div className="waviy">
                    <span className="waviy-span" style={{ color: "orange" }}>A</span>
                    <span className="waviy-span" style={{ color: "orange" }}>b</span>
                    <span className="waviy-span" style={{ color: "orange" }}>o</span>
                    <span className="waviy-span" style={{ color: "orange" }}>u</span>
                    <span className="waviy-span" style={{ color: "orange" }}>t</span>
                    <span className="waviy-span" style={{ color: "orange" }}>&nbsp;</span>
                    <span className="waviy-span" style={{ color: "orange" }}>U</span>
                    <span className="waviy-span" style={{ color: "orange" }}>s</span>
                  </div>
                </p>

              </div>
            </center>
            <br />
            <div className="flex flex-col md:flex-row items-center justify-center max-lg:justify-start space-y-4 md:space-y-0" >
              <h2 className="text-[--black] text-center   max-lg:text-left break-words md:w-3/5 md:mr-4">
                {language === "DE" ? aboutMeData.description : aboutMeData.description_EN}
              </h2>
              <div className="w-full md:w-2/5 flex justify-center" style={{ borderRadius: "10px" }}>
                <center>
                  <img src={Client} alt="Client" className="max-w-[300px] h-auto" />
                </center>
              </div>
            </div>


          </motion.div>
        </div>
        
      </section>
    </React.Fragment>
  );
};

export default AboutMe;

