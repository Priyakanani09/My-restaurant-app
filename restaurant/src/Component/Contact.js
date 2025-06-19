import React from "react";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <Header />

      <Card className="bg-dark text-white" style={{ borderRadius: "0px" }}>
        <Card.Img src={require("./img/bg-7.png")} style={{ height: "300px" }} />
        <Card.ImgOverlay className="text-center d-flex flex-column justify-content-center">
          <Card.Title className="fs-1">Contact</Card.Title>
          <Card.Text className="textc">Who We Are</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Container style={{ maxWidth: "1570px" }}>
        <Row className="my-5">
          <Col md={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.794157879325!2d144.95409847573683!3d-37.818290171974425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1749698439876!5m2!1sen!2sin"
              style={{ width: "100%", height: "500px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>

        <Row className="my-5">
          <Col xs={12} md={6} className="my-5">
            <h1>Contact Us</h1>
            <br />
            <p
              style={{
                fontWeight: "450",
                color: "rgb(95, 92, 92)",
                fontSize: "20px",
              }}
            >
              Have a question? Please contact us using the customer support{" "}
              <br /> channels below.
            </p>
            <br />
            <p style={{ fontSize: "19px" }}>
              <b>Address : </b>Collins Street West, Victoria 8007 Australia
            </p>
            <p style={{ fontSize: "19px" }}>
              <b>Phone number : </b>(208) 333 9296
            </p>
            <p style={{ fontSize: "19px" }}>
              <b>Email : </b>contact@Delizus.com
            </p>
            <p style={{ fontSize: "19px" }}>
              <b>Open : </b>9am - 10pm, Monday - Sunday
            </p>
          </Col>
          <Col xs={12} md={6} className="my-5">
            <h1>Get In Touch</h1>
            <br />
            <p
              style={{
                fontWeight: "450",
                color: "rgb(95, 92, 92)",
                fontSize: "20px",
              }}
            >
              Please submit all general enquiries in the contact form below and
              we look forward to hearing from you soon.
            </p>
            <br />
            <Form>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Label style={{ fontSize: "20px", fontWeight: "500" }}>
                    First name*
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name.."
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label style={{ fontSize: "20px", fontWeight: "500" }}>
                    Last name*
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name.."
                  />
                </Col>
              </Row>
              <br />

              <Row>
                <Col xs={12} md={12}>
                  <Form.Label style={{ fontSize: "20px", fontWeight: "500" }}>
                    Email*
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter email.." />
                </Col>
              </Row>
              <br />

              <Row>
                <Col xs={12} md={12}>
                  <Form.Label style={{ fontSize: "20px", fontWeight: "500" }}>
                    Message*
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message.."
                  />
                </Col>
              </Row>
              <br />

              <Row>
                <Col>
                  <Button
                    type="submit"
                    style={{ height: "45px", fontSize: "20px" }}
                  >
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
