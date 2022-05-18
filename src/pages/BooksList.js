import { Link } from 'react-router-dom'

function BooksList(props) {
    // console.log(props.books)

    return (
        <>
            {props.books ? props.books.map((book, idx) => (
                <div key={idx}>
                    <Link to={`/${book.selfLink}&key=AIzaSyBTjTd2shcZdt0Zac3pxR_RV72Jj7QxWqw`} >
                        <h2>{book.volumeInfo?.title}</h2>
                    </Link>
                     
                </div>
            )) : <h3>LOADING! PLEASE WAIT!</h3>}
        </>
    )
}


export default BooksList