import {Link} from 'react-router-dom'
const Home = () => {
    return (
      <div className='box'>
        
        <Link to ="/animals">
          <img src="https://images.unsplash.com/photo-1607274134639-043342705e6f?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /><p className='title1'>Animals</p>
          </Link>

        <Link to ="/birds">
          <img src="https://images.unsplash.com/photo-1626826248416-a899c24f4e07?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p className='title2'>Birds</p>
          </Link>

          <Link to ="/fishes">
          <img src="https://cdn.pixabay.com/photo/2013/07/18/20/24/shark-164899_1280.jpg" alt="" />
          <p className='title2'>Fishes</p>
          </Link>
          <Link to ="/insects">
          <img src="https://images.unsplash.com/photo-1527083811398-92939acc80a8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p className='title2'>Insects</p>
          </Link>
      </div>
    );
  };
  
  export default Home;