import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";
import s1 from "../../Assets/Services/logo/1-01.png";
import s2 from "../../Assets/Services/logo/1-02.png";
import s3 from "../../Assets/Services/logo/1-03.png";
import s4 from "../../Assets/Services/logo/1-04.png";
import s5 from "../../Assets/Services/logo/1-05.png";
import s6 from "../../Assets/Services/logo/1-06.png";
import s7 from "../../Assets/Services/logo/1-07.png";
import s8 from "../../Assets/Services/logo/1-08.png";
import s9 from "../../Assets/Services/logo/1-09.png";
import s10 from "../../Assets/Services/logo/1-10.png";


function Techstack() {
  return (
    //   <div className="grid-container">
    //   {gridData.map(item => (
    //     <div key={item.id} className="grid-item">
    //       <div className="box">
    //         <span className="text">{item.text}</span>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s1}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Logo Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s2}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Business Card Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s3}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Stationary Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s4}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Label Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s5}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Letterhead Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s6}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Logo and Business Card Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s7}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Signage Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s8}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Billboard Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s9}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Trade Show Booth Design</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <img
            src={s10}
            alt="home pic"
            className="servicelogo"
          />
          <p style={{ fontSize: "12px" }}>Car Wrap Design</p>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
