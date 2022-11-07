import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav data-aos="fade-right">
      <div className="nav-bar">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/hookcounter">
          <h3>Custom Hook Counter</h3>
        </Link>
        <Link to="/reducercounter">
          <h3>UseReducer Counter</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
