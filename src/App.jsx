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


  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: <Root />,
      
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
        { path: "/:category/:name", element: <SinglePage {...zoo} /> },
        { path: "/About", element: <About /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
