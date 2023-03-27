import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { BsCalculator } from "react-icons/bs";
import { IoMdSwap } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { FiHash } from "react-icons/fi";
import { ImEarth } from "react-icons/im";
import { AiOutlineWallet } from "react-icons/ai";

const LeftNavPanel = () => {
  return (
    <div className="main__left__pannel">
      <div className="links__left__pannel">
        <h2> CORE</h2>
        <p>
          <RiDashboardFill /> Dashboard
        </p>
        <p>
          <BsCalculator /> Calculator
        </p>
        <p>
          <IoMdSwap /> Swap
        </p>
        <p>
          <MdOutlineFilterList /> To Do List
        </p>
        <p>
          <FaQuestionCircle /> FAQ
        </p>
      </div>

      <div className="links__left__pannel">
        <h2>LINKS</h2>
        <p>
          {" "}
          <FiHash /> Socials
        </p>
        <p>
          <ImEarth /> Website
        </p>
        <p>
          <AiOutlineWallet /> Buy Now
        </p>
      </div>
    </div>
  );
};

export default LeftNavPanel;
