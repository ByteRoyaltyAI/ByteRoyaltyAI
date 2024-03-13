// @ts-nocheck
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials, FooterLinks } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";
import boticon from "../../assets/icons/boticon.svg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Popup from "reactjs-popup";
import { VscChromeClose } from "react-icons/vsc";
const LazyServiceStatus = lazy(() => import("../components/ServiceStatus"));

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  altimgname: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer className="bg-darkblue p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]">
      <div style={{ fontSize: "20px", textAlign: "center", color:"white" }}>
        Hyderabad, India |&nbsp;Phone: +91 - 6303438141 |&nbsp;Email: Info@Futureisai.Tech&nbsp;&nbsp;
      </div>
      <center style={{ opacity: "0.6", fontSize: "14px", color: "white" }}>
        Copyright © 2024 FutureisAI. All Rights Reserved.
      </center>
      <div style={{ fontSize: "20px", textAlign: "center", color:"white" }}>
        <a href="https://www.linkedin.com/company/futureisai/"><FaLinkedin /></a>
        <a href="https://x.com/futureisai_tech?t=GEYakisBsitt9oq5pTJUdA&s=09"><FaTwitter /></a>
        <a href="https://instagram.com/futureisai.tech?igshid=OGQ5ZDc2ODk2ZA"><FaInstagram /></a>
      </div>
    </footer>

  );
};

export default Footer;
