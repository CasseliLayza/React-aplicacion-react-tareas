import React from "react";
import freeCodeCampLogo from "../img/logoRact.png";

function LogoFreeCodeCamp() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        className="freecodecamp-logo"
        src={freeCodeCampLogo}
        alt="Logo freecodecamp react"
      />
    </div>
  );
}

export default LogoFreeCodeCamp;
