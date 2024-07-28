import { useEffect } from 'react'
import StoreHeader from './components/navbar'
import './App.css'
import {Routes, Route} from 'react-router-dom'
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

  const cart = useSelector(state => state.cart)

  // add a route for /authors/authorName - should reveal a listing of books by this author
  // <Route path='/author/:authorname element={<Storefront/>} /> with a filter in there somewhere.
    return (
   <div>
      <StoreHeader cart={cart}/>
    
      <Routes>
        <Route path='/books/:id' element={<Single />} />
        <Route path='/' element={<Storefront />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/signin' element={<SigninForm />} />
        <Route path='/credentials' element={<CredentialsScreen />} />
      </Routes>
    </div>
  )
}

export default App
