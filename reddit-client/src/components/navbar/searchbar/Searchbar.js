import React from "react";
import './Searchbar.css';
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../features/feed/feedSlice";


const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };


    return (
            <input
            type="text"
            placeholder="Search in Reddit by title or author"
            onChange={handleSearchChange}
            />
        
    )
};

export default SearchBar;