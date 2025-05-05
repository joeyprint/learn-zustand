import { Outlet } from "react-router-dom";
import Appbar from "../../Components/Appbar";
import Toolbar from "../../Components/ToolBar";

const BaseLayout = () => {
  return (
    <>
      <Appbar />
      <Toolbar />
      <Outlet />
    </>
  );
};

export default BaseLayout;
