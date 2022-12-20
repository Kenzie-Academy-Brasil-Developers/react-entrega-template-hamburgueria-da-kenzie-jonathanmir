import burguer from "../../assets/burguer.png";
import { useState, useEffect, useContext } from "react";
import { StyledCard } from "./style";
import { toast } from "react-toastify";
import { CartContext } from "../../contexts/CartContext";
import { iProduct } from "../../services/getProducts";
import { number } from "yup";


interface listProps {
  item: iProduct
}

function Card(item: listProps) {
  const [product, setProduct] = useState<iProduct[] | []>([])
  const { setCart, cart, products, setAmount, newAmount } = useContext(CartContext)

  function toastTrigger(currentState: boolean) {
    if (currentState == true) {
      toast.error("Não é possivel adicionar produtos repetidos no carrinho.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const newProduct = {
    amount: 1,
    id: item.item.id,
    name: item.item.name,
    category: item.item.category,
    price: item.item.price,
    img: item.item.img,
  }
  function handleClick(event: React.MouseEvent<HTMLElement>) {

    const target = event.target as HTMLElement;
    const id = Number(target.id)
    const product = cart.find((e) => e.id == id)
    if (cart && cart.findIndex((e) => e.name === item.item.name) != -1) {
    
      if (product) {
        product.amount = product.amount + 1
        const filter = cart.filter((e) => e.id != id)
        setCart([...filter, product])
      }
    }
    else {
      setCart([...cart, newProduct])
    }

  }

  var formatValue = item.item.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  if (!item) {
    return null
  }
  return (
    <StyledCard>
      <div className="card-img-div">
        <img src={item.item.img} alt="" className="card-img" />
      </div>
      <div className="product-info-div">
        <p className="heading3">
          {item.item.name}
        </p>
        <p>{item.item.category}</p>
        <p style={{ color: "var(--color-primary)" }}>{formatValue}</p>
        <button
          className="add-btn default-btn green"
          id={item.item.id + ""}
          onClick={(event) => handleClick(event)}
        >
          Adicionar
        </button>
      </div>
    </StyledCard>
  );
}

export default Card;


