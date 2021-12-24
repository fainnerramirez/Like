import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
//Config
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/nunito";
//router
import { CharacterProvider } from "./context/Context";

ReactDOM.render(
  <CharacterProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CharacterProvider>,
  document.getElementById("root")
);
