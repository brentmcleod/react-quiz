import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Listen to tab events to enable outlines (accessibility improvement)
document.body.addEventListener("keyup", function(e) {
  if (e.which === 9) {
    /* tab */
    document.documentElement.classList.remove("no-focus-outline");
  }
});

// Attach React App to html root element
ReactDOM.render(<App />, document.getElementById("root"));
