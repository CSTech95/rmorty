import React, { Fragment, useEffect, useState } from "react";
import axios from "axios"
import Pool from "../UserPool";

// const user_id = AWS.config.credentials.identityId

const ListTodos = () => {
  const [characters, setCharacters] = useState([]);

  const deleteCharacter = async id => {
    try {
      let response = await fetch(`http://localhost:3000/deletecharacter`, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json' // Indicates the content 
         },
         body: JSON.stringify({id})
      });
      // console.log({id})
      // console.log(deleteCharacter)
      setCharacters(characters.filter(character => character.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

const getCharacters = async () => {
  try {
    await axios.post("http://localhost:3000/characters", {username:Pool.getCurrentUser().username})
    .then((res)=>{
      setCharacters(res.data)
    })
  } catch (err) {
    console.error(err.message);
  }
};

  useEffect(() => {
    getCharacters();
  }, []);

  // console.log(characters);

  return (
    <Fragment>
    {characters.map( (e)=> 
                   <div key={e.id}>
                     <h1>{e.character_name}</h1>
                     <img src={e.image}/>
                     <h1>{e.gender}</h1>
                     <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full" onClick={() => deleteCharacter(e.id)}>Delete</button>
                   </div>
                
            )}
    </Fragment>
  );
};

export default ListTodos;