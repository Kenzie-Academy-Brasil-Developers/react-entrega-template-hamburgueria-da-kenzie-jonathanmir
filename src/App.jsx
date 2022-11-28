import { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Cart from "./components/Cart";
import { api } from "./services/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState("");
  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    async function getList() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getList();
  }, []);

  if (filter.length > 0) {
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
        <Header
          setKeyWord={setKeyWord}
          search={search}
          setSearch={setSearch}
          filtered={filter}
          setFilter={setFilter}
          products={products}
        ></Header>
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
              setFilter("");
            }}
          >
            Limpar Busca
          </button>
        </div>
        <main className="">
          <List
            setFilter={setFilter}
            filter={filter}
            setCart={setCart}
            cart={cart}
            products={filter}
          ></List>
          <Cart setCart={setCart} cart={cart} className="container"></Cart>
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
        <Header
          setKeyWord={setKeyWord}
          products={products}
          search={search}
          setSearch={setSearch}
          filtered={filter}
          setFilter={setFilter}
        ></Header>
        <main className="">
          <List
            setFilter={setFilter}
            filter={filter}
            setCart={setCart}
            cart={cart}
            products={products}
          ></List>
          <Cart setCart={setCart} cart={cart} className=""></Cart>
        </main>
      </div>
    );
  }
}

export default App;
