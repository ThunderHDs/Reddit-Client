import { configureStore } from '@reduxjs/toolkit';
// Más adelante importaremos aquí los "reducers" de nuestros slices.

export const store = configureStore({
    reducer: {
        // Aquí es donde añadiremos los reducers.
        // Por ejemplo: posts: postsReducer,
    },
});
