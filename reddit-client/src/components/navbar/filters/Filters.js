import './Filters.css';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setSelectedSubreddit} from "../../../features/feed/feedSlice";

const Filters = ({subreddits}) => {
    const dispatch = useDispatch();
    //State to open or close the dropdown menu
    const [isOpen, setIsOpen] = useState(false);

    const activeSubreddit = useSelector((state) => state.feed.selectedSubreddit);

    const handleFilterClick = (subreddit) => {
        const newSubreddit = `r/${subreddit}`;
        dispatch(setSelectedSubreddit(newSubreddit));
        setIsOpen(false);
    };

    return (
        <div className="filters-dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="filters-button">
                {activeSubreddit}
                {console.log("button", activeSubreddit)}
                </button> {/*Button for dropdown, showing the actual subreddit*/}
            {isOpen && (//If it's true, then open the menu
                <div className="filters-list">
                    {subreddits.map((subreddit) => (
                    <button
                        key={subreddit}
                        onClick={()=> handleFilterClick(subreddit)}
                        className={`filter-item-button ${activeSubreddit === subreddit ? 'active' : ''}`}
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