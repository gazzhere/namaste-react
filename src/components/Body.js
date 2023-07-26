import Resturantcart from "./Resturantcart";
import { useState, useEffect } from "react";
// import restrautList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLable } from "./Resturantcart";

const Body = () => {
  // local state variable - Super poweeful
  const [restrautLists, setListOfResturant] = useState([]);
  const [filteredResturant, setfilteredResturant] = useState([]);

  const [searchText, setSearchtext] = useState("");

  const ResturantCradPromoted = withPromotedLable(Resturantcart);
  //  arrray destructring
  // console.log("render");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfResturant(json?.data?.cards[2]?.data?.data?.cards || {});
    setfilteredResturant(json?.data?.cards[2]?.data?.data?.cards);
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
              const filterresturant = restrautLists.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResturant(filterresturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-100  rounded-lg "
            onClick={() => {
              const filteredList = restrautLists.filter(
                (res) => res.data.avgRating >= 4
              );
              // console.log(restrautList);
              setListOfResturant(filteredList);
            }}
          >
            Top rated resturant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-stretch ">
        {filteredResturant?.map((resturant) => (
          <Link key={resturant.data.id} to={"/resturant/" + resturant.data.id}>
            {resturant.data.promoted ? (
              <ResturantCradPromoted resData={resturant} />
            ) : (
              <Resturantcart resData={resturant} />
            )}
            <Resturantcart resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
