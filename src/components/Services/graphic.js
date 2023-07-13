import React from "react";
import { Col, Row } from "react-bootstrap";
import s1 from "../../Assets/Services/graphic/1-29.png";
import s2 from "../../Assets/Services/graphic/1-30.png";
import s3 from "../../Assets/Services/graphic/1-31.png";
import s4 from "../../Assets/Services/graphic/1-32.png";
import s5 from "../../Assets/Services/graphic/1-33.png";
import s6 from "../../Assets/Services/graphic/1-34.png";
import s7 from "../../Assets/Services/graphic/1-35.png";


function GraphicDesign() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s1}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Graphic Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s2}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>PowerPoint Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s3}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Vector Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s4}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>3D Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s5}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Photoshop Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s6}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Infographic Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s7}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Mascot Design</p>
        </div>
      </Col>
    </Row>
  );
}

export default GraphicDesign;
