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
          <a href="/" className={"appbar-link"}>
            React
          </a>
          <a href="/zustand" className={"appbar-link"}>
            Zustand
          </a>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
