import burguer from "../../assets/burguer.png";
import { useState, useEffect } from "react";
import { StyledCard } from "./style";
import { toast } from "react-toastify";

function Card({ setCart, cart, products, name, category, price, img, id }) {
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  function toastTrigger(currentState) {
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
  useEffect(() => {
    toastTrigger(alreadyAdded);
  }, [alreadyAdded]);

  function handleClick(event) {
    const selectedProduct = products.filter((e) => e.id == event.target.id);
    if (
      cart &&
      cart.findIndex((e) => e.name === selectedProduct[0].name) != -1
    ) {
      setAlreadyAdded(true);
      return;
    }
    setCart((oldProduct) => {
      return [...oldProduct, selectedProduct[0]];
    });
  }
  var formatValue = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <StyledCard>
      <div className="card-img-div">
        <img src={img} alt="" className="card-img" />
      </div>
      <div className="product-info-div">
        <p className="heading3">
          {name.substring(0, 15) === name
            ? name
            : name.substring(0, 15) + "..."}
        </p>
        <p>{category}</p>
        <p style={{ color: "var(--color-primary)" }}>{formatValue}</p>
        <button
          className="add-btn default-btn green"
          id={id}
          onClick={(event) => handleClick(event)}
        >
          Adicionar
        </button>
      </div>
    </StyledCard>
  );
}

export default Card;
