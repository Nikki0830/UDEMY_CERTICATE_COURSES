import React from "react";
import "./Checkout.css";
import CheakoutProduct from "./CheakoutProduct";

function Chekout() {
  return (
    <div className="Cheakout">
      <div className="cheakout_left">
        <img
          src="https://cdn.pixabay.com/photo/2015/11/28/11/26/sale-1067126_1280.jpg"
          alt="sale_img"
          className="cheakout_add"
        />
        <div>
          <h2 className="cheakout_title">Your Shopping Basket</h2>
          <CheakoutProduct/>
        </div>
      </div>
      <div className="cheakout_right">
        
      </div>
    </div>
  );
}

export default Chekout;
