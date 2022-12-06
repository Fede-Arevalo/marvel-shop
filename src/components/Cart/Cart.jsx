import React, { useContext, useEffect } from "react";
import { OrdersContext } from "../../context/OrderContext/OrderState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <p>{cartItem.name}</p>
        <p>{cartItem.price.toFixed(2)} €</p>
      </div>
    );
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  return (
    <div>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createNewOrder(cart)}>Create Order</button>
    </div>
  );
};

export default Cart;
