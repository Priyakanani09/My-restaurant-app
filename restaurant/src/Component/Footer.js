import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div>
  <footer className="bg-black text-white py-4" style={{height:'190px'}}>
    <Container>
      <Row className="align-items-center text-center text-md-start my-5">
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <p className="mb-0">&copy; 2017 - Delizus by Designesia</p>
        </Col>
        <Col xs={12} md={4} className="mb-3 mb-md-0 text-center">
          <h3 className="fw-bold mb-0">DELIZUS</h3>
        </Col>
        <Col xs={12} md={4} className="text-md-end">
          <p className="mb-0">Contact: support@delizus.com</p>
        </Col>
      </Row>
    </Container>
  </footer>
</div>
  );
}

export default Footer