import SearchBar from './searchbar/Searchbar.js';
import Filters from './filters/Filters.js';
import { Link } from 'react-router-dom';

const Navbar = ({subreddit}) => {
    return (
        <nav className="flex items-center justify-between h-16 w-full px-6 bg-white shadow fixed top-0 left-0 z-50">
            {/* Logo to the left */}
            <div className="flex items-center gap-2 flex-shrink-0">
                <Link to="/" className="font-bold text-xl text-orange-600">reddit</Link>
            </div>
            {/* Central container with Searchbar and buttons */}
            <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-0 bg-gray-100 rounded-full px-4 py-2 shadow max-w-2xl">
                    <SearchBar />
                    <Filters subreddits={subreddit} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;