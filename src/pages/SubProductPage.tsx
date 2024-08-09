// import axios from "axios";
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { RxDotFilled } from "react-icons/rx";
import { productsData } from "../assets/lib/ProductsData";
import { useParams } from "react-router-dom";

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
  console.log(params);

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
    <div className='flex justify-center  min-h-screen mt-20 bg-[#0C1220] mb-32'>
      <div className="flex flex-col gap-40 w-[90%] sm:w-[80%] text-[#FFFFFF]">
     
     <div className="flex justify-center gap-5 mt-40 text-center ">
      <div className="w-[75%]">
     <h1 className="font-bold text-[4rem] text-[#F1F3F4] mb-8">
     {data.topic.name}
     </h1>
     <h3 style={{color:"#C3C6C8",fontSize:"2rem"}} >{data.topic.desc} </h3>
     {/* <h3 className="text-[1.2rem] text-[#E8E8E8] mt-2">Updated over a week ago</h3> */}
     </div>
      </div>

      <div className="flex jusitify-center ">
          
            <div className="flex w-[90%]  " >
              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-0 ">
            {data.imagesData.map((data,index)=>(
                <img src={data.img}
                  key={index}
                  alt="product display"
                  className={"w-[70%] rounded-xl  object-cover  h-[25rem] sm:h-[50rem] "+(imageIndex===index?"block": "hidden")}
                />
              ))}
              <div className="flex items-center justify-center  w-[30%]">
                <div className="flex flex-col gap-5 text-justify">
              {data.imagesData.map((data,index)=>(
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
      </div>

      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-[3rem] font-semibold mb-5" >Frequently Asked Questions</h2>
          <div className="flex flex-col gap-16 items-center w-[80%] sm:w-[70%] md:[w-50%] ">
            {data?.faq.map((faq, index) => (
              <div key={index} className=" relative w-full">
              <h3
                className="text-[2rem] text-[#E8E8E8] cursor-pointer bg-[#1A2238] p-10 rounded-md "
                onClick={() => {
                  const newShowAns = [...showAns];
                  newShowAns[index] = !newShowAns[index];
                  setShowAns(newShowAns);
                }}
              >
                {faq.question}
              </h3>
              {showAns[index] && (
                <div className="text-[2rem] text-[#E8E8E8] mt-5">
                  {faq.answer}
                </div>
            )}
           {showAns[index] ? <VscEyeClosed className="absolute top-10 right-7 h-14 w-14 text-white"/>
           : <VscEye className="absolute top-10 right-7 h-14 w-14 text-white"/>}
          </div>
         ))}
      </div>
    </div>


      </div>
    </div>
  );
}

export default SubProductPage;
