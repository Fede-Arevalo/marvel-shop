// <<<<<<< HEAD
// import "./App.scss";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Home/Home";
// import Register from "./components/Register/Register";
// import Login from "./components/Login/Login";
// import Profile from "./components/Profile/Profile";
// import Header from "./components/Header/Header";
// import Cart from "./components/Cart/Cart";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// =======
// <<<<<<< HEAD
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return <div className="App">

//   </div>;
// =======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

import { UserProvider } from "./context/UserContext/UserState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </UserProvider>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
