import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="paragraph">
        Copyright &copy; 2022 All rights reserved | This Website is designed &
        developed by{" "}
        <a
          href="https://shariul.com"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          Md. Shariul Islam Tuhin
        </a>
        . Thanks to
        <a
          href="https://fontawesome.com/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          Font awesome
        </a>
        for icons and{" "}
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          Unsplash
        </a>{" "}
        for Recipe images.
      </p>
    </footer>
  );
}

export default Footer;
