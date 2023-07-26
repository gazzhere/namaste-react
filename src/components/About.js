import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
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
        <div>LoggedIn user:<UserContext.Consumer>
          {({loggedinUser})=><h1 className="font-extrabold">{loggedinUser}</h1>}
        </UserContext.Consumer></div>
        <User name={"oyepapap ji"} />
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
