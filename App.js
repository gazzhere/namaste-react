import React from "react";
import ReactDOM from "react-dom/client";

// react.createElement =>object
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "namaste react 🚀"
// );

// jsx
// this is same as heading as well as JSXheading dowm below
// const JSXheadings = <h1 className="head">namaste react using jsx🚀🚀</h1>;

const Title=()=>(
     <h1 className="head">Namaste react functional jsx🚀</h1>
)
const number=10000;
    
const HeadingComponent=()=>(
   <div id="container">
     {Title()}
     <Title/>
     <Title></Title>
       <h1 className="heading">Namaste react functional component😏</h1>
   </div>
);


// console.log(heading);
// console.log(JSXheadings);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
