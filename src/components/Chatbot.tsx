import { IoLogoOctocat } from "react-icons/io5";
import { useState } from "react";

const Chatbot = () => {
  const [isOpen,setIsOpen]=useState(false)

  return (
    <div className="relative">
      {isOpen ?
      <IoLogoOctocat className="fixed  bottom-6 right-7  h-20 w-20 transform hover:scale-105 "
      onClick={()=>setIsOpen(!isOpen)}/>
      :
        <div className="fixed  bottom-16 right-6  sm:right-16 z-[60]  h-[70%] w-[90%] sm:h-[80%] sm:w-[40rem] bg-[#1A2238] rounded-lg shadow-gray-600 shadow-lg animate-slideDown">
         <CloseIcon setIsOpen={setIsOpen} isOpen={isOpen}/>
        
      </div>}
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
        className="absolute h-12 w-12 right-5 top-5"
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
