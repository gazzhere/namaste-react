import React from "react";
import User from "./User";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummyname",
        location: "Defautl Location",
        avatar_url: "dummyphoto",
      },
    };
  }
  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/gazzhere");
    // const json = await data.json();
    // this.setState({
    //   userInfo: json,
    // });
    // console.log(json);
    this.timer = setInterval(() => {
      console.log("Namaste react op");
    }, 1000);
  }
  componentDidUpdate(previousprops, previousState) {
    // if (
    //   this.state.count != previousState.count ||
    //   this.state.count != previousState.count
    // ) {
    // }
    console.log("componentDid upadte called");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("unmount called");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Contact:@gazzhere</h3>
      </div>
    );
  }
}
export default UserClass;
