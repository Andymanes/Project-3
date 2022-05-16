import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import GamesList from './pages/GamesList';



function App() {
  const [games, setGames] = useState([])
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    mode:'cors'

  }
  function getGames() {
    fetch('https://www.giantbomb.com/api/games/?format=json&api_key=4475e47564e8bd765fc769b0d2298b654984a973&filter=platforms:9', config)
    .then((res) => res.json())
    .then((res) => setGames(res.results))
  }

  useEffect(() => {
    getGames()
  }, [])

  if (games === null) {
    return <h3>Loading</h3>
  }

  return (
    <Routes>
      <Route exact path='/' element={<GamesList games={games} />} />
    </Routes>
  )
}

export default App;
