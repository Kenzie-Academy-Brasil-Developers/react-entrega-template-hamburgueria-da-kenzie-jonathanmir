import thrash from "../../../assets/trash-alt.svg";
import React, { useState, useEffect, useContext, MouseEvent } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { iProduct } from "../../../services/getProducts";


function CartList() {
  const { cart, setCart } = useContext(CartContext);

  function handleDelete(event: MouseEvent) {
    // const target = event.target as HTMLElement;
    // let li = target?.closest("li");
    // let nodes = li?.closest("ul")?.childNodes as unknown as HTMLElement[]
    // let selected = [...nodes]?.findIndex((e: HTMLElement) => e === li);
    // let filtered = cart?.filter((e, index) => {
    //   return index != selected;
    // });
    // cart && filtered && setCart(filtered)

  }

  if (!cart) {
    return null
  }

  return (
    <><ul>
      <>
        {console.log(cart)}
        {cart.map((e, i) => {
          return (
            <>
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
            </>
          )

        })
        }
      </>
    </ul>

    </>

  )
}
export default CartList;
