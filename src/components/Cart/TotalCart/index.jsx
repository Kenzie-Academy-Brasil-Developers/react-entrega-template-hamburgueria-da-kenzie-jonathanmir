import { useState } from "react";

function TotalCart({ cart, setCart }) {
  function handleRemoveAll(event) {
    setCart([]);
  }
  let subtotal = 0;
  if (cart.length > 0) {
    subtotal = cart.reduce((acc, curr) => {
      return (acc = acc + curr.price);
    }, 0);
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 20px 0px 20px",
          }}
          className="subtotal-div heading4"
        >
          <p>Total</p>
          <p>R${subtotal.toFixed(2)}</p>
        </div>
        <button
          onClick={(event) => handleRemoveAll(event)}
          className="heading4 remove-all-btn"
        >
          Remover Todos
        </button>
      </>
    );
  }
}

export default TotalCart;
