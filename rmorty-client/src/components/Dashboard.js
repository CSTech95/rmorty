import React, { Fragment, useEffect, useState } from "react";
import axios from "axios"
import Pool from "../UserPool";

// const user_id = AWS.config.credentials.identityId

const ListTodos = () => {
  const [characters, setCharacters] = useState([]);

  //delete todo function

//   const deleteTodo = async id => {
//     try {
//       const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
//         method: "DELETE"
//       });

//       setTodos(todos.filter(todo => todo.todo_id !== id));
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

// http://localhost:3000/characters

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
    // console.log()
  }, []);

  // console.log(characters);

  return (
    <Fragment>
    {characters.map( (e)=> 
                   <div>
                     <h1>{e.character_name}</h1>
                     <img src={e.image}/>
                     <h1>{e.gender}</h1>
                   </div>
                
            )}
    </Fragment>
  );
};

export default ListTodos;