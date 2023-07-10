import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/91356.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Meet <strong className="purple">Pomp & Power</strong> Designs, <br></br>
              Your Creative Agency for Growth.
            </h1>
            <span className="poppins-extralight" style={{ textAlign: "left" }}>
              Do you know that visual representation is the most important aspect when it comes to creating a first impression?<br></br>
              <br></br>
              POMP & POWER is founded with the vision of creating high-quality designing work for the customers at a fair price.<br></br>

              All of the POMP & POWER work is carefully crafted after understanding the needs and the target segments of the brand in detail.

              We are a group of enthusiasts dedicated to bringing high-quality work at a reasonable price.<br></br>
              <br></br>
              Our goal is to understand the customer’s requirements in detail and to guide them for what is absolutely required
              and beneficial for their brand rather than proposing absolutely everything which they may not even require.
            </span>
            {/* <Aboutcard /> */}
          </Col>
          <Col
            md={6}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} style={{ marginTop: "-90px" }} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
