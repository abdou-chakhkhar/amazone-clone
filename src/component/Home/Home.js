import React from "react";
import Product from "../Product/Product";
import "./Home.css";

const products = [
  {
    id: "0",
    title:
      "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    //I ll make the products here after i ll mape it
  },
];

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="13156465"
            title="the lean startup Mixer with K-beater, Dough Hook and Whisk, 5  Mixer with K-beater, Dough Hook and Whisk, 5 "
            price={89.33}
            image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="49536455094"
            title="Diapers Size 4, 150 Count - Pampers Swaddlers Disposable Baby Diapers, ONE MONTH SUPPLY"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61tKaFdMZxL._AC_UL320_.jpg"
          />
          <Product
            id="9936455094"
            title="Blink XT2 Outdoor/Indoor Smart Security Camera with cloud storage included, 2-way audio, 2-year battery life – Add-on camera for existing Blink customers"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/31xMnoF6p0L._AC_US218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
