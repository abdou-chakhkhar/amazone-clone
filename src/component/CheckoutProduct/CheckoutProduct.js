import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";
import GradeIcon from "@material-ui/icons/Grade";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkProduct__image" src={image} />
      <div className="checkProduct__info">
        <p className="checkProduct__title">{title}</p>
        <p className="checkProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <GradeIcon style={{ color: "orange" }} />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
