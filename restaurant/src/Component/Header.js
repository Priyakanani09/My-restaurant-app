import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-3" style={{ color: '#2d373c' }}>
            DELIZUS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto gap-3 fw-bold" style={{letterSpacing:'3px',fontSize:'17px'}}>
              <Nav.Link><Link to="/" className='navb'>HOME</Link></Nav.Link>
              <Nav.Link><Link to="/menu" className='navb'>MENU</Link></Nav.Link>
              <Nav.Link><Link to="/about" className='navb'>ABOUT US</Link></Nav.Link>
              <Nav.Link><Link to="/book" className='navb'>BOOK</Link></Nav.Link>
              <Nav.Link><Link to="/event" className='navb'>EVENTS</Link></Nav.Link>
              <Nav.Link><Link to="/blog" className='navb'>BLOG</Link></Nav.Link>
              <Nav.Link><Link to="/contact" className='navb'>CONTACT US</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
