import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const orders = useLoaderData();
  console.log(orders);

//    For add, remove or change anything fro an array we use useState()
// we are doing this for ReviewItems.jsx 's remove item button

  const [cartItems, setCartItems] = useState(orders);

  /**
   * State and click handle modifier will be called from same page
   */

  const removeFromCartHandler = (id) => {
    // Send this handler as props Ln 43
    console.log(id);
    const remaining = cartItems.filter(item => item.id !== id);
    setCartItems(remaining);

    // For removing from database use the following pre-made function
    removeFromDb(id);
  };

  // Handle Clear Cart
  const clearCartHandler = () => {
    setCartItems([]);
};

  return (
    <div className="shop-container">
      <div className="review-container">
        {/* <h2>This is route orders page: {orders.length}</h2> */}
        {/* After making ReviewItem.jsx */}
        {/* {
            orders.map((item) => <ReviewItem
            key = { item.id}
            item={item}
            ></ReviewItem>)
        } */}

        {/* After creating useState Ln 14 */}
        {
            cartItems.map((item) => <ReviewItem
            key = { item.id}
            item = { item }
            removeFromCartHandler = {removeFromCartHandler}
            ></ReviewItem>)
        }
      </div>
      <div className="cart-container">
        {/* <Cart basket={orders}></Cart> */}
        {/* After changes Ln 14 and new map() Ln 30 */}
        <Cart 
        basket={cartItems}
        clearCartHandler = {clearCartHandler}
        ></Cart>
      </div>
    </div>
  );
};

export default Orders;
