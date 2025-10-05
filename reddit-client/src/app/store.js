import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/feedSlice.js';
import { redditApi} from '../features/api/apiSlice.js';


export const store = configureStore({
    reducer: {
        feed: feedReducer, //reducer with the searchbar and active Filters actions
        [redditApi.reducerPath]: redditApi.reducer, //Reddit API reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(redditApi.middleware),
});
