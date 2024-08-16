import { IoLogoOctocat } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";

const Chatbot = () => {
  const [isOpen,setIsOpen]=useState(false)

  return (
    <div className="relative">
      {isOpen ?
        <div className="fixed  bottom-16 right-6  sm:right-16 z-[60]  h-[80%] w-[90%] sm:h-[80%] sm:w-[40rem] bg-[#1A2238] rounded-lg shadow-gray-600 shadow-lg animate-slideDown">
         {/* chatbot header */}
         <div className="flex items-center gap-8 px-[10%] h-[20%] ">
         <CloseIcon setIsOpen={setIsOpen} isOpen={isOpen}/>

         <div className="flex justify-center items-center relative p-4 h-28 w-28 rounded-full bg-white">
         <IoLogoOctocat className="h-28 w-28  text-[#1A2238]  "/>
         <GoDotFill className="absolute bottom-0 right-1 text-green-600 h-8 w-8 "/>
          </div>

         <div className="space-y-2">
          <p className="text-[22px] font-[500]">ChatBot</p>
          <p style={{color:"#8D8D8D",fontSize:"14px"}}
          >Online</p>
         </div>

         </div>
         <div className="h-[65%] bg-[#878B94] text-center">body</div>
         <div className="h-[15%] bg-[#1A2238] text-center">message</div>
         </div>
      :
      <IoLogoOctocat className="fixed  bottom-6 right-7  h-20 w-20 transform hover:scale-105 "
      onClick={()=>setIsOpen(!isOpen)}/>
      }
    </div>
  )
}
type CloseIconProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const CloseIcon: React.FC<CloseIconProps>=({setIsOpen,isOpen})=>{
  return (
      <svg
        className="absolute h-12 w-12 right-5 top-5 "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        onClick={()=>setIsOpen(!isOpen)}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
  )
}


export default Chatbot
