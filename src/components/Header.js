import { LOGO_URL } from "../utils/constants";
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();

  const {loggedinUser}=useContext(UserContext);
  // console.log("conextdata", loggedinUser)

  return (
    <div className="flex justify-between bg-orange-500 px-4  sm:bg-orange-600">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex  p-4  m-4">
          <li className=" px-1">online Status:{onlineStatus ? "✅" : "⛔"}</li>
          <li className=" px-1 ">
            <Link className="font-bold" to="/">Home</Link>
          </li>
          <li className=" px-1">
            <Link  className="font-bold"to="/about">About us</Link>
          </li>

          <li className=" px-1">
            <Link className="font-bold" to="/contact">contact</Link>
          </li>
          <li className=" px-1">
            <Link className="font-bold" to="/grocery">grocery</Link>
          </li>
          <li  className=" px-1 font-bold">Cart</li>
          <button
            className="font-bold px-1"
            onClick={() => {
              btnNameReact === "login"
                ? setbtnNameReact("logout")
                : setbtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
          <li className=" px-1 font-bold" >{loggedinUser} </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
