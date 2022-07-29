import api from "../../services/api";
import { useState, useEffect } from "react";
import CharCard from "./CharCard/CharCard";
import PageButtons from "./PageButtons/PageButtons";
import { CharList, Title } from "./style";


const Characters = () => {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [limit] = useState(10);


  useEffect(() => {
    setLoading(true);

    api
      .get(`/character/?page=${offset}`, {
        params: {
          limit,
          offset: offset * limit
        },
      })
        .then(response => {
          const { results } = response.data;
  
          setCharacterList(results);
          console.log(results)
            
        })
        .catch(error => console.log(error))
        .finally(() => {
          setLoading(false)
        });


    }, [offset, limit]);

  return (
    <>
      <Title>Lista de personagens:</Title>

      <PageButtons offset={offset} limit={limit} setOffset={setOffset} characterList={characterList}/>
      
      <CharList>
          {loading ? 
          (
            <>
              <img src="https://i.giphy.com/media/RdizsB3uw9Af57YnAQ/giphy.webp" alt="loading"/>
            </>
          ) 
          : 
          (
            <>
              {characterList.map(({ name, image }, index) => {return <CharCard key={index} name={name} image={image}/>})}
            </>
          )}
      </CharList>
      
      <PageButtons offset={offset} limit={limit} setOffset={setOffset} characterList={characterList}/>
    </>
  );
};

export default Characters;
