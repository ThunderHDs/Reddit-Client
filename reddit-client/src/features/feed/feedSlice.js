import {createSlice} from '@reduxjs/toolkit';

const initialState = { //Initial state for the slices 
    searchTerm: '',  //Search term for searchbar
    //activateFilters: [], // Filters array
    selectedSubreddit: 'r/popular',
};

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        //Action for defining the searchTerm
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        //Action for defining the filters
        /*
        toggleFilter: (state, action) => {
            const category = action.payload; //Category to be passed
            const index = state.activateFilters.indexOf(category); //Index of category

            if (index === -1) {
                state.activateFilters.push(category); //If it's not checked on, be added
            } else {
                state.activateFilters.splice(index, 1); //If it's checked on, be removed
            }
        },
        */
        setSelectedSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload;
        },
    },
});

//Export the actions for using them later
export const {setSearchTerm, setSelectedSubreddit} = feedSlice.actions;

//Export the reducer to including it into the store
export default feedSlice.reducer;