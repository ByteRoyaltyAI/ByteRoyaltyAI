
import React, { useRef } from "react";
import { aboutMeData } from "../assets/lib/data";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import Client from "../assets/img/download.png"

const AboutMe: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const { ref } = useSectionInView("About Us");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
    }
  };
  const paragraphs =
    language === "DE" ? aboutMeData.paragraphs_DE : aboutMeData.paragraphs_EN;


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
        <center>  <h1 style={{ color: "skyblue" }}>What clients say ?</h1></center>
        <div style={{ marginTop: "-40px" }} className="flex flex-row justify-center gap-6 items-center   max-lg:flex-col max-lg:p-16 min-[1921px]:px-[45rem] min-[1921px]:mb-48">
          <Swiper
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}

            className="w-3/4 pt-32 relative z-2 pr-20 pb-32 pl-20 max-lg:w-full max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0 min-[1921px]:w-1/2"
          >
            {paragraphs.map((paragraph, index) => (
              <SwiperSlide
                className="bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left max-lg:p-10 cursor-grab"
                key={index}
              >

                <div>
                  <div style={{ width: "100%" }} className="gap-6 flex-row justify-start items-center max-lg:flex-col max-lg:justify-center max-lg:text-center ">
                    <div>
                      <center><img
                        src={paragraph.icon}
                        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
                      />
                      </center>
                    </div><br />
                    <div>
                      <center><h2>{paragraph.title}</h2></center><br />
                    </div>
                  </div>
                  <div className="flex flex-row gap-9 max-lg:flex-col" style={{ fontSize: "15px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad quas earum alias eos, temporibus eius corporis necessitatibus aut enim odit eum! Ipsum obcaecati quam ex aliquid veniam mollitia ipsa?
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;

