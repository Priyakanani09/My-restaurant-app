import React from "react";
import Header from "./Header";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Menu1 from "./Menu1";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock , faCalendar} from '@fortawesome/free-solid-svg-icons'
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header />
      <>
        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              src={require("./img/wide1.png")}
              style={{ width: "100%",height: "810px", }}
            />
            <Carousel.Caption>
              <h1 className="hi1">EXQUISITE ATMOSPHERE</h1>
              <p style={{ fontSize: "17px" }}>
                Enjoy fine dining with a warm. Our chefs bring you gourmet{" "}
                <br /> experiences every day. Fresh ingredients and great
                service.
                <br />
                Reserve your table now and experience the magic.
              </p>
              <div className="mt-4">
                <Link
                  to="/book"
                  className="btn btn0 btn-outline-light me-2 fw-bold"
                >
                  BOOK NOW
                </Link>
                <Link to="/menu" className="btn btn1 btn-warning fw-bold border-0">
                  VIEW MENU
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={require("./img/wide2.jpg")}
              style={{ height: "810px", width: "100%" }}
            />
            <Carousel.Caption>
              <h1 className="hi1">FINE DINING EXPERIENCE</h1>
              <p style={{ fontSize: "17px" }}>
                Indulge in luxurious meals with top-class service.Award-winning{" "}
                <br /> dishes served fresh every day. Perfect for
                romanticevenings and <br />
                celebrations. Join us for an unforgettable culinary journey.
              </p>
              <div className="mt-4">
                <Link
                  to="/book"
                  className="btn btn0 btn-outline-light me-2 fw-bold"
                >
                  BOOK NOW
                </Link>
                <Link to="/menu" className="btn btn1 btn-warning fw-bold border-0">
                  VIEW MENU
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container>
          <Row className="my-4 g-5">
            <Col xs={12} md={4}>
              <Card style={{ border: "0" }}>
                <img src={require("./img/pic_1.png")} />
                <Card.Body>
                  <Card.Title className="fw-bold fs-4">
                    Healthy & Tasty
                  </Card.Title>
                  <Card.Text style={{ fontSize: "17px" }}>
                    Experience meals that are both nourishing and delicious. Our
                    chefs use the freshest ingredients to bring you guilt-free
                    flavor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card style={{ border: "0" }}>
                <img src={require("./img/pic_2.png")} />
                <Card.Body>
                  <Card.Title className="fw-bold fs-4">
                    Today's Special
                  </Card.Title>
                  <Card.Text style={{ fontSize: "17px" }}>
                    Enjoy a delicious dish made fresh just for today. Our chef
                    selects the best ingredients every morning. It’s something
                    new and tasty every day.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card style={{ border: "0" }}>
                <img src={require("./img/pic_3.png")} />
                <Card.Body>
                  <Card.Title className="fw-bold fs-4">
                    Romantic Dinner
                  </Card.Title>
                  <Card.Text style={{ fontSize: "17px" }}>
                    Enjoy a special dinner with your loved one. Try tasty food
                    made just for a romantic night. Relax and have a great time
                    together.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Card
          className="bg-dark text-white my-5 text-center"
          style={{ borderRadius: "0" }}
        >
          <Card.Img
            src={require("./img/bg-1.png")}
            alt="Card image"
            className="bg-img-cover"
          />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center">
            <Card.Title className="fs-2">Today's Special</Card.Title>
            <Card.Text className="textc">Fresh and delicious</Card.Text>
            <hr className="hr1" />

            <Container>
              <Row className=" g-5">
                <Col xs={6} sm={6} md={3}>
                  <Card className="text-white border-0 bg-transparent">
                    <span className="border1"></span>
                    <img src={require("./img/r1.png")} />
                    <h3 className="fw-bold fs-4 hi3 mt-3">Rajma Chawal</h3>
                    <span className="fw-bold fs-4">$50</span>
                  </Card>
                </Col>

                <Col xs={6} sm={6} md={3}>
                  <Card className="text-white border-0 bg-transparent">
                    <span class="border1"></span>
                    <img src={require("./img/r2.png")} />
                    <h3 className="fw-bold fs-4 hi3 mt-3">Baked Crab Cheese</h3>
                    <span className="fw-bold fs-4">$66</span>
                  </Card>
                </Col>

                <Col xs={6} sm={6} md={3}>
                  <Card className="text-white border-0 bg-transparent">
                    <span className="border1"></span>
                    <img src={require("./img/r3.png")} />
                    <h3 className="fw-bold fs-4 hi3 mt-3">Punjabi dishes</h3>
                    <span className="fw-bold fs-4">$93</span>
                  </Card>
                </Col>

                <Col xs={6} sm={6} md={3}>
                  <Card className="text-white border-0 bg-transparent">
                    <span className="border1"></span>
                    <img src={require("./img/r4.png")} />
                    <h3 className="fw-bold fs-4 hi3 mt-3">Healthy & Tasty</h3>
                    <span className="fw-bold fs-4">$56</span>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Card.ImgOverlay>
        </Card>

        <Container>
          <Row>
            <Col md={12} xs={12} className="text-center my-4">
              <h3>Our Menu</h3>
              <h5 className="textc">Healthy & Tasty</h5>
            </Col>
          </Row>
          <Menu1 />
        </Container>

        <Card
          className="bg-dark text-white my-6 text-center"
          style={{ borderRadius: "0" }}
        >
          <Card.Img
            src={require("./img/bg-1.png")}
            alt="Card image"
            className="bg-img-cover"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
            <Container>
              <Row>
                <Col
                  xs={12}
                  md={10}
                  lg={6}
                  className="bg-black d-flex flex-column justify-content-center mx-auto px-4"
                  style={{
                    height: "680px",
                    marginLeft: "30%",
                    maxWidth: "550px",
                  }}
                >
                  <div className="mb-5">
                    <h3>Book a Table</h3>
                    <h5 className="textc">Reservation</h5>
                  </div>
                  <Container>
                    <Form style={{}}>
                      <Row className="mb-4">
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
                        <Col xs={12} md={4}>
                          <Form.Control
                            type="number"
                            placeholder="Person"
                            className="formcolor controlsm"
                          />
                        </Col>
                      </Row>

                      <Row className="mb-3">
                        <Col xs={12} md={6} className="mb-3 mb-md-0">
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            className="formcolor controlsm"
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className="formcolor controlsm"
                          />
                        </Col>
                      </Row>

                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Control
                          as="textarea"
                          placeholder="Any Message?"
                          className="formcolor controlsm"
                          style={{ height: "120px", borderRadius: "5px" }}
                        />
                      </Form.Group>
                      <div
                        className="d-flex justify-content-start"
                        style={{ width: "50%" }}
                      >
                        <button className="btn1 fw-bold">SUBMIT FORM</button>
                      </div>
                    </Form>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Card.ImgOverlay>
        </Card>

        <Container>
          <Row>
            <Col md={12} xs={12} className="text-center my-4">
              <h3>Latest Events</h3>
              <h5 className="textc">Come & Join</h5>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={4} xs={12}>
              <Card className="border-0">
                <Card.Img variant="top" src={require("./img/l1.png")} />
                <Card.Body>
                  <Card.Title>Barbeque Party</Card.Title>
                  <Card.Text>
                    <p>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ color: " #ca8e46" }}
                      />{" "}
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
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} xs={12}>
              <Card className="border-0">
                <Card.Img variant="top" src={require("./img/l2.png")} />
                <Card.Body>
                  <Card.Title>Friday Jazz</Card.Title>
                  <Card.Text>
                    <p>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ color: " #ca8e46" }}
                      />{" "}
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
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} xs={12}>
              <Card className="border-0">
                <Card.Img variant="top" src={require("./img/l3.png")} />
                <Card.Body>
                  <Card.Title>Romantic Night</Card.Title>
                  <Card.Text>
                    <p>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ color: " #ca8e46" }}
                      />{" "}
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Footer />
      </>
    </div>
  );
}
export default Home;