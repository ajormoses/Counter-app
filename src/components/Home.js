import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";

const Home = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <h2>Home</h2>
            <div className="header-icon-bar" onClick={handleToggle}>
              {toggle ? (
                <FontAwesomeIcon icon={faBurger} />
              ) : (
                <FontAwesomeIcon icon={faRectangleXmark} />
              )}
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <article>
            <h1>Holla Amigos</h1>
            <p>
              This is a counter app that you can use to increase, decrease and
              reset the value of the count you want to implement.
            </p>
            <h2>Enjoy your stay</h2>
          </article>
        </div>
      </section>
      {!toggle && <Nav />}
    </div>
  );
};

export default Home;
