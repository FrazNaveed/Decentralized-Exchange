import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav--logo">
          <h2>SWAP</h2>
        </div>
        <div className="nav--items">
          <ul>
            <li>
              <a href="#">Swap</a>
            </li>
            <li>
              <a href="#">Pool</a>
            </li>
            <li>
              <a href="#">Stake</a>
            </li>
            <li>
              <a href="#">Farm</a>
            </li>
          </ul>
        </div>
        <div className="nav--buttons">
          <button id="nav--balance">$0.00</button>
          <button id="nav--connect">Connect Wallet</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
