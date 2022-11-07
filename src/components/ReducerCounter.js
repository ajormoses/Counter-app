import React, { useReducer, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const ReducerCounter = () => {
  const [toggle, setToggle] = useState(true);
  const initalState = { count: 0 };
  const reducer = (
    state = initalState,
    action: { type: string, payload?: any }
  ) => {
    switch (action.type) {
      case "increment":
        return { count: parseInt(state.count) + 1 };
      case "decrement":
        return { count: parseInt(state.count) - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const Increment = () => {
    dispatch({ type: "increment" });
  };
  const Decrement = () => {
    dispatch({ type: "decrement" });
  };
  const Reset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <Link to="/">
              <h2 style={{ color: "#c52932" }}>Home</h2>
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
                <h2>CustomHookCounter</h2>
              </Link>
              <Link to="/reducercounter">
                <h2 style={{ color: "#c52932" }}>ReducerCounter</h2>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {!toggle && <Nav />}
      <section>
        <div className="container">
          <article>
            <h1>useReducer Counter</h1>

            <div className="counter container">
              <h1>Count : {state.count}</h1>
            </div>

            <div className="counter-btns">
              <button onClick={Increment}>INCREASE</button>
              <button onClick={Decrement}>DECREASE</button>
              <button onClick={Reset}>RESET</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ReducerCounter;
