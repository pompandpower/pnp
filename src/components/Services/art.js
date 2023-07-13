import React from "react";
import { Col, Row } from "react-bootstrap";

import s1 from "../../Assets/Services/art/1-42.png";
import s2 from "../../Assets/Services/art/1-43.png";
import s3 from "../../Assets/Services/art/1-44.png";
import s4 from "../../Assets/Services/art/1-45.png";
import s5 from "../../Assets/Services/art/1-46.png";
import s6 from "../../Assets/Services/art/1-47.png";
import s7 from "../../Assets/Services/art/1-48.png";
import s8 from "../../Assets/Services/art/1-49.png";
import s9 from "../../Assets/Services/art/1-50.png";
import s10 from "../../Assets/Services/art/1-51.png";


function ArtStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s1}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Illustration Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s2}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Book Cover Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s3}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Art Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s4}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Card Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s5}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>CD Cover Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s6}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Greeting Card Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s7}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Invitation Card Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s8}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>eBook Cover Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s9}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Tattoo Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s10}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Character Design</p>
        </div>
      </Col>
    </Row>
  );
}

export default ArtStack;
