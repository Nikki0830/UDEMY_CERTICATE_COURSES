import React from "react";
import "./Product.css";

function Product({id,title,image,price,rating}) {
  return (
    <div>
      <div className="Product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">${price}</p>
          <div className="product_rating">{rating}⭐s</div>
        </div>

        <img
          src={image}
          alt="product-image"
        />

        <button>Add to basket</button>
      </div>
    </div>
  );
}

export default Product;
