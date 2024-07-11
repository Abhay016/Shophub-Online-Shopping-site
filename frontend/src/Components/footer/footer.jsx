import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <h2 className='text-center py-3'>SHOPHUB</h2>
        <div className='flex justify-around'>
        <Row>
          <Col md={4}>
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              123 Main Street<br />
              City, State, 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@example.com
            </address>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com/example">Facebook</a></li>
              <li><a href="https://twitter.com/example">Twitter</a></li>
              <li><a href="https://instagram.com/example">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        </div>
        <Row className="mt-3">
          <Col>
            <p className="text-center">&copy; 2024 ShopHub. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;