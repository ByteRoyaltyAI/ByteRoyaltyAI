import { servicesSlidesData } from "../assets/lib/sliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        initialSlide={1}
        style={{ width: "100%", paddingTop: "20px", paddingBottom: "50px" }}
      >
        {servicesSlidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            onClick={() => navigate("/services/" + slide.link)}
            style={{
              background: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(5px)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "300px",
              height: "410px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "10px",
              outline: "none",
            }}
          >
            <div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={slide.imageUrl}
                  style={{
                    width: "300px",
                    height: "210px",
                    borderRadius: "10px",
                  }}
                  alt={slide.title}
                />
              </div>
              <div>
                <center>
                  <h4
                    style={{
                      fontSize: "2.2rem",
                      paddingTop: "3px",
                      paddingBottom: "3px",
                    }}
                  >
                    {slide.title}
                  </h4>
                </center>
                <p
                  style={{
                    fontSize: "small",
                    opacity: ".8",
                    textAlign: "center",
                  }}
                >
                  {slide.description}
                </p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={slide.tool}
                style={{
                  width: "200px",
                  height: "100px",
                  borderRadius: "10px",
                }}
                alt="Digi"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -left-20 top-1/2 lg:left-0">
        <button className="swiper-button-prev hidden sm:absolute"></button>
      </div>
      <div className="absolute -right-20 top-1/2 lg:right-0">
        <button className="swiper-button-next "></button>
      </div>
    </div>
  );
}

export default Banner;
