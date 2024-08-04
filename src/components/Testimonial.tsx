import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLanguage } from "../context/language-context";
import { aboutMeData } from "../assets/lib/data";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useRef } from "react";

function Testimonial() {
    const { language } = useLanguage();
    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);
    const swiperRef = useRef<any>(null);
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

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div>
            <center>
              <div
                className="rainbow"
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
                  className="text-[--black]"
                  style={{ padding: "10px 0px" }}
                >
                  <div className="waviy">
                    {["T", "E", "S", "T", "I", "M", "O", "N", "I", "A", "L", "S"].map((letter, index) => (
                      <span key={index} className="waviy-span" style={{ color: "orange" }}>
                        {letter}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </center>
            <div className="flex flex-row justify-center gap-6 items-center max-lg:flex-col max-lg:p-16 min-[1921px]:px-[45rem] min-[1921px]:mb-48" style={{ marginTop: "-40px" }}>
                <div className="relative w-3/4 max-lg:w-full min-[1921px]:w-1/2">
                    <Swiper
                        ref={swiperRef}
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
                        className="pt-32 z-2 pr-20 pb-32 pl-20 max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0"
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
                                                alt="Testimonial icon"
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
                    <button
                        className="absolute md:hidden -left-6 top-1/2 transform -translate-y-1/2 bg-[--lightblue] text-[--darkblue] rounded-full h-16 w-16 z-10"
                        onClick={handlePrev}
                    >
                        &lt;
                    </button>
                    <button
                        className="absolute md:hidden -right-6 top-1/2 transform -translate-y-1/2 bg-[--lightblue] text-[--darkblue] rounded-full h-16 w-16 z-10"
                        onClick={handleNext}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;