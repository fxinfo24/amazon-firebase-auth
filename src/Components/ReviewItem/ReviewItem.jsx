import React from "react";
import "./Reviewitem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ item, removeFromCartHandler }) => {
//   console.log(item);
//   Let's destructure the object 'item'
const {id, img, name, quantity, shipping, ratting} = item;
  return (
    <div className="review-item">
      {/* <h2>Review cart items</h2> */}
      <div>
        <img src={img} alt="" />
      </div>
      <div className="buying-detail">
        <h6>{item.name}</h6>
        <p>Price: <span className="priceColor">${item.price}</span></p>
        <p>Shipping: <span className="priceColor">{shipping}</span></p>
      </div>
      <button onClick={() => removeFromCartHandler(id)}>
      <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
