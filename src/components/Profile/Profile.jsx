import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Divider, List } from "antd";
import "../Profile/Profile.scss";
import Typography from "antd/es/typography/Typography";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

const Profile = () => {
  const { getUserWithOrderById, user } = useContext(UserContext);

  useEffect(() => {
    getUserWithOrderById();
    // eslint-disable-next-line
  }, []);
  if (!user) {
    return <p>cargando...</p>;
  }

  const orders = user.Orders.map((order) => {
    return (
      <div className="order" key={order.id}>
        <span>Order N° {order.id}</span>
        {order.Products.map((product) => (
          <div className="product-profile-container" key={product.id}>
            <div className="img-product-profile">
              <img
                alt={product.name}
                src={"http://localhost:8080/" + product.img_product}
              />
            </div>
            <div className="product-name">
              <h3>{product.name}</h3>
            </div>
            <div className="product-price">
              <p>{product.price} €</p>
            </div>
          </div>
        ))}
      </div>
    );
  });

  console.log(user);

  return (
    <>
      <Divider orientation="center">
        <h1>Profile</h1>
      </Divider>
      <div className="user-profile">
        <UserOutlined style={{ color: "#1677ff", fontSize: "250%" }} />
        <h2>Hi! {user.name}</h2>
        <MailOutlined style={{ color: "#1677ff", fontSize: "150%" }}/>
        <p>{user.email}</p>
      </div>
      <div className="profile">
        <div className="profile-container">
          <List
            header={<h2>Your orders</h2>}
            footer={<p>Thanks for your purchase!</p>}
            bordered
            dataSource={orders}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark></Typography.Text> {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
