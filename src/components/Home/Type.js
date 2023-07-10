import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Logo & Branding",
          "Print Design Services",
          "Graphic Design Services",
          "Art & Illustration",
          "UI/UX Services",
          "Web Design & Development",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
