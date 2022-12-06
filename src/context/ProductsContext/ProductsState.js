import axios from "axios";
import { createContext, useReducer } from "react";
import ProductsReducer from "./ProductsReducer";

const initialState = {
  products: [],
};

const API_URL = "http://localhost:8080";
export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + "/products/getProducts");

    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
    return res;
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};