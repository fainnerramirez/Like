import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./config/chakraui.config";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider resetCSS theme={theme}>
    <ColorModeScript />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
