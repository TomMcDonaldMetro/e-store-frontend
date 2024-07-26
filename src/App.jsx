import { useEffect, useState } from 'react'
import StoreHeader from './components/navbar'
import './App.css'
import {Routes, Route, Link, useMatch, useParams} from 'react-router-dom'
import Storefront from './components/storefront'
import Checkout from './components/checkout'
import SigninForm from './components/signinForm'
import CredentialsScreen from './components/CredentialsScreen'
import Single from './components/Single'
import { useSelector, useDispatch } from 'react-redux'
import { initializeBooks } from './reducers/bookReducer'

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(initializeBooks())
  }, [])

  const books = useSelector(state => state.books)
  const cart = useSelector(state => state.cart)


  
 // add these into their own components so that we can cut back on the prop drilling.
  return (
   <div>
      <StoreHeader cart={cart} books={books}/>
    
      <Routes>
        <Route path='/books/:id' element={<Single />} />
        <Route path='/' element={<Storefront books={books} />} />
        <Route path='/checkout' element={<Checkout cart={cart}/>} />
        <Route path='/signin' element={<SigninForm />} />
        <Route path='/credentials' element={<CredentialsScreen cart={cart}/>} />
      </Routes>
    </div>
  )
}

export default App
