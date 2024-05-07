import { useState } from "react";
import { animals, birds, fishes, insects } from "./animalsList.js";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Root from "./Root";
import CategoryPage from "./routes/CategoryPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SinglePage from "./routes/SinglePage.jsx";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, fishes, insects });

  const likesHandler = (name, category, action) => {
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].map((el) =>
        el.name === name
          ? { ...el, likes: el.likes + (action === "add" ? 1 : -1) }
          : el
      ),
    }));
  };
  const removeHandler = (name, category) => {
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].filter((el) => el.name !== name),
    }));
  };

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
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: <Root />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: ":category",
          element: (
            <CategoryPage
              addLikes={likesHandler}
              removeLikes={likesHandler}
              removeCard={removeHandler}
              {...zoo}
            />
          ),
        },
        { path: "/:category/:name", element: <singlePage {...zoo} /> },
        { path: "/About", element: <About /> },
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
