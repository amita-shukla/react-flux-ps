import "bootstrap/dist/css/bootstrap.min.css"; // using webpack to inject css, hence can be imported as it is
import React from "react";
import { render } from "react-dom"; // named import
import App from "./components/App";

// render(<HomePage />, document.getElementById("root"));
render(<App />, document.getElementById("root"));
