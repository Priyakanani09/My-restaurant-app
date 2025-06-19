import React from 'react'
import Header from './Header'
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Header />
      <Card className="bg-dark text-white" style={{ borderRadius: "0px" }}>
        <Card.Img src={require("./img/bg-3.png")} style={{ height: "300px" }} />
        <Card.ImgOverlay className="text-center d-flex flex-column justify-content-center">
          <Card.Title className="fs-1">About Us</Card.Title>
          <Card.Text className="textc">Who We Are</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <Row className="my-5">
          <Col xs={12} md={6}>
            <img
              src={require("./img/bg-side-1.png")}
              style={{ height: "500px", width: "100%" }}
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <h1>Welcome To Delizus</h1>
            <p className="textc">Who We Are</p>
            <p className="text">
              At Delizus, we bring you a fine blend of tradition and taste,
              offering dishes made with passion and fresh ingredients. Our
              journey began with a love for authentic flavors and a commitment
              to quality. Whether you're here for a quick bite or a full-course
              meal, we promise a warm ambiance and satisfying experience. From
              classic favorites to creative chef specials, every dish tells a
              story.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <h1>Restaurant</h1>
            <p className="textc">Cozy & Romantic</p>
            <p className="text">
              Discover the perfect setting for your next date night or special
              dinner. Our restaurant combines elegant decor with a warm,
              inviting atmosphere. Enjoy handcrafted dishes, candlelit tables,
              and soothing music. Whether it's a quiet evening or a celebration,
              we create unforgettable moments. Step into a place where comfort
              meets culinary excellence.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={require("./img/bg-side-2.png")}
              style={{ height: "500px", width: "100%" }}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} className='text-center'>
            <h2>Meet</h2>
            <p className="textc">Our Team</p>
          </Col>
        </Row>

        <Row className='my-5'>
          <Col xs={12} md={4}>
            <Card className="border-0">
              <Card.Img variant="top" src={require("./img/team_pic_1.png")} />
              <Card.Body>
                <Card.Title>Ben Sheridan</Card.Title>
                <Card.Text className='text'>
                  Founder & CEO
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border-0">
              <Card.Img variant="top" src={require("./img/team_pic_2.png")} />
              <Card.Body>
                <Card.Title>Sophie Lana</Card.Title>
                <Card.Text className='text'>
                  Founder & CEO
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border-0">
              <Card.Img variant="top" src={require("./img/team_pic_3.png")} />
              <Card.Body>
                <Card.Title>James Hoult</Card.Title>
                <Card.Text className='text'>
                  Project Manager
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default About;