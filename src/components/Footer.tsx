import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const linkedinStyle = { color: "#0077B5" };
  const twitterStyle = { color: "#1DA1F2" };
  const instagramStyle = { color: "#C13584" };

  return (
    <footer className="bg-darkblue p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]">
      <div className="text-white text-xl mb-10 text-center" style={{fontSize:"15px"}}>Hyderabad, India | Phone: +91 - 6303438141 | Email: Info@Futureisai.Tech</div>
      <div className="opacity-60 text-white text-base mb-6 text-center" style={{fontSize:"15px"}}>Copyright © 2024 FutureisAI. All Rights Reserved.</div>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/company/futureisai/">
          <FaLinkedin style={linkedinStyle} />
        </a>
        <a href="https://x.com/futureisai_tech?t=GEYakisBsitt9oq5pTJUdA&s=09">
          <FaTwitter style={twitterStyle} />
        </a>
        <a href="https://instagram.com/futureisai.tech?igshid=OGQ5ZDc2ODk2ZA">
          <FaInstagram style={instagramStyle} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
