import thrash from "../../../assets/trash-alt.svg";
import { useState, useEffect, useContext } from "react";
import TotalCart from "./TotalCart";
import CartList from "./CartList";
import { StyledCartContainer } from "./style";
import { CartContext } from "../../contexts/CartContext";
import { iProduct } from "../../services/getProducts";

function Cart({ }) {

  const [limitedCart, setLimitedCart] = useState<iProduct[] | null>([]);
  const { cart, setCart, setModalVisible } = useContext(CartContext);


  return (
    <StyledCartContainer className="">
      <div className="container">
        <div className="cart-title">
          <p className="heading3 ">Carrinho de compras</p>
          <button onClick={() => setModalVisible(false)}>X</button>
        </div>
        {cart.length == 0 ? (
          <div className="cart-details-div">
            <div>
              <p className="heading3">Sua sacola está vazia</p>
              <p className="text-body">Adicione Itens</p>
            </div>
          </div>
        ) : (
          <>
            <CartList></CartList>
            <TotalCart></TotalCart>
          </>
        )}
      </div>
    </StyledCartContainer >

  );
}

export default Cart;
