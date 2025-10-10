import { Link } from 'react-router-dom';
import { useState } from 'react';


const PostCard = ({ id, title, author, imageUrl, content, comments, upvotes, downvotes, timeAgo }) => {
    // State to manage votes
    const [votesUp, setVotesUp] = useState(false);
    const [votesDown, setVotesDown] = useState(false);
    const [currentVotes, setCurrentVotes] = useState(upvotes);
    // Handlers for voting
    const handleVoteUp = () => {
        if (votesUp) {
            setCurrentVotes(currentVotes - 1);
            setVotesUp(!votesUp);
        } else {
            if (votesDown) {
                setCurrentVotes(currentVotes + 2);
                setVotesUp(!votesUp);
                setVotesDown(!votesDown);
            } else {
            setCurrentVotes(currentVotes + 1);
            setVotesUp(!votesUp);
            };
        };
    };

    const handleVoteDown = () => {
        if (votesDown) {
            setCurrentVotes(currentVotes + 1);
            setVotesDown(!votesDown);
        } else {
            if (votesUp) {
                setCurrentVotes(currentVotes - 2);
                setVotesDown(!votesDown);
                setVotesUp(!votesUp);
            } else {
                setCurrentVotes(currentVotes - 1);
                setVotesDown(!votesDown);
            };
        };
    };

    return (
        <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-col gap-2">
            {/* Author and date */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span className="font-semibold">{author}</span>
                <span>•</span>
                <span>{timeAgo}</span>
            </div>
            {/* Title */}
            <Link to={`/post/${id}`} className="font-semibold text-lg text-gray-800 hover:underline break-words mb-2">
                {title}
            </Link>
            {/* Image */}
            {imageUrl && (
                <img src={imageUrl} alt={title} className="max-w-full rounded-lg mx-auto my-2" />
            )}
            {/* Content  */}
            {content && (
                <div className="text-gray-700 break-words mb-2">{content}</div>
            )}
            {/* Votes and comments */}
            <div className="flex justify-between items-center mt-2">
                <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition font-semibold
                        ${
                            votesUp
                                ? 'bg-orange-600 text-white'
                                : votesDown
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-100 text-gray-700'
                        }`}
                >
                    <button
                        onClick={handleVoteUp}
                        className="focus:outline-none"
                        aria-label="Upvote"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${votesUp ? 'text-white' : 'text-gray-500'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                    <span className="font-semibold text-base">{currentVotes}</span>
                    <button
                        onClick={handleVoteDown}
                        className="focus:outline-none"
                        aria-label="Downvote"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${votesDown ? 'text-white' : 'text-gray-500'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600">
                    💬 {comments}
                </button>
            </div>
        </div>
    );
};

export default PostCard;