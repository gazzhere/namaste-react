import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className=" text-left p-2 m-2 border-gray-200 border-b-2 flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className=""> {item.card.info.name}</span>
                <span className="">
                  ₹-
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs "> {item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
             <div className="absolute">
             <button className="p-2 bg-black shadow-lg text-white  rounded-lg mx-16 mt-20 ">
                Add +
              </button>
             </div>
              <img className="rounded-lg" src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
