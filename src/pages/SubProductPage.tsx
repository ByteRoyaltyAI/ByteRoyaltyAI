import { useState, useEffect } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
// import { RxDotFilled } from "react-icons/rx";
import { productsData } from "../assets/lib/ProductsData";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import DynammicInputComponents from "../components/DynammicInputComponents";
import NeoAI from "../components/NeoAI";

const SubProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const data = productsData[params.subProduct as string];

  if (data === undefined) {
    useEffect(() => {
      navigate("/");
    }, []);
    return null;
  }

  const [showAns, setShowAns] = useState<boolean[]>(
    new Array(data?.faq.length).fill(false)
  );
  // const [imageIndex, setImageIndex] = useState<number>(0);

  return (
    <div>
    <div className="flex flex-col items-center mt-60 gap-72">
      <NeoAI />
      <div className="flex justify-center   ">
        <div className="flex flex-col gap-72 w-[90%] sm:w-[80%] text-[#FFFFFF] ">
          <div className="flex justify-center gap-5 text-center  ">
            <div className="w-full sm:w-[75%] mt-20">
              <h1
                style={{
                  fontSize: "clamp(2.6rem, 5vw, 5rem)",
                  textShadow: "0 0 10px rgba(0,255,255,0.5)",
                  height: "clamp(2rem, 12vw, 4rem)",
                  fontWeight: "600",
                  marginBottom: "50px",
                }}
              >
                {data.topic.name}
              </h1>
              <div>
                <h3
                  style={{ color: "white" }}
                  className="backdrop-blur-[2px] text-[1.8rem] sm:text-[2.2rem]"
                >
                  {data.topic.desc}{" "}
                </h3>
              </div>

              {/* <h3 className="text-[1.2rem] text-[#E8E8E8] mt-2">Updated over a week ago</h3> */}
            </div>
          </div>

          <DynammicInputComponents />

          {/* <div className="flex jusitify-center ">
            {data.imagesData && (
              <div className="flex w-[95%] sm:w-[90%]  ">
                <div className="flex flex-col sm:flex-row items-center gap-16 sm:gap-0  ">
                  <div className="w-full sm:w-[70%]  ">
                    {data.imagesData.map((data, index) => (
                      <img
                        src={data.img}
                        key={index}
                        alt="product display"
                        className={`w-full h-[25rem] sm:h-[50rem] bg-slate-50 rounded-xl object-cover ${
                          imageIndex === index ? "block" : "hidden"
                        }`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }} //ensure the height,width.
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-center  w-full  sm:w-[30%]">
                    <div className="flex flex-col gap-5 text-">
                      {data?.imagesData.map((data, index) => (
                        <div className="flex items-center gap-2" key={index}>
                          <div className="h-12 w-12 ">
                            {imageIndex === index && (
                              <RxDotFilled className="h-12 w-12  text-[#58BE4F]" />
                            )}
                          </div>
                          <p
                            style={{
                              color: imageIndex === index ? "white" : "C3C6C8",
                              width: "100%",
                            }}
                            onClick={() => setImageIndex(index)}
                          >
                            {data.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center py-40 backdrop-blur-[1.5px] w-[90%] sm:w-[70%] lg:w-[50%] ">
        <h2 className="text-[3rem] font-semibold mb-5 text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-16 items-center  pb-40 w-full">
          {data?.faq.map((faq, index) => (
            <div key={index} className=" relative w-full">
              <h3
                className="text-[1.7rem] sm:text-[2rem] text-[#E8E8E8] cursor-pointer bg-[#1A2238] p-10 rounded-md pr-20 "
                onClick={() => {
                  const newShowAns = [...showAns];
                  newShowAns[index] = !newShowAns[index];
                  setShowAns(newShowAns);
                }}
              >
                {faq.question}
              </h3>
              {showAns[index] && (
                <div className="text-[1.8rem] sm:text-[2rem] text-white font-semibold mt-5">
                  {faq.answer}
                </div>
              )}
              {showAns[index] ? (
                <VscEyeClosed className="absolute top-10 right-7 h-14 w-14 text-white " />
              ) : (
                <VscEye className="absolute top-10 right-7 h-14 w-14 text-white" />
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubProductPage;
