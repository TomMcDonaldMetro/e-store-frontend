import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action) {
            const book = action.payload
            state.push(book)
        },
        removeCart(state, action){
            const id = action.payload.id
            return state.filter(book => book.id !== id)
        }
    },
        
})

export const {addCart, removeCart} = cartSlice.actions

export default cartSlice.reducer