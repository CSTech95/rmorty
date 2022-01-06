import React, { useState } from 'react';
import axios from "axios"
import Character from './Character';
import Pool from "../UserPool";


const baseUrl = "https://rickandmortyapi.com/api/character/";
export const Search = () => {

    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState({}); // To add character to database

    const getCharacters = (e) => {
        e.preventDefault();
        const inputVal = e.target.elements.SearchC.value;
        if (inputVal) {
          axios
            // react Router to filter through single character api endpoint
            .get(`https://rickandmortyapi.com/api/character/?name=${inputVal}`)
            .then(res => {
              const APIcharacter = res.data.results;
              setCharacters( APIcharacter );
            })
            .catch(error => {
              // RESEARCH ERROR HANDLING TO FIX THIS
              return <h1>No Character(s)</h1>;
            });
        } else return;
    }

    const addCharacter = async (id) => {
        // console.log(characters.filter(character => character.id == id))
        const selectedCharacter = characters.filter(character => character.id == id)
        console.log(selectedCharacter)
        setCharacter(selectedCharacter)
        try {
            let response = await fetch(`http://localhost:3000/addcharacter`, {
              method: "POST",
              headers: {
                'Content-type': 'application/json' // Indicates the content 
               },
               body: JSON.stringify({
                //    id:character[0].id,
                   character_name: character[0].name,
                   status: character[0].status,
                   species: character[0].species, 
                   gender: character[0].gender,
                   image: character[0].image,
                   username: Pool.getCurrentUser().username
                })
            });
          } catch (err) {
            console.error(err.message);
          }
    }

    if(!characters) return null

    return (
        <div className="h-screen
        bg-gradient-to-bl from-zinc-900 to-blue-900">
            <form className='p-2' onSubmit={getCharacters} >
                    <input name="SearchC" style={{ color: 'blue', background: '#F0FFFF', height: '100%', border: 'none', padding: ".3em"}} type='text' placeholder='Enter Character Name' />
                </form>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 p-2 bg-gradient-to-bl from-zinc-900 to-blue-900">
                {characters.map( (e)=> 
              <div key={e.id} className="flex m-4 shadow-md shadow-blue-500/50 p-1">
                      <Character
                      name={e.name}
                      image={e.image}
                      location={e.location.name}
                      />
                  <div className="w-full grid justify-end p-1">
                      <button onClick={() => addCharacter(e.id)} className="justify-end text-sm hover:bg-green-500 bg-blue-700 text-white font-bold p-1 px-2 rounded-xl place-self-center">Add</button>
                      </div>
                  </div> 
                
            )}
                </div>
        </div>
    )
}
