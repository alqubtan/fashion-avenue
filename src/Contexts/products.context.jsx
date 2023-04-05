import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductsCotnext = createContext({
  Products: [],
});

export const ProductsProvider = ({ children }) => {
  const [Products, setProducts] = useState(SHOP_DATA);
  const value = { Products };
  return (
    <ProductsCotnext.Provider value={value}>
      {children}
    </ProductsCotnext.Provider>
  );
};
