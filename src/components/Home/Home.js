import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pnpdesign from "../../Assets/Projects/pnpdesigns.png";
import homeLogoImg from "../../Assets/homeimg.png";
import Particle from "../Particle";
import Type from "./Type";
import Carousel from './carousel/carousel'
import MeetTheFounder from './founder'
import Footerhme from './footerhome'

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <div style={{ paddingBottom: 15, fontWeight: "bold", fontSize: 55, fontFamily: 'Poppins' }} className="heading">
                <bold>Transforming Your <br></br>  <span style={{ color: '#de82ebe8' }}> Digital Presence </span><br></br>  Creatively {"\n"}{" "}</bold>
              </div>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={6} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogoImg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px" }}
              />
            </Col>
          </Row>
        </Container>
        <Row>
          <Col md={1} className="home-header">

          </Col>
          <Col md={10} className="">
            <img
              src={pnpdesign}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "550px" }}
            />
          </Col>
          <Col md={1} className="home-header">
          </Col>
        </Row>
      </Container>
      <Carousel />
      <MeetTheFounder />
      <Footerhme />
    </section>
  );
}

export default Home;