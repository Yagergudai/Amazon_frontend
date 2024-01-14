import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/prime/S2S/XCM_Store/IN-PR-Mob-Slash-Prime.jpg"
          alt=""
        />
        <h2 className="checkout__title">Your Cart</h2>
        <h3>Your items</h3>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
