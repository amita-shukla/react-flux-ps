import "bootstrap/dist/css/bootstrap.min.css"; // using webpack to inject css, hence can be imported as it is
import React from "react";
import { render } from "react-dom"; // named import
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

// render(<HomePage />, document.getElementById("root"));
render(<AboutPage />, document.getElementById("root"));
