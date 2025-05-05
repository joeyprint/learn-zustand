import { RouterProvider } from "react-router-dom";

import router from "./Pages/Routes";

import "./BaselineStyles.css";
import "./Components/Themes/Theme.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
