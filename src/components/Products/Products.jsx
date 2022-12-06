import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const product = products.map((product) => {
    return (
      <div key={product._id}>
        <h1>{product.name}</h1>
        <p>{product.Category.name}</p>
        <p>{product.description}</p>
        <img src={"http://localhost:3001/" + product.img_product} alt={product.name} />
        <p>{product.price.toFixed(2)}</p>
        <button onClick={() => addCart(product)}>Add Cart</button>
      </div>
    );
  });

  return <div>{product}</div>;
};

export default Products;
