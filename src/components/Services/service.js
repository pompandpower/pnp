import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Services() {
  return (
    <Container fluid className="service-about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Logo & <strong className="purple">Branding </strong>
        </h1>
        <p style={{ color: "white" }}>
          Need to make a lasting impression? <br></br>The right combination of colors, shapes and words will define your brand. <br></br>Get the perfect logo and ensure your branding hits the spot with these services.
        </p>
        
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Print Design  </strong> Services
        </h1>
        <p style={{ color: "white" }}>
          Sending something to print can be so final! <br></br> Don't make the mistake of having a mistake - get the design right the first time, whether it's a flyer, poster or sticker. <br></br> Check out all our print design services. </p>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Graphic Design </strong> Services
        </h1>
        <p style={{ color: "white" }}>
          Really need some design inspiration? <br></br>Someone who can use their creative skills tomake a design that will really pop? <br></br>These graphic design services may be just what you're looking for.
        </p>

        <Toolstack />
        <h1 className="project-heading">
          <strong className="purple">Web Design </strong> Services
        </h1>
        <p style={{ color: "white" }}>
          Looking to make a mark on the world wide web? <br></br>Whether you need a new design for a custom built website or a design for a popular CMS platform <br></br>you'll find the perfect web design with these design services.           </p>

        <Toolstack />
        <h1 className="project-heading">
          Art & <strong className="purple">Illustration</strong>
        </h1>
        <p style={{ color: "white" }}>
          Not everyone is an artist - but the designers at DesignCrowd definitely are.<br></br> Whether you need a mascot designed for your sporting team or a piece of custom wall art <br></br>you'll find what you need with these design services.
        </p>
        <Toolstack />
        <h1 className="project-heading">
         <strong className="purple">Content Creation</strong> & Strategy
        </h1>
        <p style={{ color: "white" }}>
        Content creation and strategy are the pillars of a successful digital marketing campaign. <br></br> In today's competitive online landscape, businesses need high-quality, <br></br> engaging content to capture the attention of their target audience. <br></br>
        </p>
      </Container>
    </Container>
  );
}

export default Services;
