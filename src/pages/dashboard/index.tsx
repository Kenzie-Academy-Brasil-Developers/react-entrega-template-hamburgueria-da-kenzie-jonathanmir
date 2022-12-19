import React, { ReactNode, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import List from "../../components/List";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { CartContext } from "../../contexts/CartContext";
import { iProduct } from "../../services/getProducts";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

  const { loadUser, userLogin, user, loading } = useContext(AuthContext)
  const {
    filter,
    setFilter,
    getList,
    search,
    setSearch,
    cart,
    setCart,
    keyWord,
    setKeyWord,
  } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    getList()
  }, []);


  if (!loading) {
    if (filter) {
      return (
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          ></ToastContainer>
          <Header></Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
              justifyContent: "space-between",
            }}
            className="container search-results-div"
          >
            <p className="heading1 results-text">Resultados para: {keyWord}</p>
            <button
              className="default-btn green"
              onClick={() => {
                setFilter(null);
              }}
            >
              Limpar Busca
            </button>
          </div>
          <main className="">
            <List></List>
          </main>
        </div>
      );
    } else {
      return (
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          ></ToastContainer>
          <Header></Header>
          <main className="">
            <List></List>
          </main>
        </div>
      );
    }
  }



};
