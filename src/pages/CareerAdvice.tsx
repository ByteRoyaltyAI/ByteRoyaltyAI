import axios from "axios";
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { RxDotFilled } from "react-icons/rx";

interface CurrentSituation {
  current_profession: string;
  years_experience: number;
  location: string;
  geographical_preference: string;
  commitments: string;
}

interface CareerAdviceData {
  current_situation: CurrentSituation;
  is_fresh_graduate: boolean;
  interests: string;
}

const CareerAdvice = () => {
  const [showAns, setShowAns] = useState<boolean[]>(
    new Array(data?.faq.length).fill(false)
  );
  const [imageIndex, setImageIndex] = useState<Number>(0)
  

  const handleSubmit = async () => {

    const data: CareerAdviceData = {
      current_situation: {
        current_profession: "Student",
        years_experience: 0,
        location: "Hyderabad, India",
        geographical_preference: "Africa",
        commitments: "I want to marry and settle in Africa with girlfriend"
      },
      is_fresh_graduate: true,
      interests: "Playing chess"
    };
    try {
      const response = await axios.post(import.meta.env.VITE_AI_API_URL + "career_advice", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }

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

     <div className="flex flex-col gap-5 items-center">
     <h2 className="font-semibold" >Features to be Highlighted </h2>
     {data?.features.map((feature)=>(
       <h3 className="text-[2rem] text-[#E8E8E8]" key={feature}>
        {feature}
      </h3>
    ))}
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
                <div className="flex items-center">
                  <div className="h-12 w-12">
                {imageIndex===index && <RxDotFilled className="h-12 w-12  text-[#58BE4F]"/>}
                  </div>
                <p style={{color:imageIndex===index?"white":"C3C6C8"}} key={index}
                onClick={()=>setImageIndex(index)}>{data.text}</p>
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

      <div className="">
      <button className="h-30 w-48 bg-grey rounded-md " onClick={handleSubmit}>
        Submit
      </button>
      </div>

      </div>
    </div>
  );
}
const data={
 topic:{
  name:"HR query chatbot",
  desc:"Introducing our employee-centric chatbot - a powerful tool designed to streamline HR-related inquiries and provide your workforce with instant access to vital organizational information. This conversational interface empowers your employees to quickly find answers, freeing up your HR team to focus on more strategic initiatives. ",
 },
  features:["Comprehensive Knowledge Base ",
  "Personalized Interactions" ,
  "Multilingual Support ",
  "Seamless Integration Continuous Improvement "],
   faq:[
    {
      question:"What type of queries can the chatbot assist with?  ",
      answer:"The chatbot is designed to handle a wide range of HR-related inquiries, including questions about company policies, benefits, payroll, time-off requests, and more. It can also provide general information about the organization and its procedures. "
    },
    {
      question:"Is the chatbot available 24/7?  ",
      answer:"Yes, the chatbot is accessible 24 hours a day, 7 days a week, allowing employees to get the information they need at their convenience. "
    },
    {
      question:"How accurate are the chatbot's responses?  ",
      answer:"The chatbot's responses are powered by a comprehensive and regularly updated knowledge base, ensuring the information provided is accurate and up-to-date. We also have a team of HR experts who continuously monitor and refine the chatbot's capabilities. "
    },
    {
      question:"Can I customize the chatbot's appearance and branding?  ",
      answer:"Absolutely! The chatbot can be tailored to match your company's branding, allowing it to seamlessly integrate with your existing digital ecosystem. "
    },
    {
      question:"How do I get started with the chatbot?  ",
      answer:"Getting started is easy. Simply reach out to our sales team, and we'll guide you through the onboarding process, including the integration of the chatbot into your website or internal systems. "
    }
   ],
   imagesData:[
    {
     img:"https://downloads.intercomcdn.com/i/o/1036158341/ebc1350948c45ba1e5e2cbfb/create-multi-ai-agent.jpeg?expires=1723178700&signature=7963e33ef1393a0c1a440c2a51fba80b32233615a2c38442e83134c08dc005eb",
     text:"Explain Code"
   },
    {
     img:"https://cdn.sanity.io/images/bj34pdbp/migration/38f9250d18202f13974b3ce76a5a262637b82013-2048x1544.png?w=1600&q=60&fit=clip&auto=format",
     text:"Test Cases"
   },
    {
     img:"https://cdn.sanity.io/images/bj34pdbp/migration/38f9250d18202f13974b3ce76a5a262637b82013-2048x1544.png?w=1600&q=60&fit=clip&auto=format",
     text:"Write Documentation"
   },
    {
     img:"https://cdn.sanity.io/images/bj34pdbp/migration/38f9250d18202f13974b3ce76a5a262637b82013-2048x1544.png?w=1600&q=60&fit=clip&auto=format",
     text:"Design Apps"
   },
    {
     img:"https://cdn.sanity.io/images/bj34pdbp/migration/38f9250d18202f13974b3ce76a5a262637b82013-2048x1544.png?w=1600&q=60&fit=clip&auto=format",
     text:"Setup Apis"
   },
  ]
}
export default CareerAdvice;

