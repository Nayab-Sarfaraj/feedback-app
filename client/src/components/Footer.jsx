import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex flex-col p-6 bg-[#FFFFFF] dark:bg-[#242424] dark:text-[#FFFFFF] text-[#000000] gap-5">
      <p className="text-center">
        {" "}
        © 2025 Nayab Sarfaraj | Feedback Collector Submission for Candidate Task
        |
      </p>
      <div className="flex items-center w-full justify-center gap-6">
        <Link to={"https://www.instagram.com/"}>
          <Instagram />
        </Link>
        <Link to={"https://www.linkedin.com/in/nayab-sarfaraj-856a70258/"}>
          {" "}
          <Linkedin />
        </Link>
        <Link to={"https://github.com/Nayab-Sarfaraj"}>
          <Github />
        </Link>
        <Link to={"https://x.com/NayabSarfaraj"}>
          <Twitter />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
