import React from 'react';
import ReactDOM from 'react-dom';
import {StrictMode} from "react";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./theme/theme";
import App from "./components/App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

