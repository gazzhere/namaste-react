import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import Resturantcategory from "./ResturnatCategory";

const ResturantMenu = () => {
  const { resId } = useParams();
  // custome hooks
  const resturInfo = useResturantMenu(resId);

  if (resturInfo === null) <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resturInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resturInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  console.log(itemCards);
  const categories =
    resturInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")}-{costForTwoMessage}
      </p>

      {/* catogery accordions */}
      {categories?.map((category) => (
        <Resturantcategory
          key={category?.card?.card.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
