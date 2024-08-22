import React from "react";
import { IoLogoOctocat } from "react-icons/io5";

let messageText =
  "ml-5 bg-[#1A2238] font-sans text-left p-6 text-[16px] rounded-xl max-w-[80%] ";
let messageTextOwn =
  "ml-5  bg-[#1A2238] font-sans text-left p-6 text-[16px] rounded-xl max-w-[80%]";

type Props = {
  own: boolean;
  message: string;
};

const Messages: React.FC<Props> = ({ own, message }) => {
  return (
    <div className="">
      <div className={`flex p-2 ${own ? "justify-end" : ""}`}>
      {!own &&
      <div className="flex justify-center items-center relative h-16 w-16 rounded-full bg-white">
      <IoLogoOctocat className="h-12 w-12  text-[#1A2238]  "/>
      </div>}

        {message && (
          <p className={own ? messageTextOwn : messageText}>{message}</p>
        )}
      </div>
      <div className={`flex  ${own ? "justify-end" : ""}`}>
        {/* <p className="text-sm ml-3 text-white ">{message.time}</p> */}
      </div>
    </div>
  );
};

export default Messages;
