// import React, { useCallback, useEffect, useRef, useState } from "react";
import { aboutMeData } from "../assets/lib/data";
import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
// import Client from "../assets/img/download.png";

import "./TalkingRobot.css";
// import robotImage from "../assets/AI-img/AI-img/drib_blink_bot.gif";
// import robotImage from "./robo.png";

const About: React.FC = () => {
  const { ref } = useSectionInView("About Us");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const messages = [
    "Hello! I'm a friendly robot.",
    "I'm here to assist you with any questions.",
    "Did you know that I can process information very quickly?",
    "I enjoy learning new things from humans like you!",
    "Let's work together to solve problems and create amazing things.",
  ];

  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typeText = useCallback(() => {
    if (charIndex < messages[messageIndex].length) {
      setText((prev) => prev + messages[messageIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    } else {
      setIsTyping(false);
    }
  }, [charIndex, messageIndex, messages]);

  const eraseText = useCallback(() => {
    if (text.length > 0) {
      setText((prev) => prev.slice(0, -1));
    } else {
      setMessageIndex((prev) => (prev + 1) % messages.length);
      setCharIndex(0);
      setIsTyping(true);
    }
  }, [text.length, messages.length]);
  
  useEffect(() => {
    // let timer;
    // let timer: NodeJS.Timeout;
    let timer: ReturnType<typeof setTimeout>;
    if (isTyping) {
      timer = setTimeout(typeText, 80);
    } else {
      timer = setTimeout(eraseText, 30);
    }
    return () => clearTimeout(timer);
  }, [isTyping, typeText, eraseText]);

  return (
    <React.Fragment>
      <section
        className="about-me mt-10"
        id="aboutus"
        ref={ref}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-full max-lg:w-full max-lg:p-7 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}
          >
            <center>
              <div
                className="rainbow "
                style={{
                  width: "330px",
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 10px",
                }}
              >
                <div
                  className="text-[--black] "
                  style={{ padding: "10px 0px" }}
                >
                  <div className="waviy">
                    <span className="waviy-span" style={{ color: "orange" }}>
                      A
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      b
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      o
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      u
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      t
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      &nbsp;
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      U
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      s
                    </span>
                  </div>
                </div>
              </div>
            </center>
            <br />
            <div className="flex text-center flex-col md:flex-row items-center justify-center max-lg:justify-start space-y-4 md:space-y-0 mt-16 mb-">
              <h2 className="text-[--black]  w-7/10  max-lg:text-left break-words md:w-3/5 md:mr-4">
                <center> {language === "DE" ? aboutMeData.description : aboutMeData.description_EN}</center>
              </h2>
              {/* <div className="w-full md:w-2/5 flex justify-center" style={{ borderRadius: "10px" }}>
                <center>
                  <img src={Client} alt="Client" className="max-w-[320px] h-auto" style={{ borderRadius: "10px" }} />
                </center>
              </div> */}
              {/* <img
                src={robotImage}
                alt="Talking Robot"
                className="robot-image"
              />
              <div className="speech-bubble">
                <p id="robot-text" style={{ color: "#00ffff" }}>
                  {text}
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
