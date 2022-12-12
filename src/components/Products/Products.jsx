import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Button, Card, Divider } from "antd";
import "./Products.scss";
import { Link } from "react-router-dom";

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
            height: 450,
          }}
          cover={
            <Link to={"/getProductById/id/" + product.id}>
              <center><img
                alt={product.name}
                src={"http://localhost:8080/" + product.img_product}
              /></center>
            </Link>
          }
        >
          <Link to={"/getProductById/id/" + product.id}>
            <Meta title={product.name} description={product.Category.name} />
            <p className="price">{product.price.toFixed(2)} €</p>
          </Link>
          <Button type="primary" block onClick={() => addCart(product)}>
            Add Cart
          </Button>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div className="products">
      <Divider orientation="center">
        <h1>PRODUCTS</h1>
      </Divider> 
        <div className="products-container">{product}</div>         
      </div>
    </>
  );
};

export default Products;
