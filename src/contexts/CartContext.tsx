import { PropsWithChildren, ReactSVG, useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { iProduct, productType } from "../services/getProducts";
import { api } from "../services/api";
import React from "react";
import { ReactNode } from "react";
interface iProps {
  children: ReactNode;
}

type iCartContext = {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean
  >>;
  setProducts: React.Dispatch<React.SetStateAction<iProduct[] | null
  >>
  setFilter: React.Dispatch<React.SetStateAction<iProduct[] | null
  >>;
  setAmount: React.Dispatch<React.SetStateAction<number
  >>;
  setKeyWord: (value: string) => void;
  getList: () => {};
  setSearch: (value: string) => void;
  isModalVisible: boolean;
  newAmount: number;
  products: iProduct[] | null;
  filter: iProduct[] | null;
  search: string;
  cart: iProduct[];
  setCart: React.Dispatch<React.SetStateAction<iProduct[]>>
  keyWord: string;

}
export const CartContext = createContext({} as iCartContext);

export const CartContextProvider = ({ children }: iProps) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [products, setProducts] = useState<iProduct[] | null>(null);
  const [newAmount, setAmount] = useState<number>(1)
  const [filter, setFilter] = useState<iProduct[] | null>(null);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<iProduct[]>([]);
  const [keyWord, setKeyWord] = useState("");
  const token = localStorage.getItem("token")
  
  async function getList() {
    try {
      if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await api.get("products");
        setProducts(response.data);
      }

    } catch (err) {
      console.error(err);
    }
  }
  return (
    <CartContext.Provider
      value={{
        isModalVisible,
        setModalVisible,
        products,
        setProducts,
        filter,
        newAmount,
        setAmount,
        setFilter,
        search,
        getList,
        setSearch,
        cart,
        setCart,
        keyWord,
        setKeyWord,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
