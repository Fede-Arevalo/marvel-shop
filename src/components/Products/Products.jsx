import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Products = () => {
  const { getProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const product = products.map((product) => {
    console.log(product);
    return (
      <div key={product._id}>
        <h1>{product.name}</h1>
        <p>{product.Category.name}</p>
        <p>{product.description}</p>
        <img src={"http://localhost:3001/" + product.img_product} alt="img" />
        <p>{product.price.toFixed(2)}</p>
      </div>
    );
  });

  return <div>{product}</div>;
};

export default Products;
