import { TiTick } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import NeoAI from "../components/NeoAI";
import bannerBg from "../assets/img/bannerbg.webp";
import GlassmorphismWrapper from "../components/GlassmorphismWrapper";
import ServicesFooter from "../components/ServicesFooter";

const ServicesPage = () => {
  return (
    <div className="mt-[8.5rem] ">
      <NeoAI />
      {/* header */}

      <div className="flex justify-center  ">
        <div className="flex flex-col justify-center items-center h-[65vh] sm:h-[75vh] gap-10 w-[95%] sm:w-[80%] lg:w-[70%] xl:w-[65%] text-center pb-5">
          <p className="text-[3.8rem] sm:text-[6.8rem] font-semibold ">
            {data.title}
          </p>
          <p className="text-[16px] ">{data.desc}</p>
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
              {data.serviceDesc.map((text, index) => (
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
            src={data.img}
            className="w-full lg:w-1/2 h-[40vh] md:h-[75vh] object-cover rounded-md"
            alt="development"
          />

          <div className="flex flex-col w-full lg:w-1/2 ">
            {data.features.map((feature, index) => (
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
          {data.benifits.map((benifit, index) => (
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

let data = {
  title: "Web Development",
  desc: "Encompasses building and maintaining websites, including front-end (user interface) and back-end (server-side) development.",
  serviceDesc: [
    "We offer Web Development Services to businesses of all sizes to give them a boost.",
    "Web development involves a range of tasks, it involves a range of tasks, including designing the user interface, developing the back-end functionality, and ensuring that the website or web app is responsive and user-friendly.",
    "Web development encompasses both the visual aspects of a website and its underlying technical infrastructure.",
  ],
  features: [
    "Front-end Development",
    "Back-end Development",
    "Content Management System (CMS) Integration",
    "E-commerce Features",
    "Responsive Design",
  ],
  img: "https://cdn.prod.website-files.com/65e9d803e7334ec910a26f07/6601698cb7dff0363a482d7d_Web%20Development%20Service-p-800.webp",
  benifits: [
    {
      emphasis: "Tailored to Specific Needs: ",
      text: "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
    },
    {
      emphasis: "Enhanced Efficiency: ",
      text: "Custom solutions streamline processes, automate tasks, and eliminate inefficiencies, boosting productivity and reducing manual work.",
    },
    {
      emphasis: "Tailored to Specific Needs: ",
      text: "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
    },
    {
      emphasis: "Tailored to Specific Needs: ",
      text: "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
    },
  ],
};

export default ServicesPage;
