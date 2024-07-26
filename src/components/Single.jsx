import { useParams, useMatch } from "react-router-dom"
import { useSelector } from "react-redux"

const Single = () => {


    const books = useSelector(state => state.books)
    const match = useMatch('/books/:id')
    const book = books.find(book => book.id === match.params.id)
    console.log('booksss', book)

  
    return (
        <div>
            <h2>Display single book data here or reuse the book component</h2>

            {book.title}   
        </div>
    )
}

export default Single