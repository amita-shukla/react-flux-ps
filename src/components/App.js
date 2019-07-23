import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function App() {
  // get route from window and display page accprdingly.
  // but the downside is it's posting back to server
  // and we lose client-side state.
  const route = window.location.pathname;
  if (route === "/about") return <AboutPage />;
  return <HomePage />;
}

export default App;
