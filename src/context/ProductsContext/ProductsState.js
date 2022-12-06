import { createContext } from "react";


const initialState = {
  products: [],
};

const API_URL = "http://localhost:8080";
export const ProductsContext = createContext(initialState);
