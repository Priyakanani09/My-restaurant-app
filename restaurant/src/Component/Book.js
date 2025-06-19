import React from "react";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Footer from "./Footer";

function Book() {
  return (
    <div>
      <Header />

      <Card className="bg-dark text-white" style={{ borderRadius: "0px" }}>
        <Card.Img src={require("./img/bg-5.png")} style={{ height: "300px" }} />
        <Card.ImgOverlay className="text-center d-flex flex-column justify-content-center">
          <Card.Title className="fs-1">Book</Card.Title>
          <Card.Text className="textc">Make a Reservation</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Container>
        <Row className="my-5" style={{ minHeight: "500px" }}>
          <Col
            xs={12}
            md={6}
            className="bg-black d-flex flex-column justify-content-center"
          >
            <Form>
              <Container className="w-75">
              <Row className="mb-4 ">
                <Col xs={12} md={4} className="mb-3 mb-md-0">
                  <Form.Control
                    type="date"
                    className="controlsm"
                    style={{
                      backgroundColor: "rgb(43, 42, 42)",
                      color: "white",
                      border: "0px",
                    }}
                  />
                </Col>
               <Col xs={12} md={4} className="mb-3 mb-md-0">
                  <Form.Control
                    type="time"
                    className="controlsm"
                    style={{
                      backgroundColor: "rgb(43, 42, 42)",
                      color: "white",
                      border: "0px",
                    }}
                  />
                </Col>
                <Col xs={12} md={4} className="mb-3 mb-md-0">
                  <Form.Control
                    type="number"
                    placeholder="Person"
                    className="formcolor controlsm"
                  />
                </Col>
              </Row>

              <Row className="mb-4">
                <Col xs={12} md={6} className="mb-3 mb-md-0">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="formcolor controlsm"
                  />
                </Col>
                <Col xs={12} md={6} className="mb-3 mb-md-0">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="formcolor controlsm"
                  />
                </Col>
              </Row>

              <Form.Group className="mb-4" controlId="formGridAddress1">
                <Form.Control
                  as="textarea"
                  placeholder="Any Message?"
                  className="formcolor controlsm"
                  style={{ height: "120px", borderRadius: "5px" }}
                />
              </Form.Group>
              <div className="d-flex justify-content-start" style={{ width: "50%" }}>
                <button className="btn1 fw-bold">SUBMIT FORM</button>
              </div>
              </Container>
            </Form>
          </Col>
          <Col xs={12} md={6} className="color text-center d-flex flex-column justify-content-center">
              <h2>We're Open</h2>
              <p className="textc">Everyday!</p>
              <br/>
              <p className="text1">Monday - Friday</p>
              <h6 className="hi6-0">08.00 AM - 21.00 PM</h6>
              <br/>
              <p className="text1">Saturday & Sunday</p>
              <h6 className="hi6-0">10.00 AM - 23.00 PM</h6>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Book;
