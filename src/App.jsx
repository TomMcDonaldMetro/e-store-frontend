import { useEffect, useState } from 'react'
import bookService from './services/books'
import StoreHeader from './components/navbar'
import Book from './components/book'
import './App.css'

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

function App() {
  const [books, setBooks] = useState([
    {title: "1984"}, {title: "19"}, {title: "84"}
  ])
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')

  // set a search state variable by the nav bar search input
  const navSearchHandler = (event) => {
    setSearch(event.target.value)
  }

  // search by title using includes
  // returns a filtered list of books to display
  const navButtonHandler = event => {
    event.preventDefault()
    const booklist = books.filter(book=>book.title.includes(search))

  }

  // get all books from rest api to set a books state variable
  const getAll = () => {
    bookService.getAll()
    .then(booksResponse=>{
      setBooks(booksResponse._embedded.books)
    }).catch(error=> console.log("Error using bookservice getall: ", error))
  }

  const get = (id) => {
    bookService.get(id)
    .then(bookResponse =>{
      setCart(cart.concat(bookResponse))
    })
  }

  // make use of localstorage/cookies etc to persist through a refresh/browser close.
  const addCartButtonHandler = id => {
    get(id)
  }

  // empty list because we just want this to display once.
  useEffect(getAll, [])
  
  console.log(books)

  return (
   <div>
    <StoreHeader inputHandler={navSearchHandler} buttonHandler={navButtonHandler} cart={cart}/>
    <div id='content'>
      <h1>Hello, World</h1>
      <h2>Let's create a book store front page...</h2>
      {<Books books={books} handler={addCartButtonHandler}/>}
    </div>
   </div>
  )
}

export default App
