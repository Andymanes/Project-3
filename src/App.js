import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import GamesList from './pages/GamesList';



// function App() {
//   const [games, setGames] = useState([])
  

  
//   async function getGames() {
//     try {
//     let response = await fetch('https://www.giantbomb.com/api/games/?format=json&api_key=4475e47564e8bd765fc769b0d2298b654984a973&filter=platforms:9')
//   } catch(err) {
//       return (err)
//   }}

//   useEffect(() => {
//     getGames()
//   }, [])

//   if (games === null) {
//     return <h3>Loading</h3>
//   }

//   return (
//     <Routes>
//       <Route exact path='/' element={<GamesList games={games} />} />
//     </Routes>
//   )
// }


function App() {

 
  let [dogs, setDogs] = useState(null)

    
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => setDogs(data.message))
  },[])
  console.log({dogs})
  return (
    <div className="App">
        {Object.keys(dogs).map((eachDog, idx) => {
          <div key={idx}>
            <h1>{dogs.message}</h1>
          </div>
        })}
    </div>
  );
}


export default App;
