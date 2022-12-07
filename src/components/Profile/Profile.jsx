import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Divider } from "antd";
import "../Profile/Profile.scss";

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
        Orden N° {order.id}
        {order.Products.map((product) => (

          <div className="product-profile-container" key={product.id}>
            <div className="img-product-profile">
            <img
              alt={product.name}
              src={"http://localhost:8080/" + product.img_product}
            />
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
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
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <div>{orders}</div>
    </>
  );
};

export default Profile;
