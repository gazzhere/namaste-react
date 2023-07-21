import Resturantcart from "./Resturantcart";
import { useState, useEffect } from "react";
// import restrautList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // local state variable - Super poweeful
  const [restrautLists, setListOfResturant] = useState([]);
  const [filteredResturant, setfilteredResturant] = useState([]);

  const [searchText, setSearchtext] = useState("");
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

  return restrautLists.length === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredResturant?.map((resturant) => (
          <Link key={resturant.data.id} to={"/resturant/" + resturant.data.id}>
            <Resturantcart resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
