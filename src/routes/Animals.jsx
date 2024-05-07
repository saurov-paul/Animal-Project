

const Animals = () => {
    return (
      <div>
        <h1>Animals</h1>
        <p>This is the Animals page</p>
      
      
      <main>
        {animalsData.map((animal) => {
          return <Cards key={animal.name} {...animal} 
          addLikes={likesHandler.bind(this,animal.name, 'add')} 
          removeLikes={() => likesHandler(animal.name, 'remove')} 
          removeCard={()=> removeCard(animal.name)}/>;
        })}
      </main>

      </div>
      
    );
  };
  
  export default Animals;