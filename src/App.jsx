import { useEffect, useState } from 'react'
import bookService from './services/books'
import StoreHeader from './components/navbar'
import { isProduction } from './utils/urls' 
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Storefront from './components/storefront'
import Checkout from './components/checkout'
import SigninForm from './components/signinForm'
import CredentialsScreen from './components/CredentialsScreen'

function App() {
  const [books, setBooks] = useState([])
  const [cart, setCart] = useState([])


  // make use of localstorage/cookies etc to persist through a refresh/browser close.
  const addCartButtonHandler = id => {
    bookService.get(id)
    .then(bookResponse =>{
      setCart(cart.concat(bookResponse))
    })
  }

  const removeHandler = id => {
    console.log('id',id)
    setCart(cart.filter(item => item.id !== id))
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


  return (
   <div>
      <StoreHeader cart={cart} books={books}/>
    
    <Routes>
      <Route path='/' element={<Storefront addCartButtonHandler={addCartButtonHandler} books={books} />} />
      <Route path='/checkout' element={<Checkout cart={cart} removeHandler={removeHandler}/>} />
      <Route path='/signin' element={<SigninForm />} />
      <Route path='/credentials' element={<CredentialsScreen cart={cart}/>} />
      <Route path='/books/:id' element={<Book books={books}/>} />
    </Routes>
       </div>
  )
}

export default App
