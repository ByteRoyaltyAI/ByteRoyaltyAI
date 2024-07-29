// import bannerBg from "../assets/img/bannerbg.webp";
// import React, { useRef } from "react";
// import Button from "./Button";
// import LiveTicker from "./ParallaxText";
// import { projectsData, toastMessages } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { ToastContainer, toast } from "react-toastify";
// import { Tooltip as ReactTooltip } from "react-tooltip";
// import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
// import { motion, useScroll, useTransform } from "framer-motion";
import { aboutMeData } from "../assets/lib/data";

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useRef } from "react";
// import RadialGradient from "./RadialGradient";

function Testimonial() {
    const { language } = useLanguage();
    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);
    const paragraphs = language === "DE" ? aboutMeData.paragraphs_DE : aboutMeData.paragraphs_EN;
    const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty(
                "--progress",
                String(1 - progress)
            );
            progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
        }
    };
    return (
        <div>
            {/* <RadialGradient scale="scale-y-125" opacity="opacity-70" /> */}
            {/* <center>  <h1 style={{ color: "skyblue", zIndex: "999" }}>Testimonial</h1></center> */}
            <center>
              <div
                className="rainbow "
                style={{
                  width: "350px",
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
                      T
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      E
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      S
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      T
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      I
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      M
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      O
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      N
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      I
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      A
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      L
                    </span>
                    <span className="waviy-span" style={{ color: "orange" }}>
                      S
                    </span>
                  </div>
                </div>
              </div>
            </center>
            <div className="flex flex-row justify-center gap-6 items-center   max-lg:flex-col max-lg:p-16 min-[1921px]:px-[45rem] min-[1921px]:mb-48" style={{ marginTop: "-40px" }}>
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
                                    {paragraph.description}
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    )
}
export default Testimonial;
