// import React, { useRef } from "react";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { useLanguage } from "../context/language-context";
import Ai from "../assets/img/human.gif";
import web from "../assets/img/web.gif";
import world from "../assets/img/world.gif";
import ai5 from "../assets/img/ai5.gif";


const CarouselSlider: React.FC = () => {
    // const { language } = useLanguage();
    // const paragraphs =
    //     language === "DE" ? aboutMeData.paragraphs_DE : aboutMeData.paragraphs_EN;

    return (
        <section className="about-me  relative">
            <div className="container mx-auto px-4">
                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000, // Adjust the delay as needed
                        disableOnInteraction: false,
                    }}
                    scrollbar={{ draggable: true }}
                    modules={[Autoplay, Scrollbar]}
                    className="3/4"
                    style={{ maxWidth: "80%", height: "250px" }} // Set maximum width to 100%
                >
                    <SwiperSlide>
                        <div className="bg-red-500 h-full flex justify-center items-center" style={{
                            backgroundImage: `url(${Ai})`,
                            borderRadius: "10px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-red-500 h-full flex justify-center items-center" style={{
                            backgroundImage: `url(${web})`,
                            borderRadius: "10px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-red-500 h-full flex justify-center items-center" style={{
                            backgroundImage: `url(${world})`,
                            borderRadius: "10px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-red-500 h-full flex justify-center items-center" style={{
                            backgroundImage: `url(${ai5})`,
                            borderRadius: "10px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default CarouselSlider;
