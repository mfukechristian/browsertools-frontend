import React from "react";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <div className="pages-component">
        <Link className="page-link" to="/">
          Who to follow
        </Link>
      </div>

      <div className="logo-container">
        <Link className="logo-link" to="/">
          browsertool.
        </Link>
      </div>

      <div className="cta-container">
        <Link>About</Link>
        <Link>Submit</Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
