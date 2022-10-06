import React from "react";
import swap from "../../assets/swap.png";
import "./style.css";
const main = () => {
  return (
    <div className="main">
      <img src={swap} />
      <div className="swap--card">
        <div>
          <h2>Swap</h2>
        </div>
        <div className="swap--from">
          <div className="swap--from_heading">From</div>
          <div className="swap--from_metrics">
            <p>0.0</p>
            <select>
              <option value="ETH">ETH</option>
              <option value="AAVE">AAVE</option>
            </select>
          </div>
        </div>

        <div className="swap--arrow">🔽</div>

        <div className="swap--to">
          <div className="swap--to_heading">To</div>
          <div className="swap--to_metrics">
            <p>0.0</p>
            <select>
              <option value="ETH">ETH</option>
              <option value="AAVE">AAVE</option>
            </select>
          </div>
        </div>

        <div className="swap--price">
          <span>Price</span>
        </div>
        <button className="swap--button">Connect Wallet</button>
      </div>
    </div>
  );
};

export default main;
