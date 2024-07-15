import { useState, useEffect, useCallback } from 'react';
import './TalkingRobot.css';
import robotImage from '../assets/AI-img/AI-img/drib_blink_bot.gif'; // Make sure you have a robot.png in your public folder or adjust the path accordingly.

const TalkingRobot = () => {
  const messages = [
    "Hello! I'm a friendly robot.",
    "I'm here to assist you with any questions.",
    "Did you know that I can process information very quickly?",
    "I enjoy learning new things from humans like you!",
    "Let's work together to solve problems and create amazing things."
  ];

  const [text, setText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typeText = useCallback(() => {
    if (charIndex < messages[messageIndex].length) {
      setText(prev => prev + messages[messageIndex][charIndex]);
      setCharIndex(prev => prev + 1);
    } else {
      setIsTyping(false);
    }
  }, [charIndex, messageIndex, messages]);

  const eraseText = useCallback(() => {
    if (text.length > 0) {
      setText(prev => prev.slice(0, -1));
    } else {
      setMessageIndex(prev => (prev + 1) % messages.length);
      setCharIndex(0);
      setIsTyping(true);
    }
  }, [text.length, messages.length]);

  useEffect(() => {
    // let timer;
    let timer: ReturnType<typeof setTimeout>;
    if (isTyping) {
      timer = setTimeout(typeText, 50);
    } else {
      timer = setTimeout(eraseText, 30);
    }
    return () => clearTimeout(timer);
  }, [isTyping, typeText, eraseText]);

  return (
    <div className="container" >
      <img src={robotImage} alt="Talking Robot" className="robot-image" />
      <div className="speech-bubble">
        <p id="robot-text" style={{color: "black"}}>{text}</p>
      </div>
    </div>
  );
};

export default TalkingRobot;
