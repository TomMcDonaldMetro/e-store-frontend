import { useParams, useMatch } from "react-router-dom"
import { useSelector } from "react-redux"
import Book from "./book"

const Single = () => {

    // this is supposed to be a more detailed post when you select a specific book title.
    const books = useSelector(state => state.books)
    const match = useMatch('/books/:id')
    const book = books.find(book => book.id === match.params.id)
    console.log('booksss', book)

  const handler = (event) => {
    event.preventDefault()
    console.log('pressed handler in single.jsx')
  }
    return (
        <div>
            <Book book={book} handler={handler} message={"add to cart"} />
        </div>
    )
}

export default Single