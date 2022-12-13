import { Button, Modal } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Product.scss";

const Product = () => {
  const { getProductById, product, addCart } = useContext(ProductsContext);

  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, []);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      addCart(product);
      setOpen(false);
      navigate("/products");
    }, 2000);
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    setOpen(false);
    navigate("/products");
  };

  return (
    <>
      <Modal
        open={open}
        title={product.name}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Back
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Add Cart
          </Button>,
        ]}
      >
        <span>{product.Category?.name}</span>
        <div className="img-product-detail">
          {product.img_product ? (
            <img
            key={product.id}
              alt={product.name}
              src={"http://localhost:8080/" + product.img_product}
            />
          ) : (
            ""
          )}
        </div>
        <p>{product.description}</p>
        <p className="modal-price">{product.price} €</p>
      </Modal>
    </>
  );
};

export default Product;
