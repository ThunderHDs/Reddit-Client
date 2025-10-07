import feedReducer from './feedSlice.js';
import {setSearchTerm, toggleFilter} from './feedSlice.js';


describe('feed slice', () => {
    const initialState = {
        searchTerm: '',
        activateFilters: [],
    };

    it('should handle initial state', () => {
        // Comprueba que el estado inicial es el esperado
        expect(feedReducer(undefined, {type: 'unknown'})).toEqual(initialState);
    });

    it('should handle setSearchTerm', () => {
        const actual = feedReducer(initialState, setSearchTerm('react'));
        // Comprueba que el término de búsqueda se ha actualizado
        expect(actual.searchTerm).toEqual('react');
    });

    it('should handle toggleFilter to add a new filter', () => {
        const actual = feedReducer(initialState, toggleFilter('pics'));
        // Comprueba que la categoría se ha añadido al array
        expect(actual.activateFilters).toEqual(['pics']);
    });

    it('should handle toggleFilter to remove an existing filter', () => {
        const previousState = { ...initialState, activateFilters: ['pics', 'programming'] };
        const actual = feedReducer(previousState, toggleFilter('pics'));
        // Comprueba que la categoría se ha eliminado del array
        expect(actual.activateFilters).toEqual(['programming']);
    });
})