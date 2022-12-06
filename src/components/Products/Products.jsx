import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Button, Card } from "antd";
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
        <Card
          hoverable
          style={{
            width: 350,
            height: 600,
            
          }}
          cover={
            <div className="img-product">
              <img
                alt={product.name}
                src={"http://localhost:8080/" + product.img_product}
              />
            </div>
          }
        >
        <div className="text-container">
          <Meta title={product.name} description={product.description} />
          </div>
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
      <h1>Products</h1>
      <div className="products">
        <div className="product-container">{product}</div>
      </div>
    </>
  );
};

export default Products;
