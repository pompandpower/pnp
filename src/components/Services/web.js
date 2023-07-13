import React from "react";
import { Col, Row } from "react-bootstrap";
import s1 from "../../Assets/Services/web/1-36.png";
import s2 from "../../Assets/Services/web/1-37.png";
import s3 from "../../Assets/Services/web/1-38.png";
import s4 from "../../Assets/Services/web/1-39.png";
import s5 from "../../Assets/Services/web/1-40.png";
import s6 from "../../Assets/Services/web/1-41.png";


function WebStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s1}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Web Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s2}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Landing Page Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s3}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>App Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s4}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Email Template Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s5}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>NewsLetter Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s6}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}> Icon Design</p>
        </div>
      </Col>
    </Row>
  );
}

export default WebStack;
