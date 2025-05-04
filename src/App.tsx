import { useState } from "react";

import Appbar from "./Components/Appbar";
import Toolbar from "./Components/ToolBar";
import { TextField } from "./Components/Bases/Inputs";

import "./BaselineStyles.css";
import "./Components/Themes/Theme.css";

function App() {
  const [count, setCount] = useState(0);

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
