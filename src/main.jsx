import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer.js'
import { Provider } from 'react-redux';
import bookReducer from './reducers/bookReducer.js';
import filterReducer from './reducers/filterReducer.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        books: bookReducer,
        filter: filterReducer
    }

})
store.subscribe(() => console.log(store.getState()))
console.log(store.getState())


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Provider store={store}>
        <App />
        </Provider>
    </Router>
)
