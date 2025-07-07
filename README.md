import React from "react";
import Header from "./Header";
import { Row, Col } from "react-bootstrap";

function Cart({ cart }) {
  let total = 0;
  for (let item of cart) {
    total += item.price;
  }

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center">Your Cart</h2>
        <h4 className="text-center text-success">Total: ₹{total}</h4>

        <Row>
          {cart.length === 0 ? (
            <Col xs={12} className="text-center mt-4">
              <p style={{fontWeight:'500',fontSize:'30px'}}>Your cart is empty !!..</p>
            </Col>
          ) : (
            cart.map((item, index) => (
              <Col md={6} xs={12} className="mb-4" key={index}>
                <div className="product-card shadow-sm p-3 bg-white rounded h-100">
                  <Row>
                    <Col md={3}>
                      <img
                        src={item.thumbnail}
                        className="img-fluid"
                        alt={item.title}
                      />
                    </Col>
                    <Col md={9} className="d-flex flex-column justify-content-center">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      <p>
                        <strong>₹{item.price}</strong>
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))
          )}
        </Row>

      </div>
    </div>
  );
}

export default Cart;
# My-restaurant-app