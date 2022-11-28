import { useState } from "react";
import logo from "../../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledHeader } from "./style";

function Header({
  setKeyWord,
  search,
  setSearch,
  products,
  setFilter,
  filter,
}) {
  function handleSearchSubmit(event) {
    event.preventDefault();
    setKeyWord(search);
    let filteredList = products.filter(
      (e) =>
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
        theme: "light",
      });
    }
  }
  return (
    <StyledHeader>
      <div className="container">
        <img id="logo-img" src={logo} alt="" />
        <form onSubmit={(event) => handleSearchSubmit(event)}>
          <input
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Digitar Pesquisa"
          ></input>
          <button type="submit" id="search-btn" className="default-btn green">
            Pesquisar
          </button>
        </form>
      </div>
    </StyledHeader>
  );
}

export default Header;
