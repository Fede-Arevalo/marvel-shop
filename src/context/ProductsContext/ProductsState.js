import { createContext } from "react";


const initialState = {
  products: [],
};

const API_URL = "http://localhost:3001";
export const ProductsContext = createContext(initialState);
