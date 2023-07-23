import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
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

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- Rs
            {item.card.info.price / 100 || item.card.info.defaultprice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
