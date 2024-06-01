import { useParams } from "react-router-dom";

const SinglePage = ({ ...rest }) => {
  const params = useParams();
  const categoryItems = rest[params.category];
  const data = categoryItems.find((el) => el.name === params.name);

  return (
    <div id="AnimalPage">
      <h2 className="category_title">{data.name} </h2>
      <div className="imgcontainer">
        <img
          src={`https://source.unsplash.com/random/400×400/?${data.name}`}
          alt={`Photo of ${data.name}`}
        />
      </div>
    </div>
  );
};

export default SinglePage;
