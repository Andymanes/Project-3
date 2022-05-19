import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'


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
            <Header></Header>
            <div className='book'>
                <div className='firstInfo'>
                    <div className='title'>{book.volumeInfo?.title}</div>  
                    <img className='image' src={book.volumeInfo?.imageLinks.thumbnail} />
                </div>
                <div className='secondInfo'>
                    <div className='author'>{book.volumeInfo?.authors}</div> 
                    <div className='published'>Published: {book.volumeInfo?.publishedDate}</div> 
                    <div className='description'>{book.volumeInfo?.description}</div> 
                </div>
            </div>
        </>
    )
}

export default Book