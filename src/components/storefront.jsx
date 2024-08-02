import Book from "./book"
import { useDispatch, useSelector } from "react-redux"
import { addCart } from "../reducers/cartReducer"

const Storefront = () => {

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
  
  // little sloppy we could probably clean this up
  // as it stands, if we have a filter it will return a filtered list
  // else if we don't it will return the entire list.
  const Books = () => {
    
    const books = useSelector(state => state.books)
    const filter = useSelector(state => state.filter)
    let filteredBooks = undefined

    // if the server is off or something prevents books from appearing.
    if(books.length === 0){
      return (
        <div>
          No results... Please refresh or try again later.
        </div>
      )
    }

    if(filter){
      filteredBooks = books.filter(book => book.title.toLowerCase().includes(filter))
      
      // end early if we don't have any results
      if(filteredBooks.length === 0){
        return (
          <div>
            No results...
          </div>
        )
      }
    }

    

    return (
      <div id='books'>
  
      {filteredBooks ? filteredBooks.map(book => <div key={book.id}>
            <Book key={book.id} handler={()=>handleAddToCart(book)} book={book} message={'add to cart'}/> 
          </div>) : books.map(book=>
          <div key={book.id}>
            <Book key={book.id} handler={()=>handleAddToCart(book)} book={book} message={'add to cart'}/> 
          </div>
        
      )}
      </div>
    )
    
  }

  

    return (
        <div id='content'>
            <h2>Let's create a book store front page...</h2>
            <Books />
        </div>
    )
    
}

export default Storefront