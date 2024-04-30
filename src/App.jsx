import { useState } from "react";
import { animals } from "./animalsList.js";
import Home from "./Pages/Home";
import Animals from "./Pages/Animals.jsx";
import Birds from "./Pages/Birds";
import Root from "./Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  //   const [animalsData,setAnimalsData] = useState(animals)

  //   const removeCard= (animal) =>{
  // const updateArrya =animalsData.filter(item => item.name !== animal);
  // setAnimalsData(updateArrya)
  //   }
  //   const likesHandler= (animal, action) =>{
  //     const updateArrya =animalsData.map(item => {
  //       if(item.name === animal){
  //         if(action === 'add'){
  //           return{...item, likes: item.likes + 1}
  //         }else{
  //           return{...item, likes: item.likes - 1}
  //         }
  //   }
  //   else{
  //     return item;
  //   }
  // });
  // setAnimalsData(updateArrya)
  //   }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/animals", element: <Animals /> },
        { path: "/birds", element: <Birds /> },
      ],
    },
  ]);

  return (
    <>
      {/* <Header />
      <main>
        {animalsData.map((animal) => {
          return <Cards key={animal.name} {...animal} 
          addLikes={likesHandler.bind(this,animal.name, 'add')} 
          removeLikes={() => likesHandler(animal.name, 'remove')} 
          removeCard={()=> removeCard(animal.name)}/>;
        })}
      </main>
      <Footer /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
