import './Navbar.css';
import SearchBar from './searchbar/Searchbar.js';
import Filters from './filters/Filters.js';

const Navbar = ({subreddit}) => {
    return (
        <nav className='navbar'>
            <h1>Logo</h1>
            <SearchBar/>
            <Filters subreddits={subreddit}/>
        </nav>
    )
};

export default Navbar;