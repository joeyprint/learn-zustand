import "./AppbarStyles.css";

const Appbar = () => {
  return (
    <div className="appbar-root flex justify-content-center align-items-center">
      <a href="https://zustand-demo.pmnd.rs/" target="_blank">
        <img
          src={"/zustand-logo.png"}
          className={"appbar-logo"}
          alt="zustand logo"
        />
      </a>
      <p className={"appbar-title"}>Hi, Zustand</p>
    </div>
  );
};

export default Appbar;
