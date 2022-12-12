import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Product.scss";

const Product = () => {
  const { getProductById, product } = useContext(ProductsContext);

  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p>{product.Category?.name}</p>
      <div className="img-product-detail">
        {product.img_product ? (
          <img
            alt={product.name}
            src={"http://localhost:8080/" + product.img_product}
          />
        ) : (
          ""
        )}
      </div>

      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
