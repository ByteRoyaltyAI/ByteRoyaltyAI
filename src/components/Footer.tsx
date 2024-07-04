import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const linkedinStyle = { color: "#0077B5" };
  const twitterStyle = { color: "#1DA1F2" };
  const instagramStyle = { color: "#C13584" };

  return ( 
    <footer className="bg-darkblue p-10 max-lg:flex-col max-lg:pb-48 relative z-[1] pt-24" style={{marginTop: '-68px'}}>
      <div className="text-white text-xl mb-10 text-center" style={{fontSize:"15px"}}> India | Phone: +91 - 8179871764 | Email: support@imaigen.ai </div>
      <div className="opacity-60 text-white text-base mb-6 text-center" style={{fontSize:"15px"}}>Copyright © 2024 IMAIGEN. All Rights Reserved.</div>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/company/102466043/admin/notifications/all/">
          <FaLinkedin style={linkedinStyle} />
        </a>
        <a href="https://twitter.com/imaigen4">
          <FaTwitter style={twitterStyle} />
        </a>
        <a href="https://www.instagram.com/imaigen4/">
          <FaInstagram style={instagramStyle} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
