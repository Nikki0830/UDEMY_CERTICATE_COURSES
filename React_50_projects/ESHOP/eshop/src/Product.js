import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div>
      <div className="Product">
        <div className="product_info">
          <p className="product_title">{title}</p>
          <p className="product_price">${price}</p>

          {/* <div className="product_rating">{rating}⭐</div> */}
          {/* Dynamic rating */}
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <img src={image} alt="product-image" />

        <button>Add to basket</button>
      </div>
    </div>
  );
}

export default Product;
