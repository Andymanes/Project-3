import { Link } from 'react-router-dom'
import Header from '../components/Header'

function BooksList(props) {
    // console.log(props.books)

    return (
        <>
            <div className='bookList'>
                {props.books ? props.books.map((book, idx) => (
                    <div key={idx}>
                        <Link to={`/${book.id}`} >
                        <h2>{book.volumeInfo.title}</h2> 
                        </Link>
                        
                    </div>
                )) : <h3>LOADING! PLEASE WAIT!</h3>}
            </div>
        </>
    )
}


export default BooksList