
import ItemList from "./ItemList";

const Resturantcategory = ({ data, showitem, setShowIndex }) => {
  const handleonclick=()=>{
    setShowIndex();
  }
  return (
    <div>
      <div className=" w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4">
        {/* Header */}

        <div 
          className="flex justify-between cursor-pointer"
          onClick={handleonclick}
        >
          <span className=" font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* accordion */}
        {showitem && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default Resturantcategory;
