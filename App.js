import React from "react";
import  ReactDOM  from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is namaste react 🚀"),
    React.createElement("h2", {}, "babababbaab"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ])]
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react"
// );
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
