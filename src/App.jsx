import { useEffect, useState } from 'react'
import bookService from './services/books'
import StoreHeader from './components/navbar'
import Book from './components/book'
import { isProduction } from './utils/urls' 
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Storefront from './components/storefront'
import OrderSummary from './components/ordersummary'
import ShoppingCart from './components/shoppingcart'
import Checkout from './components/checkout'

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
    console.log(booklist)
  }


  // make use of localstorage/cookies etc to persist through a refresh/browser close.
  const addCartButtonHandler = id => {
    bookService.get(id)
    .then(bookResponse =>{
      setCart(cart.concat(bookResponse))
    })
    console.log(cart)
  }

  // empty list because we just want this to display once.
  useEffect(()=>{
    bookService.getAll()
      .then(booksResponse=>{
        if( isProduction ) setBooks(booksResponse._embedded.books) 
          setBooks(booksResponse)
      }).catch(error=> console.log("Error using bookservice getall: ", error))
}, [])

  console.log(books)

  return (
   <div>
      <StoreHeader inputHandler={navSearchHandler} buttonHandler={navButtonHandler} cart={cart}/>
    
    <Routes>
      <Route path='/' element={<Storefront addCartButtonHandler={addCartButtonHandler} books={books} />} />
      <Route path='/checkout' element={<Checkout cart={cart}/>} />

    </Routes>
       </div>
  )
}

export default App
