import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

function TotalCart() {
  const { cart, setCart } = useContext(CartContext)
  const [subtotal, setSubTotal] = useState(0)
  function handleRemoveAll(): void {
    setCart([]);
    setSubTotal(0)
  }

  return (<>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 20px 0px 20px",
      }}
      className="subtotal-div heading4"
    >
      <p>Total</p>
      <p>R${cart?.length && (cart?.reduce((acc, curr) => {
        return (acc = acc + curr.price);
      }, 0)).toFixed(2)}</p>
    </div>
    <button
      onClick={() => handleRemoveAll()}
      className="heading4 remove-all-btn"
    >
      Remover Todos
    </button>
  </>

  )
}


export default TotalCart;
