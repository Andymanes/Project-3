// import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import BooksList from './pages/BookList'



function App() {

  let [books, getBooks] = useState([])

  useEffect(() => {
    console.log('useEffect happned')
    fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&key=AIzaSyBTjTd2shcZdt0Zac3pxR_RV72Jj7QxWqw')
    .then(response => {
      console.log('Here is response:', response)
      return response.json()
    })
    .then(data => {
      console.log('Here is data:', data)
      getBooks(data.items)
    })
  },[])
console.log({books})
  return(
    <Routes>
      <Route exact path='/' element={<BooksList books={books} />} />
    </Routes>
    // <div className='App'>

    //     {books ? books.map((book, idx) => (
    //       <div key={idx}>
    //         <h2>{book.volumeInfo?.title}</h2>

    //       </div>
            

    //     )) : <p>Loading...</p>}
        

    // </div>
  )
}



// function App() {

 
//   let [dogs, setDogs] = useState(null)

    
//   useEffect(() => {
//     console.log("UseEffect happened!")
//     fetch("https://dog.ceo/api/breeds/list/all")
//     .then(response => {
//       console.log("Here is response: ", response)
//       return response.json()
//     })
//     .then(data => {
//       console.log("Here is data: ", data)
//       setDogs(data.message)
//     })
//   },[])

//   return (
//     <div className="App">
//       {
//         dogs
//         ?
//         Object.keys(dogs).map((eachDog, idx) => {
//             return(
//               <p key={idx}>{eachDog}</p>
//             )
//         })
//         :
//         <p>Loading...</p>
//       }
//     </div>
//   );
// }

export default App;