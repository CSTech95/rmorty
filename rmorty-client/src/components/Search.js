import React, { useState } from 'react';
import axios from "axios"
import Character from './Character';

const baseUrl = "https://rickandmortyapi.com/api/character/";
export const Search = () => {

    const [characters, setCharacters] = useState([]);

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
              console.log(characters)
            })
            .catch(error => {
              // RESEARCH ERROR HANDLING TO FIX THIS
              return <h1>No Character(s)</h1>;
            });
        } else return;
    }

    if(!characters) return null

    return (
        <div className="h-screen
        bg-sky-400">
            <form className='p-2' onSubmit={getCharacters} >
                    <input name="SearchC" style={{ color: 'blue', background: '#F0FFFF', height: '100%', border: 'none', padding: ".3em"}} type='text' placeholder='Enter Character Name' />
                </form>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 p-2">
                {characters.map( (e)=> 
                   
                    <Character
                    name={e.name}
                    image={e.image}
                    location={e.location.name}
                    />
                
            )}
                </div>
        </div>
    )
}
