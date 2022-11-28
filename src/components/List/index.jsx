import Card from "../Card";
import { useEffect, useState } from "react";
import { StyledList } from "./styled";

function List({ setFilter, filter, products, cart, setCart }) {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    function getFilterResults(filter) {
      setSearchResults(filter);
    }
    getFilterResults(filter);
  }, [filter]);
  if (filter.length <= 0) {
    return (
      <StyledList>
        {products.map((e, i) => {
          return (
            <Card
              products={products}
              setCart={setCart}
              cart={cart}
              key={i}
              id={e.id}
              name={e.name}
              category={e.category}
              price={e.price}
              img={e.img}
            ></Card>
          );
        })}
      </StyledList>
    );
  } else {
    return (
      <StyledList>
        {searchResults.map((e, i) => {
          return (
            <Card
              products={products}
              setCart={setCart}
              cart={cart}
              key={i}
              id={e.id}
              name={e.name}
              category={e.category}
              price={e.price}
              img={e.img}
            ></Card>
          );
        })}
      </StyledList>
    );
  }
}

export default List;
