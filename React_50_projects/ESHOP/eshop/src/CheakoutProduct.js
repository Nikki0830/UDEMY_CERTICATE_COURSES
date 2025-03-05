import React from "react";
import "./CheakoutProduct.css";

function CheakoutProduct() {
  return (
    <div className="cheakoutProduct">
      <img
        src="https://i.pinimg.com/474x/bd/82/cd/bd82cdc136d839e1014cc8a12c030304.jpg"
        alt=""
        className="cheaoutProduct_image"
      />
      <div className="product_info">
        <p className="cheakoutProduct_title">White bag</p>
        <p className="cheakoutProduct_price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="cheakoutproduct_rating">⭐⭐⭐⭐⭐</div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheakoutProduct;
