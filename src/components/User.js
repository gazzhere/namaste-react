import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    const timer = setInterval(() => {
      console.log("COMPNENT");
    }, 1000);
    return () => {
      console.log("return");
      clearInterval(timer);
    };
  }, []);
  console.log("render");
  return (
    <div className="user-card">
      <h1>Count={count}</h1>
      <h2>{props.name}</h2>
      <h3>Location:Dhreadhun</h3>
      <h3>Contact:@gazzhere</h3>
    </div>
  );
};
export default User;
