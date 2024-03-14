import React, { useRef } from "react";
import { aboutMeData } from "../assets/lib/data";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useLanguage } from "../context/language-context";
import Ai from "../assets/img/healthiq.png";

const CarouselSlider: React.FC = () => {
    const { language } = useLanguage();
    // const paragraphs =
    //     language === "DE" ? aboutMeData.paragraphs_DE : aboutMeData.paragraphs_EN;

    return (
        <section className="about-me  relative">
            <div className="container mx-auto px-4">
                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000, // Adjust the delay as needed
                        disableOnInteraction: false,
                    }}
                    scrollbar={{ draggable: true }}
                    modules={[Autoplay, Scrollbar]}
                    className="3/4"
                    style={{ maxWidth: "90%", height: "200px" }} // Set maximum width to 100%
                >
                    <SwiperSlide>
                        <div className="bg-red-500 h-full flex justify-center items-center" style={{
                            backgroundImage: `url(${Ai})`,
                            borderRadius: "10px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            <h2>kavin</h2>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-red-500 h-full flex justify-center items-center" style={{
                            backgroundImage: `url(${Ai})`,
                            borderRadius: "10px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            <h2>kavin</h2>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-red-500 h-full flex justify-center items-center" style={{
                            backgroundImage: `url(${Ai})`,
                            borderRadius: "10px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            <h2>kavin</h2>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default CarouselSlider;
