import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import m1 from "./img/m1.png";
import m2 from "./img/m2.png";
import m3 from "./img/m3.png";
import m4 from "./img/m4.png";
import m5 from "./img/m5.png";
import m6 from "./img/m6.png";
import s1 from "./img/s1.png";
import s2 from "./img/s2.png";
import s3 from "./img/s3.png";
import s4 from "./img/s4.png";
import s5 from "./img/s5.png";
import s6 from "./img/s6.png";
import d1 from "./img/d1.png";
import d2 from "./img/d2.png";
import d3 from "./img/d3.png";
import d4 from "./img/d4.png";
import d5 from "./img/d5.png";
import d6 from "./img/d6.png";

function Menu1() {
  const [Menu, setMenu] = useState("main");

  const images = { m1, m2, m3, m4, m5, m6, s1, s2, s3, s4, s5, s6, d1, d2, d3, d4, d5, d6 };

  return (
    <>
      <Row className="border2 mb-4">
        <div className="d-flex justify-content-center gap-4 bg-black">
          <a href="#main" className="btn2 text-white" onClick={() => setMenu("main")}>Mains</a>
          <a href="#starter" className="btn2 text-white" onClick={() => setMenu("starter")}>Starter</a>
          <a href="#drink" className="btn2 text-white" onClick={() => setMenu("drink")}>Drink</a>
        </div>
        <Col md={12} xs={12}>
          {Menu === "main" && (
            <Row className="my-5">
              {["m1","m2","m3","m4","m5","m6"].map((key, index) => (
                <Col xs={12} md={12} lg={6} key={key} className="my-3">
                  <Row>
                    <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                      <img src={images[key]} className="img" alt={key} style={{ height: "80px" }} />
                    </Col>
                    <Col md={9} xs={9}>
                      <h6 className="hi6">{key}</h6>
                      <div className="c1"></div>
                      <div className="c2 fs-5">${Math.floor(Math.random() * 100)}</div>
                      <p className="c3 mt-1">Sample description for {key}.</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          )}

          {Menu === "starter" && (
            <Row className="my-5">
              {["s1","s2","s3","s4","s5","s6"].map((key, index) => (
                <Col xs={12} md={12} lg={6} key={key} className="my-3">
                  <Row>
                    <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                      <img src={images[key]} className="img" alt={key} style={{ height: "80px" }} />
                    </Col>
                    <Col md={9} xs={9}>
                      <h6 className="hi6">{key}</h6>
                      <div className="c1"></div>
                      <div className="c2 fs-5">${Math.floor(Math.random() * 20)}</div>
                      <p className="c3 mt-1">Sample description for {key}.</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          )}

          {Menu === "drink" && (
            <Row className="my-5">
              {["d1","d2","d3","d4","d5","d6"].map((key, index) => (
                <Col xs={12} md={12} lg={6} key={key} className="my-3">
                  <Row>
                    <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                      <img src={images[key]} className="img" alt={key} style={{ height: "80px" }} />
                    </Col>
                    <Col md={9} xs={9}>
                      <h6 className="hi6">{key}</h6>
                      <div className="c1"></div>
                      <div className="c2 fs-5">${Math.floor(Math.random() * 10)}</div>
                      <p className="c3 mt-1">Sample description for {key}.</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </>
  );
}

export default Menu1;
