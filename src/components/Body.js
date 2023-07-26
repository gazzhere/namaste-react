import Resturantcart from "./Resturantcart";
import { useState, useEffect } from "react";
// import restrautList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLable } from "./Resturantcart";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  // local state variable - Super poweeful
  const [restrautLists, setListOfResturant] = useState([]);
  const [filteredResturant, setfilteredResturant] = useState([]);

  const [searchText, setSearchtext] = useState("");
  const {setUserName,loggedinUser}=useContext(UserContext);

  const ResturantCradPromoted = withPromotedLable(Resturantcart);
  //  arrray destructring
  // console.log("render");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6342587&lng=85.0584152&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1725542&lng=72.942537&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1765331&lng=72.94753299999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1421629&lng=72.9374462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || {});
    setfilteredResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return <h1>Looks you are offline please check your internet connection</h1>;

  return restrautLists.length === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex ">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg "
            onClick={() => {
              console.log(searchText);
              const filterresturant = restrautLists?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResturant(filterresturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <label>username: </label>
        <input className="border border-black p-2" value ={loggedinUser}onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-stretch ">
        {filteredResturant?.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturant/" + resturant.info.id}>
            {/* {resturant.info.promoted ? (
              <ResturantCradPromoted resData={resturant} />
             
            ) : (
              <Resturantcart resData={resturant} />
            )} */}
            <Resturantcart resData={resturant} />
          </Link>
        ))}
      
      </div>
    </div>
  );
};
export default Body;
