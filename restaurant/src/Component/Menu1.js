import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

function Menu1() {
  const [Menu, setMenu] = useState("main");
  return (
    <div>
        <>
          <Row className="border2 mb-4">
            <div className="d-flex justify-content-center gap-4 bg-black">
              <button className="btn2 text-white bg-black" onClick={() => setMenu("main")}>Mains</button>
              <button className="btn2 text-white bg-black" onClick={() => setMenu("starter")}>Starter</button>
              <button className="btn2 text-white bg-black" onClick={() => setMenu("drink")}>Drink</button>
            </div>

            <Col md={12} xs={12}>
              {Menu === "main" && (
                <Row className="my-5">
                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/m1.png")} className="img" style={{height:'80px'}} />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">CrispyRoll</h6>
                        <div className="c1"></div>
                        <div className="c2 fs-5">$66</div>
                        <p className="c3 mt-1">
                            Crispy spring rolls filled with seasoned vegetables and served with tangy sauce.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/m2.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">ShrimpRoll</h6>
                        <div className="c1-0"></div>
                        <div className="c2 fs-5">$46</div>
                        <p className="c3 mt-1">
                          Delicate rice rolls stuffed with fresh shrimp, herbs, and vermicelli.
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} md={12} lg={6} className="my-3">
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/m3.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">Baked Crab Cheese</h6>
                        <div className="c1-1"></div>
                        <div className="c2 fs-5">$70</div>
                        <p className="c3 mt-1">
                           Creamy crab mixture baked in shells, topped with golden cheese.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12} lg={6} className="my-3">
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/m4.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">CrispySquid</h6>
                        <div className="c1 w-100"></div>
                        <div className="c2 fs-5">$59</div>
                        <p className="c3 mt-1">
                          Golden fried calamari served with garlic aioli — crispy and flavorful.
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/m5.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">FoieGras</h6>
                        <div className="c1"></div>
                        <div className="c2 fs-5">$95</div>
                        <p className="c3 mt-1">
                          Rich duck liver pâté served with toast and fig compote — a French delicacy.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/m6.png")} className="img"  style={{height:'80px'}}/>
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">Punjabi</h6>
                        <div className="c1 w-100"></div>
                        <div className="c2 fs-5">$10</div>
                        <p className="c3 mt-1">
                           North Indian-style spiced vegetables cooked in traditional curry flavors.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )}

              {Menu === "starter" && (
                 <Row className="my-5">
                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/s1.png")} className="img" style={{height:'80px'}} />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">ManchowSoup</h6>
                        <div className="c1"></div>
                        <div className="c2 fs-5">$11</div>
                        <p className="c3 mt-1">
                            A spicy Indo-Chinese soup with crispy noodles, packed with veggies and bold flavors.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/s2.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">CapreseSalad</h6>
                        <div className="c1-0"></div>
                        <div className="c2 fs-5">$6</div>
                        <p className="c3 mt-1">
                          Fresh tomatoes, mozzarella, and basil drizzled with olive oil — a light Italian classic.
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} md={12} lg={6} className="my-3">
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/s3.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">Polpette</h6>
                        <div className="c1"></div>
                        <div className="c2 fs-5">$9</div>
                        <p className="c3 mt-1">
                          Juicy Italian meatballs served in a rich tomato sauce — hearty and satisfying.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12} lg={6} className="my-3">
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/s4.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">Waffle</h6>
                        <div className="c1 w-100"></div>
                        <div className="c2 fs-5">$7</div>
                        <p className="c3 mt-1">
                          Warm, golden waffles served with syrup and fruit — perfect for a sweet starter.
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/s5.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">Caprino</h6>
                        <div className="c1"></div>
                        <div className="c2 fs-5">$8</div>
                        <p className="c3 mt-1">
                          Goat cheese served over toast with herbs and a drizzle of honey — creamy and tangy.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/s6.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">Calamary</h6>
                        <div className="c1 w-100"></div>
                        <div className="c2 fs-5">$10</div>
                        <p className="c3 mt-1">
                          Crispy fried calamari rings served with tangy dipping sauce — a seafood favorite.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )}

              {Menu === "drink" && (
                <Row className="my-5">
                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/d1.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">Limeade</h6>
                        <div className="c1"></div>
                        <div className="c2 fs-5">$5</div>
                        <p className="c3 mt-1">
                          A refreshing blend of lime juice and mint, served
                          chilled to keep you cool. Perfect for a light, zesty
                          sip any time of the day.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/d2.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">Iced Tea</h6>
                        <div className="c1-0"></div>
                        <div className="c2 fs-5">$3</div>
                        <p className="c3 mt-1">
                          Freshly brewed tea poured over ice with a hint of
                          lemon—cool and energizing.
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} md={12} lg={6} className="my-3">
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/d3.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">MilkShake</h6>
                        <div className="c1"></div>
                        <div className="c2 fs-5">$6</div>
                        <p className="c3 mt-1">
                          A creamy milkshake with your choice of flavor — rich,
                          thick, and satisfying.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12} lg={6} className="my-3">
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/d4.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">OrangeJuice</h6>
                        <div className="c1"></div>
                        <div className="c2 fs-5">$3</div>
                        <p className="c3 mt-1">
                          Freshly squeezed oranges packed with natural vitamin C
                          and citrus flavor.
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/d5.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">Hot Tea</h6>
                        <div className="c1"></div>
                        <div className="c2 fs-5">$5</div>
                        <p className="c3 mt-1">
                          A soothing hot tea brewed to perfection — ideal for a
                          relaxing moment.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12} lg={6}>
                    <Row>
                      <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                        <img src={require("./img/d6.png")} className="img" />
                      </Col>
                      <Col md={9} xs={9}>
                        <h6 className="hi6">Coffee</h6>
                        <div className="c1 w-100"></div>
                        <div className="c2 fs-5">$4</div>
                        <p className="c3 mt-1">
                          Bold and aromatic coffee made from fresh ground beans
                          — a daily delight.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </>
    </div>
  )
}
export default Menu1