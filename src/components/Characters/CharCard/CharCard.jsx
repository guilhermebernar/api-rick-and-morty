import { Char , CharImg, CharName } from "./style";

const CharCard = ({ name, image}) => {
    return(
     <Char>
        <CharImg src={image} alt={ `Personagem ${ name }`}/>
        <CharName>{name}</CharName>  
     </Char> 
    )
}

export default CharCard