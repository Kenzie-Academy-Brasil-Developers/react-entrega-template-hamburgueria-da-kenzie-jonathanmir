import Card from "../Card";
import React, { useState, useEffect, useContext } from "react";
import { StyledList } from "./styled";
import { CartContext } from "../../contexts/CartContext";
import { iProduct } from "../../services/getProducts";


function List() {

  const [searchResults, setSearchResults] = useState<iProduct[] | null>(null);
  const { setFilter, filter, setCart, cart, products } = useContext(CartContext)
  useEffect(() => {
    function getFilterResults() {
      setSearchResults(filter);
    }
    getFilterResults();

  }, [filter]);

  if (filter) {

    return (
      <>
        <StyledList>
          {filter?.map((e, i) => {
            return (
              <Card
                key={i}
                item={e}
              ></Card>
            );
          })}
        </StyledList>
      </>
    )
  }

  return (
    <StyledList>
      {products?.map((e, i) => {
        return (
          < Card
            key={i}
            item={e}
          ></Card>
        );
      })
      }
    </StyledList >
  );
}


export default List;
