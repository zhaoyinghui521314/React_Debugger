// import React from 'react'
import * as React from "react";
// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
// import Test from "./test.jsx";
// import "./testSchedule.js";
// import "./testMinHeap.js";
// import App from './App'
import "./index.css";

// debugger;
const App = (
  <div key="hello" hello="nice">
    hello react debugger
  </div>
);

// const App = () => {
//   return (
//     <div key="hello" hello="nice">
//       hello react debugger
//     </div>
//   );
// };
console.log("App:", App);

// debugger;
const root = createRoot(document.getElementById("root"));
console.log("root:", root);

// root.render(<Test />);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
root.render(App);

// debugger;
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
