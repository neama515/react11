import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portofolio from "./components/Portofolio/Portofolio";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact/> },
      { path: "portofolio", element: <Portofolio/> },
      {
        path: "*",
        element: (
          <div className="h-screen flex justify-center items-center bg-teal-500">
            4 0 4 Not found
          </div>
        ),
      },
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
