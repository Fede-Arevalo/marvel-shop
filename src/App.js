<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";

function App() {
  return <div className="App">
    
  </div>;
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import { UserProvider } from './context/UserContext/UserState';

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
      </BrowserRouter>
    </div>
  );
>>>>>>> 9403d53d21d7278072abee2622f644fe3df00258
}

export default App;