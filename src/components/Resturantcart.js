import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const Resturantcart = (props) => {
  const { resData } = props;
  const {loggedinUser} =useContext(UserContext)
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    areaName,
    deliveryTime,
    costForTwo,
    sla
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-orange-200 hover:bg-orange-300  ">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold px-2 py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} 🤩</h4>
      <h4>{areaName}</h4>
      <h4>costForTwo: {costForTwo}</h4>

      <h4>deliveryTime: {sla.deliveryTime} minutes</h4>
      <h4> User: {loggedinUser}</h4>
    </div>
  );
};
export const withPromotedLable = (Resturantcart) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg m-2 p-2">
          promoted
        </label>
        <Resturantcart {...props} />
      </div>
    );
  };
};

export default Resturantcart;
