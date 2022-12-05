import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

import { UserProvider } from "./context/UserContext/UserState";
import Products from "./components/Products/Products";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </ProductsProvider>
        </UserProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
