import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      console.log('res:', res)
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest drinks</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}>{product.name}</Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
