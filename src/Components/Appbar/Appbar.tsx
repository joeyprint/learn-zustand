import { Link } from "react-router-dom";
import "./AppbarStyles.css";

const Appbar = () => {
  return (
    <div className="appbar-root">
      <div className="appbar-container flex justify-content-between align-items-center">
        <div className="flex align-items-center">
          <a href="https://zustand-demo.pmnd.rs/" target="_blank">
            <img
              src={"/zustand-logo.png"}
              className={"appbar-logo"}
              alt="zustand logo"
            />
          </a>
          <p className={"appbar-title"}>Hi, Zustand</p>
        </div>

        <div className="flex align-items-center">
          <Link to={"/"} className={"appbar-link"}>
            Zustand
          </Link>
          <Link to={"/react"} className={"appbar-link"}>
            React
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
