// import axios from "axios";
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { RxDotFilled } from "react-icons/rx";
import { productsData } from "../assets/lib/ProductsData";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

// interface CurrentSituation {
//   current_profession: string;
//   years_experience: number;
//   location: string;
//   geographical_preference: string;
//   commitments: string;
// }

// interface CareerAdviceData {
//   current_situation: CurrentSituation;
//   is_fresh_graduate: boolean;
//   interests: string;
// }

interface ProductData {
  topic: {
    name: string;
    desc: string;
  };
  faq: { question: string; answer: string }[];
  imagesData: { img: string; text: string }[];
}

const SubProductPage = () => {
  const params = useParams();

  // Force resolve the TypeScript error by using 'as' assertion
  // @ts-ignore
  const data = productsData[params.subProduct as string] as ProductData;

  const [showAns, setShowAns] = useState<boolean[]>(
    new Array(data?.faq.length).fill(false)
  );
  const [imageIndex, setImageIndex] = useState<number>(0);

  // const handleSubmit = async () => {
  //   const careerData: CareerAdviceData = {
  //     current_situation: {
  //       current_profession: "Student",
  //       years_experience: 0,
  //       location: "Hyderabad, India",
  //       geographical_preference: "Africa",
  //       commitments: "I want to marry and settle in Africa with girlfriend",
  //     },
  //     is_fresh_graduate: true,
  //     interests: "Playing chess",
  //   };
  //   try {
  //     const response = await axios.post(import.meta.env.VITE_AI_API_URL + "career_advice", careerData);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //   }
  // };

  return (
    <div>
    <div className='flex justify-center  min-h-screen mt-20 bg-[#0C1220] pb-60'>
      <div className="flex flex-col gap-40 w-[90%] sm:w-[80%] text-[#FFFFFF]">
     
     <div className="flex justify-center gap-5 mt-40 text-center ">
      <div className="w-full sm:w-[75%]">
     <h1 className="font-bold text-[4rem] text-[#F1F3F4] mb-8">
     {data.topic.name}
     </h1>
     <h3 style={{color:"#C3C6C8",fontSize:"2rem"}} >{data.topic.desc} </h3>
     {/* <h3 className="text-[1.2rem] text-[#E8E8E8] mt-2">Updated over a week ago</h3> */}
     </div>
      </div>

      <div className="flex jusitify-center ">
        {data.imagesData ? 
            <div className="flex w-[95%] sm:w-[90%]  " >
              
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
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} //ensure the height,width.
                    />
                  ))}
                </div>

              <div className="flex items-center justify-center  w-full  sm:w-[30%]">
                <div className="flex flex-col gap-5 text-justify">
              {data?.imagesData.map((data,index)=>(
                <div className="flex items-center" key={index}>
                  <div className="h-12 w-12">
                {imageIndex===index && <RxDotFilled className="h-12 w-12  text-[#58BE4F]"/>}
                  </div>
                <p style={{color:imageIndex===index?"white":"C3C6C8"}} onClick={()=>setImageIndex(index)}>{data.text}</p>
                </div>
              ))}
              </div>
              </div>
                </div>
             </div>
             :
             <div className='flex justify-center w-full my-40 '>
            <div className='flex flex-col items-center  gap-10 '>
                {/* <p className='text-[55px]'>Coming Soon...</p> */}
                <ComingSoon/>
                <p className='text-[25px]'>Contact us to stay updated with the best AI tools in market.</p>
                <p className='text-[16px] font-[500]'>Streamline hiring, enhance candidate selection, and empower your HR team with AI-driven tools.</p>
                
            </div>
                </div>
             }
      </div>

      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-[3rem] font-semibold mb-5" >Frequently Asked Questions</h2>
          <div className="flex flex-col gap-16 items-center w-full sm:w-[70%] md:[w-50%] ">
            {data?.faq.map((faq, index) => (
              <div key={index} className=" relative w-full">
              <h3
                className="text-[1.8rem] sm:text-[2rem] text-[#E8E8E8] cursor-pointer bg-[#1A2238] p-10 rounded-md pr-20 "
                onClick={() => {
                  const newShowAns = [...showAns];
                  newShowAns[index] = !newShowAns[index];
                  setShowAns(newShowAns);
                }}
              >
                {faq.question}
              </h3>
              {showAns[index] && (
                <div className="text-[1.8rem] sm:text-[2rem] text-[#E8E8E8] mt-5">
                  {faq.answer}
                </div>
            )}
           {showAns[index] ? <VscEyeClosed className="absolute top-10 right-7 h-14 w-14 text-white "/>
           : <VscEye className="absolute top-10 right-7 h-14 w-14 text-white"/>}
          </div>
         ))}
      </div>
    </div>

      </div>
    </div>
<Footer/>
    </div>
  );
}



const ComingSoon: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3, // Delay between each child animation
            staggerChildren: 0.3, // Staggering effect for children
          },
        },
        hidden: { opacity: 0 },
      }}
      className="flex justify-center items-center"
    >
      <motion.p
        className="text-[55px]"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
      >
        Coming
      </motion.p>
      <motion.p
        className="text-[55px] ml-4"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
      >
        Soon
      </motion.p>
      <motion.div
        className="flex items-center ml-4 text-[55px]"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.5, // Staggering effect for dots
              repeat: Infinity, // Repeat animation infinitely
              repeatType: "loop", // Repeat type for infinite loop
            },
          },
          hidden: { opacity: 0 },
        }}
      >
        {['.', '.', '.'].map((dot, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              visible: {
                opacity: 1,
                transition: { duration: 0.5, repeat: Infinity, repeatType: "loop" },
              },
              hidden: { opacity: 0 },
            }}
            transition={{ duration: 0.5 }} // Duration for each dot
          >
            {dot}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};


export default SubProductPage;
