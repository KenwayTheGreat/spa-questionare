import React, { useContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SPAProvider } from "./Context/SPAContext";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SPAProvider>
        <App />
      </SPAProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
