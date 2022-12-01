// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.scss";
// // import Logo from "../Header/logo-white.png";

// const Header = () => {
//   return (
//     <>
//       <div className="header">
//         <div className="menu">
//           <span>MARVEL-SHOP™</span>
//           <nav>
//             <Link to="/">Home</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//             <Link to="/profile">Profile</Link>
//             <Link to="/cart">Cart</Link>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
import React, { useContext } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
// import "./Header.css";
import { UserContext } from "../../context/UserContext/UserState";
const Header = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      {token ? (
        <>
          <Menu.Item key="profile" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={onLogout}>
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="login" icon={<UserAddOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
