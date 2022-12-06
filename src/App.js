import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";

import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import { OrderProvider } from "./context/OrderContext/OrderState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <OrderProvider>
            <ProductsProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/products/getProducts" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/Register" element={<Register />} />
              </Routes>
            </ProductsProvider>
          </OrderProvider>
        </UserProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
