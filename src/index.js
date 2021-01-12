import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserData } from "./Context/userContext";
import reducer, { initialState } from "./Context/reducers";

ReactDOM.render(
  <React.StrictMode>
    <UserData initialState={initialState} reducer={reducer}>
      <App />
    </UserData>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
