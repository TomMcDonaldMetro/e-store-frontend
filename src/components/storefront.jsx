import Book from "./book"

const Storefront = (props) => {
console.log(props)
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
        <Book key={book.title} book={book} handler={()=>handler(dissectId(book._links.self.href))}/> 
      )}
      </div>
    )
  
  }
    return (
        <div id='content'>
            <h1>Hello, World</h1>
            <h2>Let's create a book store front page...</h2>
            {<Books books={props.books} handler={props.addCartButtonHandler}/>}
        </div>
    )
}

export default Storefront