import axios from "axios";
import { createContext } from "react";


const API_URL = "http://localhost:8080";

export const OrdersContext = createContext();

export const OrderProvider = ({ children }) => {
  const createOrder = async (order) => {
    const token = JSON.parse(localStorage.getItem("token"));

    try {
      await axios.post(
        API_URL + "/orders/createOrder",
        { products: order },
        { headers: { authorization: token } }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
