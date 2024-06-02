import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "../node_modules/react-router-dom/dist";
import RoutesConfig from "./configs/routes/RoutesConfig.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/__index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <RoutesConfig />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
