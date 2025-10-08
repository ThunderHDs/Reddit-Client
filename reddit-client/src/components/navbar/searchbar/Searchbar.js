//import './Searchbar.css';
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../features/feed/feedSlice";

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };


    return (
        <div className="flex items-center">
            <input
            type="text"
            placeholder="Search Reddit"
            onChange={handleSearchChange}
            className="bg-white rounded-full px-2 py-2 text-base outline-none border border-gray-300 focus:border-blue-400 w-48 md:w-80 transition shadow"
/>
        </div>
        
    )
};

export default SearchBar;