import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Button, Card, Divider } from "antd";
import "./Products.scss";

const { Meta } = Card;

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
      <div className="card" key={product.id}>
        {console.log(product.Category)}
        <Card
          hoverable
          style={{
            width: 350,
            height: 450,
          }}
          cover={
            <img
              alt={product.name}
              src={"http://localhost:8080/" + product.img_product}
            />
          }
        >
          <Meta title={product.name} description={product.Category.name} />
          <p className="price">{product.price.toFixed(2)} €</p>
          <Button type="primary" block onClick={() => addCart(product)}>
            Add Cart
          </Button>
        </Card>
      </div>
    );
  });

  return (
    <>
      <Divider orientation="center">
        <h1>Products</h1>
      </Divider>
      <div className="products">
        <div className="products-container">{product}</div>
      </div>
    </>
  );
};

export default Products;
