import Appbar from "./Components/Appbar";
import Toolbar from "./Components/ToolBar";
import { TextField } from "./Components/Bases/Inputs";

import "./BaselineStyles.css";
import "./Components/Themes/Theme.css";

function App() {
  return (
    <>
      <Appbar />
      <Toolbar />
      <div className="flex flex-direction-column justify-content-start align-items-center">
        <div className="flex align-items-center">
          <TextField />
          <button>Submit</button>
        </div>
        <p>Todo List</p>
      </div>
    </>
  );
}

export default App;
