import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/work4.jpg";
// import emotion from "../../Assets/work6.jpg";
// import editor from "../../Assets/work3.png";
// import chatify from "../../Assets/work1.png";
// import suicide from "../../Assets/work5.png";
// import bitsOfCode from "../../Assets/work2.png";
import work1 from '../../Assets/work/work1.png'
import work2 from '../../Assets/work/work2.jpeg'
import work3 from '../../Assets/work/work3.png'
import work4 from '../../Assets/work/work4.jpg'
import work5 from '../../Assets/work/work5.png'
import work6 from '../../Assets/work/work6.png'
import work7 from '../../Assets/work/work7.jpg'
import work8 from '../../Assets/work/work8.jpg'
import work9 from '../../Assets/work/work9.jpg'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Portfolio </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work7}
              isBlog={false}
              title="Logo Design"
              description="By"
              author="Pomp & Power Designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work9}
              isBlog={false}
              title="Business Card Design"
              description="By"
              author="Pomp & Power Designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work8}
              isBlog={false}
              title="Logo Design"
              description="By"
              author="Pomp & Power Designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work1}
              isBlog={false}
              title="Brochure Design"
              description="By"
              author="Pomp & Power Designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work2}
              isBlog={false}
              title="Invitation Card Design"
              description="By"
              author="Pomp & Power Designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work3}
              isBlog={false}
              title="Brochure Design"
              description="By"
              author="Pomp & Power Designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work5}
              isBlog={false}
              title="Website Design"
              description="By"
              author="Pomp & Power Designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work4}
              isBlog={false}
              title="Branding"
              description="By"
              author="Pomp & Power Designs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work6}
              isBlog={false}
              title="Website & Case Study"
              description="By"
              author="Pomp & Power Designs"
            // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
            // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            // ghLink="https://github.com/chiragdhruve01/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
