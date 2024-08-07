import { servicesSlidesData } from "../assets/lib/sliderData";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Banner() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                initialSlide={1}
                style={{ width: '100%', paddingTop: '20px', paddingBottom: '50px' }}
            >
                {servicesSlidesData.map((slide, index) => (
                    <SwiperSlide key={index} style={{
                        background: "rgba(255, 255, 255, 0.5)", // White with 50% opacity
                        backdropFilter: "blur(5px)", // Adding blur effect
                        borderRadius: "10px",
                        border: "1px solid rgba(255, 255, 255, 0.3)", // Adding border for contrast
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "300px",
                        height: "410px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "10px",
                        outline: "none"
                    }}>
                        <div>
                            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <img src={slide.imageUrl} style={{ width: "300px", height: "210px", borderRadius: "10px", }} alt={slide.title} />
                            </div>
                            <div>
                                <center> <h4 style={{fontSize:"2.2rem",paddingTop:"3px",paddingBottom:"3px"}}>{slide.title}</h4></center>
                                <p style={{ fontSize: "small", opacity: ".8", textAlign: "center" }}>{slide.description}</p>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <img src={slide.tool} style={{ width: "200px", height: "100px", borderRadius: "10px", }} alt="Digi" />
                        </div>
                    </SwiperSlide>


                ))}
            </Swiper>
        </>
    );
}
export default Banner;
