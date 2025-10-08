//import './Filters.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setSelectedSubreddit} from "../../../features/feed/feedSlice";

const Filters = ({subreddits}) => {
    const dispatch = useDispatch();
    //State to open or close the dropdown menu
    const [isOpen, setIsOpen] = useState(false);

    const activeSubreddit = useSelector((state) => state.feed.selectedSubreddit);

    // Remove "r/" from the subreddit name
    const displaySubreddit = activeSubreddit.replace(/^r\//, '');

    const handleFilterClick = (subreddit) => {
        const newSubreddit = `r/${subreddit}`;
        dispatch(setSelectedSubreddit(newSubreddit));
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} 
                className="bg-white rounded-full px-4 py-2 text-base border border-gray-300 hover:bg-blue-50 transition max-w-[120px] truncate shadow"
            >
                {displaySubreddit}
            </button>
            {isOpen && (//If it's true, then open the menu
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-lg border border-gray-200 z-50">
                    {subreddits.map((subreddit) => (
                    <button
                        key={subreddit}
                        onClick={()=> handleFilterClick(subreddit)}
                        className={`block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-700 truncate ${
                                activeSubreddit === `r/${subreddit}` ? 'font-bold text-blue-600' : ''
                            }`}
                        >
                            {subreddit}
                    </button>
                    ))}
                </div>
            )}
        </div>
    )
};

export default Filters;