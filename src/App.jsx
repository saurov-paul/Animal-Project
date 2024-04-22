import { useState } from "react";
import Header from "./componets/Header.jsx";
import Footer from "./componets/Footer.jsx";
import Cards from "./componets/Cards.jsx";
import { animals } from "./animalsList.js";

function App() {

  const [animalsData,setAnimalsData] = useState(animals)

  const removeCard= (animal) =>{
const updateArrya =animalsData.filter(item => item.name !== animal);
setAnimalsData(updateArrya)
  }
  const likesHandler= (animal, action) =>{
    const updateArrya =animalsData.map(item => {
      if(item.name === animal){
        if(action === 'add'){
          return{...item, likes: item.likes + 1}
        }else{
          return{...item, likes: item.likes - 1}
        }
  }
  else{
    return item;
  }
});
setAnimalsData(updateArrya)
  }
  
  return (
    <>
      <Header />
      <main>
        {animalsData.map((animal) => {
          return <Cards key={animal.name} {...animal} 
          addLikes={likesHandler.bind(this,animal.name, 'add')} 
          removeLikes={() => likesHandler(animal.name, 'remove')} 
          removeCard={()=> removeCard(animal.name)}/>;
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
