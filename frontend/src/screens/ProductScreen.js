import React from "react";
import { Link } from "react-router-dom";
import { Image, Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
const ProductScreen = (props) => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);

  return (
    <>
      <Link to={"/"} className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={4} className="mx-5">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReview} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>

          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock ? "In Stock" : "Out of Stock"}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Button disabled={product.countInStock < 0}>Add to Card</Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
