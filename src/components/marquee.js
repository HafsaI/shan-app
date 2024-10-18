import React from "react";
import Marquee from "react-fast-marquee";
import "./marquee.css";

export const MarqueeComponent = () => {
  return (
    <Marquee className="marquee-container">
      <p>OCT 26th SMORGASBURG WILLIAMSBURG </p>
      <p style={{ fontFamily: "Poppins",  margin: '0 10px' }}>&#x2022;</p>
      <p>OCT 27TH PROSPECT PARK</p>
      <p style={{ fontFamily: "Poppins" , margin: '0 10px'}}>&#x2022;</p>
      <p>OCT 19th QUEENS NIGHT MARKET</p>
      <p style={{ fontFamily: "Poppins",  margin: '0 10px' }}>&#x2022;</p>
      {/* <p>OCT 26th SMORGASBURG WILLIAMSBURG </p> */}
      {/* <p style={{ fontFamily: "Poppins",  margin: '0 10px' }}>&#x2022;</p> */}
    </Marquee>
  );
};
