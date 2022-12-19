import burguer from "../../assets/burguer.png";
import { useState, useEffect, useContext } from "react";
import { StyledCard } from "./style";
import { toast } from "react-toastify";
import { CartContext } from "../../contexts/CartContext";
import { iProduct } from "../../services/getProducts";
import { number } from "yup";


// LÓGICA ANTIGA PODE SER UTIL
// const [alreadyAdded, setAlreadyAdded] = useState(false);
// function toastTrigger(currentState: boolean) {
//   if (currentState == true) {
//     toast.error("Não é possivel adicionar produtos repetidos no carrinho.", {
//       position: "top-right",
//       autoClose: 3500,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   }
// }
// useEffect(() => {
//   toastTrigger(alreadyAdded);
// }, [alreadyAdded]);

// function handleClick(event) {
//   const selectedProduct = products.filter((e) => e.id == event.target.id);
//   if (
//     cart &&
//     cart.findIndex((e) => e.name === selectedProduct[0].name) != -1
//   ) {
//     setAlreadyAdded(true);
//     return;
//   }

interface listProps {
  item: iProduct
}

function Card(item: listProps) {
  const [product, setProduct] = useState<iProduct[] | []>([])
  const [newAmount, setAmount] = useState(0)
  const { setCart, cart, products } = useContext(CartContext)
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

  function handleClick(event: React.MouseEvent<HTMLElement>) {

    const target = event.target as HTMLElement;
    const id = Number(target.id)
    const selectedProduct = products?.filter((e, i: number) => e.id == id);
    if (cart && cart.findIndex((e) => e.name === item.item.name) != -1) {
      console.log(cart && cart.findIndex((e) => e.name === item.item.name) != -1)
      setAmount(+1)
      console.log(item.item)
      return
    }


    const newProduct = {
      amount: newAmount,
      id: item.item.id,
      name: item.item.name,
      category: item.item.category,
      price: item.item.price,
      img: item.item.img,
    }
    setCart([...cart, newProduct])
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


