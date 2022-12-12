import axios from "axios";
import { createContext, useReducer } from "react";
import ProductsReducer from "./ProductsReducer";

const API_URL = "http://localhost:8080";

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  products: [],
  product: {},
  cart: cart ? cart : [],
};

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

  const getProductById = async (id) => {
    try {
      const res = await axios.get(
        API_URL + "/products/getProductById/id/" + id
      );
      dispatch({
        type: "GET_PRODUCT_BY_ID",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        product: state.product,
        products: state.products,
        cart: state.cart,
        getProductById,
        getProducts,
        addCart,
        clearCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
