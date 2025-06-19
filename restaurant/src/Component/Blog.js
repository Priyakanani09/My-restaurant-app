import React from 'react'
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Header from './Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Footer from './Footer';

function Blog() {
  return (
    <div>
      <Header />

      <Card className="bg-dark text-white" style={{ borderRadius: "0px" }}>
        <Card.Img src={require("./img/bg-6.png")} style={{ height: "300px" }} />
        <Card.ImgOverlay className="text-center d-flex flex-column justify-content-center">
          <Card.Title className="fs-1">Blog</Card.Title>
          <Card.Text className="textc">Latest From Us</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Container>
        <Row className="my-5">
          <Col xs={12} md={9}>
            <Card className="my-5" style={{ borderRadius: "0px" }}>
              <Card.Img
                variant="top"
                src={require("./img/b1.png")}
                style={{ borderRadius: "0px" }}
              />
              <Card.Body>
                <Card.Title>5 Powerfull Natural Antibiotics</Card.Title>
                <Card.Text>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;&nbsp;
                    <span className="c3">05 Feb 2024</span>
                  </p>
                </Card.Text>
                <Card.Text className="text">
                  Nature provides effective antibiotics like garlic, honey,
                  turmeric, ginger, and oregano oil. These ingredients have
                  strong antibacterial and immune-boosting properties. They’ve
                  been used in traditional medicine for centuries to treat
                  infections naturally. Including them in your diet can support
                  better health and help fight minor illnesses.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-5" style={{ borderRadius: "0px" }}>
              <Card.Img
                variant="top"
                src={require("./img/b2.png")}
                style={{ borderRadius: "0px" }}
              />
              <Card.Body>
                <Card.Title>25 Reasons to Eat Burgers</Card.Title>
                <Card.Text>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;&nbsp;
                    <span className="c3">20 Feb 2024</span>
                  </p>
                </Card.Text>
                <Card.Text className="text">
                  Burgers are a delicious fusion of juicy meat, fresh veggies,
                  and soft buns. They're a favorite comfort food enjoyed around
                  the world in many variations. From classic beef to plant-based
                  patties, there's a burger for every taste. Perfect for quick
                  meals, parties, or a satisfying food craving anytime!
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ borderRadius: "0px" }}>
              <Card.Img
                variant="top"
                src={require("./img/b3.png")}
                style={{ borderRadius: "0px" }}
              />
              <Card.Body>
                <Card.Title>Summer Food and Ingredients Guide</Card.Title>
                <Card.Text>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;&nbsp;
                    <span className="c3">25 Feb 2024</span>
                  </p>
                </Card.Text>
                <Card.Text className="text">
                  Summer is the perfect time to enjoy fresh, light, and cooling
                  foods. Ingredients like watermelon, cucumber, mint, and yogurt
                  keep you hydrated. Seasonal fruits and veggies not only taste
                  great but boost your energy. Eat smart this summer with
                  refreshing meals that nourish and refresh!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} className='my-5'>
            <h2>Recent Posts</h2>
            <hr/>
            <p className='text'>5 Powerfull Natural Antibiotics</p>
            <p className='text'>25 Reasons to Eat Burgers</p>
            <p className='text'>Summer Food and Ingredients Guide</p>
            <hr/>
            <h2 className='my-3'>About Us</h2>
            <p className='text mb-4'>At Delizus, we bring you a fine blend of tradition and taste,
              offering dishes made with passion and fresh ingredients. Our
              journey began with a love for authentic flavors and a commitment
              to quality. Whether you're here for a quick bite or a full-course
              meal, we promise a warm ambiance and satisfying experience. </p>
            <hr/>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Blog