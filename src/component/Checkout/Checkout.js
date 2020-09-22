import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout__ad"
          />
          <div>
            <h3>Hello {user?.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
      <div className="checkProducts">
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </>
  );
}

export default Checkout;
