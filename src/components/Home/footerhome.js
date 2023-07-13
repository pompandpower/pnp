import React from 'react';
import './carousel/carousel.css'; // Import the CSS file for styling
import { Container, Row, Col } from "react-bootstrap";
import myLogo from "../../Assets/bgimg.png";
import Button from "react-bootstrap/Button";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footerhme = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container style={{
        backgroundImage: `url(${myLogo})`,
        backgroundSize: 'cover',
        borderRadius: '30px',
        backgroundPosition: 'center',
      }}
      >
        <Row>
          <Col md={2} className="myAvtar">
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", marginTop: '-22px' }}>
              We'll help you get started!
            </h1>
            <br />
            <br />
            <Button
              href="./contact"
              target="_blank"
              className="design"
              style={{ marginLeft: "10px", fontSize: "14px", padding: "20px", borderRadius: "10px" }}
            >
              <div>Let's Work Together !</div>
            </Button><br></br>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/pomp_power"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/pomp-power-designs/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pnp.designs/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} className="myAvtar">
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ marginBottom: '-100px' }} className="myAvtar">
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footerhme;
