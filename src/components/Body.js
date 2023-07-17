import Resturantcart from "./Resturantcart";
import { useState } from "react";
import restrautList from "../utils/mockData";

const Body = () => {
  // local state variable - Super poweeful
 arr = useState(restrautList);
//  arrray destructring 
 const [restrautLists, setListOfResturant]=arr;
 
  // normal js Variable
  // let listOfResturant=[];

  // let restrautListjs = [
  //   {
  //     data: {
  //       id: "73011",
  //       name: "KFC",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["American", "Snacks", "Biryani"],
  //       costForTwo: 30000,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "7301",
  //       name: "Dominos",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["American", "Snacks", "Biryani"],
  //       costForTwo: 30000,
  //       avgRating: "4.5",
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restrautLists.filter(
              (res) => res.data.avgRating >= 4
            );
            console.log(restrautList);
            setListOfResturant(filteredList);
          }}
        >
          Top rated resturant
        </button>
      </div>
      <div className="res-container">
        {restrautLists.map((resturant) => (
          <Resturantcart key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
