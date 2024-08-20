import { KeyboardEvent, FormEvent, useState } from "react";
import { IoSend } from "react-icons/io5";

interface SendMessageProps {
  setMessages: React.Dispatch<React.SetStateAction<{ own: boolean; text: string }[]>>;
}

const SendMessage: React.FC<SendMessageProps> = ({ setMessages }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e?: FormEvent) => {
    e?.preventDefault();
    if (newMessage.trim()) {
      // Add the new message to the chat
      setMessages((prev) => [...prev, { own: true, text: newMessage }]);
      setNewMessage("");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
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
      <IoSend
        onClick={handleSendMessage}
        className="p-2 h-16 w-16 hover:cursor-pointer text-white rounded-lg mt-1 hover:text-gray-200"
      />
    </form>
  );
};

export default SendMessage;
