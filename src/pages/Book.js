import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Book (props) {
    let { id } = useParams()
    let [book, getBook] = useState({})

    useEffect(() => {
        // fetch data from api using the id params to tell it which book 
        // specifically to query
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(response => {
            console.log('Response:', response)
            return response.json()
        })
        .then(data => {
            console.log('Data:', data)
            getBook(data)
        })
    },[])
    console.log({book})
    // book IS console.logging with all relevant data
    // wanting to display properties of the book object on page
    return (
        <>
            
                <div className='book'>
                    <h1 className='title'>{book.volumeInfo?.title}</h1>  
                    <img src={book.volumeInfo?.imageLinks.thumbnail} />
                    <h2 className='author'>{book.volumeInfo?.authors}</h2> 
                    <h2 className='categories'>{book.volumeInfo?.categories}</h2> 
                    <h2 className='description'>{book.volumeInfo?.description}</h2> 
                </div>
        </>
    )
}

export default Book