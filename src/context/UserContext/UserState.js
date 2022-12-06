import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer.js";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
};

const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      console.log(res.data)
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  const getUserWithOrderById = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/users/getUserWithOrderById", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "GET_USER_WITH_ORDER_BY_ID",
      payload: res.data,
    });
    return res;
  };

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
        type:"LOGOUT"
    })
    if(res.data){
        localStorage.removeItem("token")
    }
    
  };

  const register = async (user) => {
    const res = await axios.post(API_URL + "/users/createUser", user);
    dispatch({
      type: "CREATE_USER",
      payload: res.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getUserWithOrderById,
        logout,
        register

      }}
    >
      {children}
    </UserContext.Provider>
  );
};
