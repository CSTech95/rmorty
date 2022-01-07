import React, { Fragment, useEffect, useState } from "react";
import axios from "axios"
import Pool from "../UserPool";
import Character from "./Character";

// const user_id = AWS.config.credentials.identityId

const ListTodos = () => {
  const [characters, setCharacters] = useState([]);

  const deleteCharacter = async id => {
    try {
      let response = await fetch(`/deletecharacter`, {
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
    await axios.post('/characters', {username:Pool.getCurrentUser().username})
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
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 p-2 bg-gradient-to-bl from-zinc-900 to-blue-900">
        
    {characters.map( (e)=> 
    <div key={e.id} className="flex m-4 shadow-md shadow-blue-500/50">

      <Character
        name={e.character_name}
        image={e.image}
        gender={e.gender}
        species={e.species}
        />
        <div className="w-full grid justify-end p-1 content-end">
        <button onClick={() => deleteCharacter(e.id)} className="text-sm hover:bg-red-500 bg-blue-700 text-white font-bold p-1 px-2 rounded-xl place-self-center">Delete</button>
    </div>
    </div>
                
                )}
                </div>
    </Fragment>
  );
};

export default ListTodos;