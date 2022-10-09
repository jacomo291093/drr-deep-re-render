import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import DDRTest from "./views/DDRTest";
import Home from "./views/Home";
import WithoutDRRTest from "./views/WithoutDRRTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/drr",
    element: <DDRTest />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
