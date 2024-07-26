import Book from "./book"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addCart } from "../reducers/cartReducer"

const Storefront = (props) => {
  const dispatch = useDispatch()

  const handleAddToCart = (book) => {
    console.log(book)
    dispatch(addCart(book))
  }
// because Spring JPA doesn't supply an id outside of the DB unless we specifically add it.
// we get our ID from a different way.
const dissectId = href => {
    const id = href.split("/")
    return id[id.length - 1]
  }
  
  const Books = ({books}) => {
    
    return (
      <div id='books'>
  
      {books.map(book=>
          <div key={book.id}>
            <Book key={book.id} handler={()=>handleAddToCart(book)} book={book} message={'add to cart'}/> 
          </div>
        
      )}
      </div>
    )
    
  }
    return (
        <div id='content'>
            <h1>Hello, World</h1>
            <h2>Let's create a book store front page...</h2>
            <Books books={props.books}/>
        </div>
    )
    
}

export default Storefront