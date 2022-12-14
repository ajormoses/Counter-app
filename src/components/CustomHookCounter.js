import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const CustomHookCounter = () => {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState("");

  const handleCounter = (e) => {
    setCount(e.target.value);
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleIncrement = () => {
    setCount((prev) => parseInt(prev) + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <Link to="/">
              <h2>Home</h2>
            </Link>
            <div className="header-icon-bar" onClick={handleToggle}>
              {toggle ? (
                <FontAwesomeIcon icon={faBurger} />
              ) : (
                <FontAwesomeIcon icon={faRectangleXmark} />
              )}
            </div>
            <div className="desktop-menu">
              <Link to="/hookcounter">
                <h2 style={{ color: "#c52932" }}>CustomHookCounter</h2>
              </Link>
              <Link to="/reducercounter">
                <h2>ReducerCounter</h2>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <article>
            <h1>Custom Hook Counter</h1>
            <form>
              <input
                type="number"
                placeholder="Enter Count"
                value={count}
                onChange={handleCounter}
              />
            </form>
            <div className="counter container">
              <h1>Count : {count}</h1>
            </div>
            <div className="counter-btns">
              <button onClick={handleIncrement}>INCREASE</button>
              <button onClick={handleDecrement}>DECREASE</button>
              <button onClick={handleReset}>RESET</button>
            </div>
          </article>
        </div>
      </section>
      {!toggle && <Nav />}
    </div>
  );
};

export default CustomHookCounter;
