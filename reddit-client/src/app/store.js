import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/feedSlice.js';

export const store = configureStore({
    reducer: {
        feed: feedReducer, //reducer with the searchbar and active Filters actions
    },
});
