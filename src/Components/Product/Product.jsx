import React from "react";
import "./Product.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // console.log(props.item);
  const { name, img, price, seller, ratings, quantity } = props.item;
  const cartBtnHandler = props.cartBtnHandler;

  // Add to cart button event handler

  // Do the same to Shop.jsx
  // const cartBtnHandler = (jinish) => {
  //     console.log(jinish);
  // };
  return (
    <div className="product">
      {/* <h2>Single Product</h2> */}
      <img src={img} alt="" />
      <h6 className="product-name">{name}</h6>
      <p className="p-price">Price: ${price}</p>
      <p>Manufacturer: {seller}</p>
      <p>Rating: {ratings} Stars</p>
      <button
        onClick={() => cartBtnHandler(props.item)}
        className="add-to-cart-button"
      >
        Add to cart
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;
