import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers : {
        setFilter(state, action){
            return action.payload
        },
        // exists but currently not being used.
        removeFilter(state, action){
            state = ''
        }

    }
})

export const { setFilter, removeFilter } = filterSlice.actions

export default filterSlice.reducer

