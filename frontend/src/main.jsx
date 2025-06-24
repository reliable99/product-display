import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
