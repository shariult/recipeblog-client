import React from "react";

import bgImg from "../assets/hero-1.jpg";

function Header({
  mainHeading,
  secondHeading,
  subHeading,
  backgroundImage = bgImg,
}) {
  return (
    <header
      className="header"
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div className="header__text-box">
        {mainHeading && (
          <h1 className="heading-1 text--center">{mainHeading}</h1>
        )}
        {secondHeading && (
          <h2 className="heading-2 text--center">{secondHeading}</h2>
        )}
        {subHeading && (
          <p className="header__text text--center">{subHeading}</p>
        )}
      </div>
    </header>
  );
}

export default Header;
