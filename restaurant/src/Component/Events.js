import React from "react";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function Events() {
  return (
    <div>
      <Header />
      <Card className="bg-dark text-white" style={{ borderRadius: "0px" }}>
        <Card.Img src={require("./img/bg-4.png")} style={{ height: "300px" }} />
        <Card.ImgOverlay className="text-center d-flex flex-column justify-content-center">
          <Card.Title className="fs-1">Events</Card.Title>
          <Card.Text className="textc">Who We Are</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <Row>
          <Col md={12} xs={12} className="text-center mt-5">
            <h3>Latest Events</h3>
            <h5 className="textc">Come & Join</h5>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={4} xs={12}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={require("./img/l1.png")}
                style={{ borderRadius: "0", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Barbeque Party</Card.Title>
                <Card.Text>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">20 April 2023</span> &nbsp;&nbsp;
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">12:00 - 13:30</span>
                  </p>
                </Card.Text>
                <Card.Text className="text">
                  Join us for a fun-filled barbeque with smoky flavors and great
                  vibes. Enjoy freshly grilled dishes in a lively outdoor
                  setting. Perfect for food lovers and families to relax and
                  enjoy together. Bring your appetite and let the feast begin!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} xs={12}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={require("./img/l2.png")}
                style={{ borderRadius: "0", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Friday Jazz</Card.Title>
                <Card.Text>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">26 April 2024</span> &nbsp;&nbsp;
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">12:00 - 13:30</span>
                  </p>
                </Card.Text>
                <Card.Text className="text">
                  Enjoy live jazz music while you dine with us this Friday. Let
                  the smooth tunes and cozy ambiance set the perfect vibe. Great
                  food, relaxing music, and good company await you. Don’t miss
                  this soulful afternoon experience!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} xs={12}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={require("./img/l3.png")}
                style={{ borderRadius: "0", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Romantic Night</Card.Title>
                <Card.Text>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">02 May 2025</span> &nbsp;&nbsp;
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">12:00 - 13:30</span>
                  </p>
                </Card.Text>
                <Card.Text className="text">
                  Enjoy a romantic evening with delicious food and soft
                  lighting. Perfect for couples looking to spend quality time
                  together. Experience cozy seating, gentle music, and a warm
                  atmosphere. Make your night special with our chef’s special
                  menu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={4} xs={12}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={require("./img/l4.png")}
                style={{ borderRadius: "0", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Chef's Special Night</Card.Title>
                <Card.Text>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">10 May 2025</span> &nbsp;&nbsp;
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">19:00 - 21:00</span>
                  </p>
                </Card.Text>
                <Card.Text className="text">
                  Savor exclusive dishes prepared by our head chef for one night
                  only. From appetizers to desserts, every plate is a
                  masterpiece. A perfect evening for foodies and fine dining
                  lovers. Reserve your table and taste the magic!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} xs={12}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={require("./img/l5.png")}
                style={{ borderRadius: "0", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Wine & Dine</Card.Title>
                <Card.Text>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">18 May 2025</span> &nbsp;&nbsp;
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">20:00 - 22:00</span>
                  </p>
                </Card.Text>
                <Card.Text className="text">
                  Indulge in a gourmet dinner paired with the finest wines. Our
                  sommelier has curated the perfect blends for each dish. Relax,
                  sip, and enjoy an evening of elegance. A night of luxury
                  awaits you!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} xs={12}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={require("./img/l6.png")}
                style={{ borderRadius: "0", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Family Brunch</Card.Title>
                <Card.Text>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">25 May 2025</span> &nbsp;&nbsp;
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ color: " #ca8e46" }}
                    />
                    &nbsp;
                    <span className="c3">10:00 - 12:00</span>
                  </p>
                </Card.Text>
                <Card.Text className="text">
                  Spend a joyful Sunday with your loved ones over a hearty
                  brunch. From pancakes to pasta, there’s something for
                  everyone. A relaxed atmosphere with fun for kids and adults.
                  Make brunch your new family tradition!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Events;
