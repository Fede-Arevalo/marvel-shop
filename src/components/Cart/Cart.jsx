import React, { useContext, useEffect } from "react";
import { OrdersContext } from "../../context/OrderContext/OrderState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Button, Divider, List, Typography } from "antd";
import { ShoppingOutlined, ClearOutlined } from "@ant-design/icons";
import "../Cart/Cart.scss";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart-item" key={i}>
        <div className="img-product-cart">
          <img
            alt={cartItem.name}
            src={"http://localhost:8080/" + cartItem.img_product}
          />
        </div>
        <h1>{cartItem.name}</h1>
        <div className="price-cart">
          <p>{cartItem.price.toFixed(2)} €</p>
        </div>
      </div>
    );
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return (
      <>
        <Divider orientation="center">
          <h1>CART</h1>
        </Divider>
        <div className="empty-cart">No tienes ningún producto añadido</div>
      </>
    );
  }

  const list = (
    <List
      header={<h2>Products Selected</h2>}
      footer={
        <div className="buttons-cart">
          <Button type="primary" onClick={() => clearCart()}>
            <ClearOutlined />
            Clear cart
          </Button>
          <Button type="primary" onClick={() => createNewOrder(cart)}>
            <ShoppingOutlined /> Create Order
          </Button>
        </div>
      }
      bordered
      dataSource={cartItem}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark></Typography.Text> {item}
        </List.Item>
      )}
    />
  );

  return (
    <>
      <Divider orientation="center">
        <h1>CART</h1>
      </Divider>
      <div className="cart">
        <div className="cart-container">{list}</div>
      </div>
    </>
  );
};

export default Cart;
