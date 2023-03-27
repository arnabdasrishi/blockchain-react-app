import React from "react";
import "../index.css";

import { AiOutlineWallet } from "react-icons/ai";

const RightContents = () => {
  return (
    <div className="right__main__contents__area">
      <div className="wallet__address__bar">
        <p>
          <AiOutlineWallet /> Wallet Address -
          0x308FaD5390627A7F55056b90314DF095EBEa39FC
        </p>
      </div>

      <div className="wallet__dashboard__details">
        <div className="wallet__detials">
          <p>My Total Token</p>
          <big>34324 TKN</big>
        </div>
        <div className="wallet__detials">
          <p>Total Token Value</p>
          <big>354343$</big>
        </div>
        <div className="wallet__detials">
          <p>My Total Burned</p>
          <big>3234 TKN</big>
        </div>
        <div className="wallet__detials">
          <p>Total Supply</p>
          <big>10000000</big>
        </div>
        <div className="wallet__detials">
          <p>Market Volume (USD)</p>
          <big>54658</big>
        </div>
        <div className="wallet__detials">
          <p>Current Price</p>
          <big>$0.005454</big>
        </div>
      </div>
    </div>
  );
};

export default RightContents;
