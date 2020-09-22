import React from "react";
import "./Product.css";
import GradeIcon from "@material-ui/icons/Grade";
import { useStateValue } from "../../StateProvider";
import { useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";

function Product({ id, title, image, price, rating }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  console.log("this is ", basket);

  const addToBasket = () => {
    if (!user) {
      return history.push("/login");
    }
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <GradeIcon style={{ color: "orange" }} />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
