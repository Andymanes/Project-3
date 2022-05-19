import { Link } from 'react-router-dom'
import Header from '../components/Header'

function BooksList(props) {
    // console.log(props.books)

    return (
        <>
            <div className='bookList'>
                {props.books ? props.books.map((book, idx) => (
                    <div key={idx} className='eachBook'>
                        <Link to={`/${book.id}`} >
                            <div className='eachBookImg' >
                                <img className='image' src={book.volumeInfo?.imageLinks.thumbnail} alt={book.volumeInfo?.title}/>
                            </div>
                        </Link>
                        <div className='eachBookTitle' >
                            <Link to={`/${book.id}`} >
                                <div>{book.volumeInfo?.title}</div>
                            </Link>
                        </div>
                    </div>
                    
                )) : <h3>LOADING! PLEASE WAIT!</h3>}
            </div>
        </>
    )
}


export default BooksList