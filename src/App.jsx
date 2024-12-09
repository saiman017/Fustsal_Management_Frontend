import "./App.css";
import "boxicons";
import { RouterProvider } from "react-router-dom";
import { publicRouter } from "./Router";

function App() {
  return <RouterProvider router={publicRouter} />;
}

export default App;
