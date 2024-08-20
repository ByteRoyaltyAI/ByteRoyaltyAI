import { useRef,useEffect } from "react";
import { IoLogoOctocat } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import SendMessage from "./SendMessage";
import Messages from "./Messages";

const Chatbot = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [messages,setMessages]=useState([{own:false,text:"Hello there! 👋 It's nice to meet you!"}
    ,{
    own:false,
    text:"What brings you here today? Please use the navigation below or ask me anything about ChatBot product. 🪄"
  }])
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages,isOpen]);

  return (
    <div className="relative">
      {isOpen ?
        <div className="fixed  bottom-10 right-6  sm:right-16 z-[60]  h-[80%] w-[90%] sm:h-[80%] sm:w-[42rem] bg-[#1A2238] rounded-lg shadow-gray-600 shadow-lg animate-slideDown ">
         {/* chatbot header */}
         <div className="flex items-center gap-8 px-[10%] h-[15%] ">
         <CloseIcon setIsOpen={setIsOpen} isOpen={isOpen}/>

         <div className="flex justify-center items-center relative p-4 h-24 w-24 rounded-full bg-white">
         <IoLogoOctocat className="h-24 w-24  text-[#1A2238]  "/>
         <GoDotFill className="absolute bottom-0 right-0 text-green-600 h-8 w-8 "/>
          </div>

         <div className="space-y-2">
          <p className="text-[20px] font-[500]">ChatBot</p>
          <p style={{color:"#8D8D8D",fontSize:"12px"}}
          >Online</p>
         </div>

         </div>

         <div className="h-[70%] bg-[#adb3be] flex flex-col overflow-hidden">
          <div className="overflow-auto">
         {messages?.map((message,index)=>(
          <div ref={scrollRef} key={index}>
          <Messages  
          own={message.own} message={message.text}/>
          </div>
         ))}
          </div>
          </div>
         
         <SendMessage setMessages={setMessages}/>
         </div>
      :
      <IoLogoOctocat className="fixed  bottom-16 right-10  h-24 w-24 transform hover:scale-105 animate-move-rotate "
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
