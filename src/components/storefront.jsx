import Book from "./book"
import { Link } from "react-router-dom"

const Storefront = (props) => {
    
// because Spring JPA doesn't supply an id outside of the DB unless we specifically add it.
// we get our ID from a different way.
const dissectId = href => {
    const id = href.split("/")
    return id[id.length - 1]
  }
  
  const Books = ({books, handler}) => {
    // books list goes here
    const booksArr = books;
    return (
      <div id='books'>
  
      {booksArr.map(book=>
        <Link to={`books/${book.id}`}>
          <Book key={book.title} book={book} handler={()=>handler(dissectId(book._links.self.href))} message={'add to cart'}/> 

        </Link>
      )}
      </div>
    )
  
  }
    return (
        <div id='content'>
            <h1>Hello, World</h1>
            <h2>Let's create a book store front page...</h2>
            <Books books={props.books} handler={props.addCartButtonHandler}/>
        </div>
    )
}

export default Storefront