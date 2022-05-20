import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import BooksList from './pages/BooksList'
import Book from './pages/Book'
import Header from './components/Header'




function App() {

  let [books, getBooks] = useState([])

  useEffect(() => {
    // console.log('useEffect happned')
    fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&maxResults=40')
    .then(response => {
      // console.log('Here is response:', response)
      return response.json()
    })
    .then(data => {
      // console.log('Here is data:', data)
      getBooks(data.items)
    })
  },[])
console.log({books})
  return(
    <Routes>
      <Route exact path='/' element={<BooksList books={books} />} />
      <Route exact path='/:id' element={<Book/>} ></Route>
      {/* <Route exact path='/author/:id' element={} */}
    </Routes>
    
  )
}



export default App;