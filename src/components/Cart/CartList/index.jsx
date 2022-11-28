import thrash from "../../../assets/trash-alt.svg";
import { useState, useEffect } from "react";

function CartList({ cart, setCart }) {
  function handleDelete(event) {
    let li = event.target.closest("li");
    let nodes = li.closest("ul").children;
    let selected = [...nodes].findIndex((e) => e === li);
    let filtered = cart.filter((e, index) => {
      return index != selected;
    });
    setCart(filtered);
  }

  return cart.map((e, i) => {
    return (
      <li key={i} className="cart-card">
        <div className="img-cart-div">
          <img src={e.img} alt="" />
        </div>
        <div className="product-details-cart">
          <p className="heading3 product-title">{e.name}</p>
          <p className="text-body product-category">{e.category}</p>
        </div>
        <button onClick={(event) => handleDelete(event)} className="remove-btn">
          <img src={thrash} alt="" />
        </button>
      </li>
    );
  });
}
export default CartList;
