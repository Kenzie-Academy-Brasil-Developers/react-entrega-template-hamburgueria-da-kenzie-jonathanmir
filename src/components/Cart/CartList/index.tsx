import thrash from "../../../assets/trash-alt.svg";
import React, { useState, useEffect, useContext, MouseEvent } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { iProduct } from "../../../services/getProducts";
import { stringify } from "querystring";


function CartList() {
  const { cart, setCart } = useContext(CartContext);

  function handleDelete(event: MouseEvent, i: number) {
    const target = event.target as HTMLElement;
    let li = target?.closest("li");
    let nodes = li?.closest("ul")?.childNodes as unknown as HTMLElement[]
    let selected = [...nodes]?.findIndex((e: HTMLElement) => e === li);
    let filtered = cart?.filter((e, index) => {
      return index != selected;
    });
    cart && filtered && setCart(filtered)

  }

  function handleAmount(event: React.MouseEvent<HTMLElement>, acc: number) {
    const target = event.target as HTMLElement;
    const id = Number(target.id)
    const product = cart.find((e) => e.id == id)
    if (product) {
      if (cart && cart.findIndex((e) => e.name === product.name) != -1) {
        product.amount = product.amount + acc
        const filter = cart.filter((e) => e.id != id)
        setCart([product, ...filter])
      }
    }
    if (product?.amount == 0) {
      let filtered = cart?.filter((e, index) => {
        return e.id != product?.id;
      });
      cart && filtered && setCart(filtered)
    }

  }
  if (!cart) {
    return null
  }

  return (
    <><ul>
      <>
        {cart.map((e, i) => {
          return (
            <>
              <li key={i} className="cart-card">
                <div className="img-cart-div">
                  <img src={e.img} alt="" />
                </div>
                <div className="product-details-cart">
                  <p className="heading3 product-title">{e.name}</p>
                  <div className="amount-div">
                    <button id={JSON.stringify(e.id)} onClick={(event) => (handleAmount(event, -1))}>-</button>
                    <p>{e.amount}</p>
                    <button id={JSON.stringify(e.id)} onClick={(event) => (handleAmount(event, +1))}>+</button>
                  </div>
                </div>
                <button onClick={(event) => handleDelete(event, i)} className="remove-btn">
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
