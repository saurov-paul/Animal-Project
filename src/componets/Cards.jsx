import { Link } from "react-router-dom";

const Cards = ({ name, likes, addLikes, removeCard, removeLikes }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https://source.unsplash.com/400x400/?${name}`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="container text-center">
          <div className="row align-items-end">
            <button onClick={addLikes} className="col">
              <span className="material-symbols-outlined">heart_plus</span>
            </button>

            <button className="col">
              <p>{likes}</p>
            </button>

            <button className="col">
              <span onClick={removeLikes} className="material-symbols-outlined">
                heart_minus
              </span>
            </button>
            <Link className="btn btn-primary" to={name}>See More</Link>
          </div>
        </div>
      </div>
      <button className="removeCard" onClick={removeCard}>
        <span className="material-symbols-outlined">cancel</span>
      </button>
    </div>
  );
};

export default Cards;
