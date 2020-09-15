import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="13156465"
            title="the lean startup"
            price={89.33}
            image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="66982"
            title="the lean startup"
            price={89.33}
            image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="989865"
            title="the lean startup"
            price={89.33}
            image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="326595"
            title="the lean startup"
            price={89.33}
            image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="3266565"
            title="the lean startup"
            price={89.33}
            image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="659633"
            title="the lean startup"
            price={89.33}
            image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
