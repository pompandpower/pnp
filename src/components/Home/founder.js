import React from 'react';
import './carousel/carousel.css'; // Import the CSS file for styling
import img5 from "../../Assets/4.png";

const MeetTheFounder = () => {
  return (
    <div className="meet-founder">
      <div className="meet-the-founder">
        <div className="left-section">
          <h1 style={{ marginTop: "10px" ,fontSize : "60px"}}>Meet <br></br>The <br></br>Founder</h1>
        </div>
        <div className="middle-section">
          <h2>Bhakti Joshi</h2>
          <p style={{ color: "#dc96f8" }}>Founder & Creative Head</p>
          <br></br>
          <span style={{ fontSize: "14px" }}>Do you know that visual representation is the most important aspect when it comes to creating a first impression?  
            <br></br>POMP & POWER is founded with the vision of creating high quality designing work for the customers at a fair price.</span>
        </div>
        <div className="right-section">
          <img src={img5} className="img-fluid" alt="Logo" />
          {/* <p style={{ textAlign: "center"}}>Bhakti</p> */}

        </div>
      </div>
    </div>
  );
};

export default MeetTheFounder;
