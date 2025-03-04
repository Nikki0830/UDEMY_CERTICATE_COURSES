import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="Home">
        <div className="home_container">
          <img
            src="https://img.freepik.com/free-photo/portrait-young-asian-woman-isolated-blue-studio-space_155003-12397.jpg?ga=GA1.1.1240818515.1721747322&semt=ais_hybrid"
            alt="Hero img"
            className="home_img"
          />

          <div className="home_row">
            <Product
              id="12341"
              title="White bag"
              price={11.96}
              rating={5}
              image="https://i.pinimg.com/474x/bd/82/cd/bd82cdc136d839e1014cc8a12c030304.jpg"
            />
            <Product  id="12342"
              title="Sun Glasses"
              price={14.96}
              rating={4}
              image="https://i.pinimg.com/736x/3b/5f/77/3b5f77f1c40006c08cddd31350145587.jpg"/>
          </div>
          <div className="home_row">
          <Product  id="12343"
              title="Watch"
              price={15.96}
              rating={5}
              image="https://i.pinimg.com/474x/71/25/9b/71259b648380f9d9cc0e242733702252.jpg"/>
           <Product  id="12344"
              title="Heels"
              price={10.96}
              rating={5}
              image="https://i.pinimg.com/474x/b9/4d/56/b94d560aaa9b7b52f316156388a5d8d4.jpg"/>
             <Product  id="12345"
              title="jwellery"
              price={17.96}
              rating={4}
              image="https://i.pinimg.com/474x/36/7c/7c/367c7c2734d4418c120ba637b9d61c73.jpg"/>
          </div>
          <div className="home_row">
          <Product  id="12346"
              title="perfume"
              price={18.96}
              rating={5}
              image="https://i.pinimg.com/474x/bd/9f/e0/bd9fe063f4608878fe03ce957da7d30f.jpg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
