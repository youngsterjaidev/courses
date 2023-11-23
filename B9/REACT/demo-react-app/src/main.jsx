import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Counter from "./Counter";

let root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Counter />);

console.log(root);
