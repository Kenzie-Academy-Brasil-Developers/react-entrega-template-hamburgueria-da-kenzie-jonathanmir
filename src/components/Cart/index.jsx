import thrash from "../../assets/trash-alt.svg";
import { useState, useEffect } from "react";
import TotalCart from "./TotalCart";
import CartList from "./CartList";
import { StyledCartContainer } from "./style";

function Cart({ cart, setCart, name, category, img }) {
  const [limitedCart, setLimitedCart] = useState([]);
   console.log(cart)
  function limitCartProducts(cart) {
    if (cart) {
      setLimitedCart(
        cart.filter((element, index) => cart.indexOf(element) === index)
      );
    }
  }
  useEffect(() => {
    limitCartProducts(cart);
  }, [cart]);

  return (
    <StyledCartContainer className="">
      <p className="heading3 cart-title">Carrinho de compras</p>
      {cart.length == 0 ? (
        <div className="cart-details-div">
          <div>
            <p className="heading3">Sua sacola está vazia</p>
            <p className="text-body">Adicione Itens</p>
          </div>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            <CartList cart={limitedCart} setCart={setCart}></CartList>
          </ul>
          <TotalCart cart={limitedCart} setCart={setCart}></TotalCart>
        </>
      )}
    </StyledCartContainer>
  );
}

export default Cart;
