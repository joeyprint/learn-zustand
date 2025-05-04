import "./AppbarStyles.css";

const Appbar = () => {
  return (
    <div
      id={"appbar"}
      className="flex justify-content-center align-items-center"
    >
      <a href="https://zustand-demo.pmnd.rs/" target="_blank">
        <img src={"/zustand-logo.png"} className="logo" alt="zustand logo" />
      </a>
      <h1>Hi, Zustand</h1>
    </div>
  );
};

export default Appbar;
