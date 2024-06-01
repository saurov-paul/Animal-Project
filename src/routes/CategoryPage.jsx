import { useParams, useLocation } from "react-router-dom";
import Cards from "../componets/Cards";
import { useEffect, useState } from "react";

const CategoryPage = ({
  removeCard,
  removeLikes,
  addLikes,
  ...rest 
}) => {
  const { category } = useParams();
  const location = useLocation();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, [location]);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const categoryItems = rest[category];

  return (
    <>
    <div className="searcharea">
        <input
          id="searchbar"
          type="text"
          placeholder="Search..."
          onChange={searchHandler}
          value={search}
        />
        <button className="resetbtn" onClick={() => setSearch("")}>Reset</button>
      </div>


      <h1 className="category_title">{category} </h1>
      <div className="card-container">
      {categoryItems
          .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <Cards
              key={item.name}
              name={item.name}
              likes={item.likes}
              removeCard={() => removeCard(item.name, category)}
              removeLikes={() => removeLikes(item.name, category, "remove")}
              addLikes={() => addLikes(item.name, category, "add")}
            />
        
        ))}


      </div>
    </>
  );
};

export default CategoryPage;
