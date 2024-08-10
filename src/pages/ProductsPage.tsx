// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import img1 from "../assets/productImages/img1.jpg"
import img2 from "../assets/productImages/img2.jpg"
import img3 from "../assets/productImages/img3.jpg"

const ProductsPage = () => {
    // const [activeBtn,setActiveButton]=useState<string>("RJM")
  return (
    <div className='flex flex-col gap-60 min-h-screen mt-[20rem] '>
        <div className='flex justify-center'>
            <div className='flex flex-col items-center w-[70%] gap-10'>
                {/* <p className='text-[55px]'>Transform Your Hiring Process</p> */}
                <AnimatedHeading/>
                <p className='text-[16px] font-[500] mt-10'>Streamline hiring, enhance candidate selection, and empower your HR team with AI-driven tools.</p>
                <Link to="/product/book-a-demo" className="">
                <button className='px-10 py-6 text-[18px] rounded-md bg-[#0378f5] hover:opacity-90'>
                    Get a Demo</button>
                </Link>
            </div>
        </div>

        <div className='flex justify-center mb-32'>
         
            <div className='flex flex-col md:flex-row justify-center items-center w-[90%] gap-14 border-[#131C35] border-b-2 pb-16'>
            {data.map((card,index)=>(
                <Link to={"/product/hrServices/"+card.link} key={index} className="w-full sm:w-3/4 md:w-[30%] ">
                <div className='flex flex-col  p-10 gap-7 rounded-lg  bg-[#1b1b28]  min-h-[360px] hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4b5364] to-[#0D161C]'>
                  <img src={card.img}
                  className='object-contain h-[180px] w-[320px] bg-transparent'
                  alt='product here'
                  />
                  <p className='font-semibold text-[18px] text-center '>{card.title}</p>
                  <p style={{color:"#8F97A1"}} className=' text-[16px]'>{card.desc}</p>
                </div>
                  </Link>
            ))}
            </div>

        </div>
        <Footer/>
    </div>
  );
};

let data=[
    {
    title:"Resume-Job Matching",
    desc:"Use AI to automatically match resumes with job descriptions based on skills, experience, and qualifications. Improve candidate fit and reduce turnover.",
    img:img1,
    link:"resumeMatching"
},
    {
    title:"Interview Question Generation",
    desc:"Automatically generate relevant interview questions based on the candidate’s resume and the job description. Ensure consistency and fairness in the interview process.",
    img:img2,
    link:"interviewGeneration"
},
    {
    title:"Hr Chatbot",
    desc:"Leverage AI to create an HR chatbot that can answer employee queries, assist with onboarding, and automate routine HR tasks.",
    img:img3,
    link:"hrChatbot"
},
]

export default ProductsPage;

const AnimatedHeading: React.FC = () => {
    return (
      <motion.p
        className="text-[55px]"
        initial={{ scale: 1 }}
        animate={{ scale: 1.02 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        Transform Your Hiring Process
      </motion.p>
    );
  };

/* <div className='flex w-full gap-3'>
<button className={'p-6 text-[18px] rounded-md hover:bg-[#1e2a51] '+(activeBtn==="RJM"?" bg-[#202e58]":"bg-[#131c35]")}
 onClick={()=>setActiveButton("RJM")}>
    Resume Job Matching</button>
<button className={'p-6 text-[18px] rounded-md hover:bg-[#1e2a51]  '+(activeBtn==="IQG"?" bg-[#202e58]":"bg-[#131c35]")} onClick={()=>setActiveButton("IQG")}>Interview Question Generation</button>
<button className={'p-6 text-[18px] rounded-md hover:bg-[#1e2a51] '+(activeBtn==="HRC"?" bg-[#202e58]":"bg-[#131c35]")} onClick={()=>setActiveButton("HRC")}>Hr Chatbot</button>
</div>

{/* second div for display */
/* <div className='flex  gap-5 border-white border-4'>
    <div className='flex flex-col gap-8 w-1/2'>
    <p className='text-[26px] font-semibold'>Hr Chatbot</p>
    <p>Leverage AI to create an HR chatbot that can answer employee queries, assist with onboarding, and automate routine HR tasks.</p>
    <button className='w-60 h-16 text-[14px] rounded-md bg-[#0378f5] hover:opacity-90'>Learn More</button>

    </div>
    <div className='w-1/2'>
        <img/> 
    </div>

</div>
right side for image  */

