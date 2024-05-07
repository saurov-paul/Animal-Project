import { useParams } from "react-router-dom";
import Cards from '../componets/Cards';


const CategoryPage = ({removeCard,removeLikes,addLikes,...rest}) =>{

    const {category} = useParams();

    const categoryItems = rest [category];
    
    

    return(
        <>
        
        <h1>{category} </h1>
        {categoryItems.map((item)=>{
            return <Cards 
            key={item.name}
            name={item.name}
            likes={item.likes}
            removeCard={()=>removeCard(item.name, category)}
            removeLikes={()=>removeLikes(item.name, category, 'remove')}
            addLikes={()=>addLikes(item.name, category, 'add')}
            />
        })}
        
        </>
    )
}

export default CategoryPage;