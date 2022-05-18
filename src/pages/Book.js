import { useParams } from 'react-router-dom'

function BookPage (props) {
    let { index } = useParams()
    console.log(index)
    let book = props.books[index]
    return (
        <>
            <h2>{book.volumeInfo.title}</h2>
            <h2>{book.volumeInfo.authors}</h2>
            <h2>{book.volumeInfo.publishedDate}</h2>
        </>
    )
}

export default BookPage