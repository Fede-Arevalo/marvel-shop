import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FrownOutlined,
  SmileOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import "../Header/Header.scss";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
      <img src={Logo} alt="Logo-Marvel" className="logo" />

      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item key="products" icon={<ShopOutlined />}>
        <Link to="/products">Products</Link>
      </Menu.Item>

      <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">Cart</Link>
      </Menu.Item>

      {token ? (
        <>
          <Menu.Item key="profile" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>

          <Menu.Item key="logout" icon={<FrownOutlined />} onClick={onLogout}>
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="login" icon={<SmileOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default Header;
