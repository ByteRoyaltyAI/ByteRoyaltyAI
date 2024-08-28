import { KeyboardEvent, FormEvent, useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";

interface SendMessageProps {
  setMessages: React.Dispatch<
    React.SetStateAction<{ own: boolean; text: string }[]>
  >;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading:boolean
}

const SendMessage: React.FC<SendMessageProps> = ({
  setMessages,
  setLoading,
  loading
}) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async (e?: FormEvent) => {
    e?.preventDefault();
    if (newMessage.trim() === "") return;

    try {
      setMessages((prev) => [...prev, { own: true, text: newMessage }]);
      setNewMessage("");
      // display loader
      setLoading(true);
      // send message to chatbot api
      let res = await axios.post(
        "http://35.223.244.220:8000/api/chat_w?message=" + newMessage
      );
      console.log(res.data);
      if (res.data) {
        setMessages(res.data);
      }
    } catch (error:any) {
      console.log(error,error.code);
    }
    setLoading(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSendMessage();
    }
  };

  return (
    <form onSubmit={handleSendMessage} className="flex gap-2 p-3 bg-[#1A2238]">
      <input
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        value={newMessage}
        placeholder="Type a message"
        className="p-4 rounded-md w-full  h-20 text-[15px] bg-[#FFFFFF] placeholder-[#667781] border border-[#dfe3e8]"
        style={{ color: "black" }}
      />
     { !loading ?
      <IoSend
        onClick={ handleSendMessage}
        className="p-2 h-16 w-16 hover:cursor-pointer text-white rounded-lg mt-1 hover:text-gray-200"
      />:
      <IoSend
        className="p-2 h-16 w-16 hover:cursor-wait text-white rounded-lg mt-1 hover:text-gray-200"
      />
      }
    </form>
  );
};

export default SendMessage;
