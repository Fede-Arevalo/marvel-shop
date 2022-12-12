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
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <OrderProvider>
            <ProductsProvider>
              <div className="header">
                <Header />
              </div>
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/createUser" element={<Register />} />
                  <Route path="/getProductById/id/:id" element={<Product />} />
                </Routes>
              </div>
            </ProductsProvider>
          </OrderProvider>
        </UserProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
