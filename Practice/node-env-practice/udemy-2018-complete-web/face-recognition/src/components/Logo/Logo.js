import React from "react";
import Tilt from "react-tilt";
import './Logo.css';

const Logo = () => {
  return (
    <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }}>
      <div className="Tilt-inner pa3">
        <img style={{ paddingTop: "5px" }} alt="logo"  />
      </div>
    </Tilt>
  );
};

export default Logo;