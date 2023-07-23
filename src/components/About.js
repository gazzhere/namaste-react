import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        {/* <UserClass name={"first chidren"} /> */}

        <User name={"oyepapap ji"}/>
      </div>
    );
  }
}

// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <UserClass name={"tera pra hu emh"}/>
//             {/* <User name={"oyepapap ji"}/> */}
//         </div>
//     )
// }
export default About;
