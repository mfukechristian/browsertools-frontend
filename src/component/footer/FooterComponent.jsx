import React from "react";
import "./FooterComponent.css";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-text">
        <p>
          <a
            href="https://www.linkedin.com/in/christian-mfuke-kambulu/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Made by Christian Mfuke
          </a>{" "}
        </p>
        <p> &copy;{currentYear}</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
