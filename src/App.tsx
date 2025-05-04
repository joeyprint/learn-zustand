import Appbar from "./Components/Appbar";
import Toolbar from "./Components/ToolBar";
import { TextField } from "./Components/Bases/Inputs";

import "./BaselineStyles.css";
import "./Components/Themes/Theme.css";
import ReactTodo from "./Pages/ReactTodo";

function App() {
  return (
    <>
      <Appbar />
      <Toolbar />
      <ReactTodo />
    </>
  );
}

export default App;
