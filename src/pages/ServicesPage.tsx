import { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import NeoAI from "../components/NeoAI";
import bannerBg from "../assets/img/bannerbg.webp";
import GlassmorphismWrapper from "../components/GlassmorphismWrapper";
import ServicesFooter from "../components/ServicesFooter";
import { data } from "../assets/lib/ServicesData";
import { useNavigate, useParams } from "react-router-dom";

const ServicesPage = () => {
  const params=useParams<{service:string}>()
  const servicesData=data[params.service as string]
  const navigate=useNavigate()

  useEffect(() => {
    if (!servicesData) {
      navigate('/');
    }
  }, [servicesData, navigate]);

  if (!servicesData) return null;

  return (
    <div className="mt-[8.5rem] ">
      <NeoAI />
      {/* header */}

      <div className="flex justify-center  ">
        <div className="flex flex-col justify-center items-center h-[65vh] sm:h-[75vh] gap-10 w-[95%] sm:w-[80%] lg:w-[70%] xl:w-[65%] text-center pb-5">
          <p className="text-[3.8rem] sm:text-[6.8rem] font-semibold ">
            {servicesData.title}
          </p>
          <p className="text-[16px] ">{servicesData.desc}</p>
        </div>
      </div>

      {/* description */}
      <section className="quote-banner relative overflow-x-clip z-[1]">
        <div
          className="quote-outer-container bg-[--darkblue] h-[50vh] -rotate-3 flex justify-center items-center scale-110 max-lg:h-full min-[1921px]:px-96"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="quote-container rotate-3 flex items-center flex-col justify-center p-20 sm:p-56 max-lg:p-20 text-center ">
            <h3 className="text-[--white] text-center text-7xl   max-lg:text-[3rem] max-lg:mb-10 max-lg:leading-tight ">
              Service Description
            </h3>
            <div className="px-0 sm:px-10 pt-10 space-y-5">
              <p className="text-[30px] font-semibold pb-2"> </p>
              {servicesData.serviceDesc.map((text, index) => (
                <p className="text-[15px]" key={index}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GlassmorphismWrapper>
        {/* technical offerings */}
        <div className="flex flex-col lg:flex-row gap-16 px-12 pt-60">
          <img
            src={servicesData.img}
            className="w-full lg:w-1/2 h-[40vh] md:h-[75vh] object-cover rounded-md"
            alt="development"
          />

          <div className="flex flex-col w-full lg:w-1/2 ">
            {servicesData.features.map((feature, index) => (
              <div
                className="flex items-center gap-5 border-gray-600 border-b py-14 w-[95%]"
                key={index}
              >
                <div>
                  <TiTick className="h-12 w-12 bg-[#0EBAB1] rounded-full " />
                </div>
                <p className="text-[15px] sm:text-[20px] ">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* benifits */}
        <div className="px-[3%] space-y-12 py-40">
          <p className="font-bold text-[30px]">Benifits</p>
          {servicesData.benifits.map((benifit, index) => (
            <div className="flex gap-2 " key={index}>
              <div className="h-10 w-10">
                <GoDotFill className="text-[#0EBAB1] pt-1.5 h-7 w-7" />
              </div>
              <p className="text-[15px]">
                <strong>{benifit.emphasis} </strong>
                {benifit.text}
              </p>
            </div>
          ))}
        </div>
      </GlassmorphismWrapper>

      {/* footer */}
      <ServicesFooter/>
    </div>
  );
};



export default ServicesPage;
