const Cards = ({ name, likes, addLikes, removeCard, removeLikes }) => {
  return (
    <div className="animal">
      
      <button className="removeCard" onClick={removeCard}>
        <span class="material-symbols-outlined">cancel</span>
      </button>
      
      <img src={`https://source.unsplash.com/400x400/?${name}`} alt="" style={{ width: "200px", height: "200px" }} />
      <h2 className="text-center p-2">{name}</h2>
      
      <div class="container text-center">
        <div class="row align-items-end">

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

        </div>
      </div>
    </div>
  );
};

export default Cards;
