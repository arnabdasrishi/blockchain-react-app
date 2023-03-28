import React from "react";
import "../index.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IoMdSwap } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar__main">
      <button id="nav_swp_btn">
        Swap <IoMdSwap color="skyblue" />
      </button>
      <button id="nav_conn_btn">
        <ConnectButton id="nav_conn_btn" />
      </button>
    </div>
  );
};

export default Navbar;
