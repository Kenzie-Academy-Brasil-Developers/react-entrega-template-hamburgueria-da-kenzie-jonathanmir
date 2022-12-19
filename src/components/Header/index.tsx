import { FormEventHandler, useState } from "react";
import logo from "../../assets/logo.svg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledHeader } from "./style";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { iProduct, productType } from "../../services/getProducts";
import { FaShoppingCart } from "react-icons/fa"
import { TbLogout } from "react-icons/tb"
import Cart from "../Cart";
import { AuthContext } from "../../contexts/AuthContext";
function Header({ }) {
  const { isModalVisible, setModalVisible, products, setKeyWord, search, setSearch, cart, setFilter, filter } = useContext(CartContext);

  const { userLogout } = useContext(AuthContext)

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    const target = event.target as HTMLFormElement
    event.preventDefault()
    setKeyWord(search);

    if (products) {
      const filteredList: iProduct[] = products.filter(
        (e: iProduct) =>
          e.name.toLowerCase().includes(search) ||
          e.category.toLowerCase().includes(search)
      );
      setFilter(filteredList);
      if (filteredList.length == 0) {
        toast.error("Não foram encontrados produtos.", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }

  return (<>
    <StyledHeader>
      <div className="container">
        <img id="logo-img" src={logo} alt="" />
        <div>
          <form onSubmit={(e) => handleSearchSubmit(e)}>
            <input
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Digitar Pesquisa"
            ></input>
            <button type="submit" id="search-btn" className="default-btn green">
              Pesquisar
            </button>
          </form>
          <div className="icons-div">
            <p className="cart-icon-amount">{cart?.length}</p>
            <button onClick={() => { setModalVisible(true) }}>
              <FaShoppingCart />

            </button>
            <button><TbLogout onClick={() => userLogout()} /></button>

          </div>
        </div>
      </div>
    </StyledHeader>

    {isModalVisible && (<Cart></Cart>)}
  </>
  );
}

export default Header;
