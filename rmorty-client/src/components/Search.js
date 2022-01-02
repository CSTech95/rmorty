import React, { useState, useEffect } from 'react';
import axios from "axios"

const baseUrl = "https://rickandmortyapi.com/api/character/";
export const Search = () => {

    const [characters, setCharacters] = useState(null);

    const getCharacters = (e) => {
        e.preventDefault();
        const inputVal = e.target.elements.SearchC.value;
        if (inputVal) {
          axios
            // react Router to filter through single character api endpoint
            .get(`https://rickandmortyapi.com/api/character/?name=${inputVal}`)
            .then(res => {
              // console.log(res.data.results);
              const APIcharacter = res.data.results;
              setCharacters( APIcharacter );
              console.log(characters)
            //   console.log(this.state.APIcharacter);
            })
            .catch(error => {
              // RESEARCH ERROR HANDLING TO FIX THIS
              return <h1>No Character(s)</h1>;
            });
        } else return;
    }

    useEffect(() => {
      axios.get(baseUrl).then((response) => {
        setCharacters(response.data.results);
    });
    console.log(characters)
    }, []);


    if(!characters) return null
        
    return (
        <div>
            <form onSubmit={getCharacters} >
                    <input name="SearchC" style={{ color: 'blue', background: '#F0FFFF', height: '100%', border: 'none' }} type='text' placeholder='Enter Character Name' />
                </form>
            <div>
                {characters.map( (e)=> 
                <h1>{e.name}</h1>
            )}
                </div>
        </div>
    )
}
