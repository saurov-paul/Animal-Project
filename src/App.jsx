import { useState } from 'react'
import './App.css';
import Header from "./componets/Header.jsx";
import Footer from "./componets/Footer.jsx";
import Cards from "./componets/Cards.jsx";
import {animals} from "./animalsList.js";

function App () {
  return (
    <>
    <Header />
    <main>
      {animals.map(animal =>{
        <Card key ={animal.name} {...animal}/>
      })}
    </main>
    <Footer />
    

    </>
  )
}

export default App
