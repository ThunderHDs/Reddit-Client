import './PostCard.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const PostCard = ({ id, title, author, imageUrl, content, comments, upvotes, downvotes, timeAgo }) => {

    const [votesUp, setVotesUp] = useState(false);
    const [votesDown, setVotesDown] = useState(false);
    const [currentVotes, setCurrentVotes] = useState(upvotes);

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
        <div className="PostCard">
            <Link to={`/post/${id}`} className="post-title-link">
                <h1>{title}</h1>
            </Link>
            <div className='Container'>
                <div className='votesContainer'>
                    <button onClick={handleVoteUp} className={`vote-button ${votesUp ? 'upvoted' : ''}`}>
                        ▲
                    </button>
                    <h1>{currentVotes}</h1>
                    <button onClick={handleVoteDown} className={`vote-button ${votesDown ? 'downvoted' : ''}`}>
                        ▼
                    </button>
                </div>
                <div className='contentContainer'>
                    <img src={imageUrl} alt={title}/>
                    <p>{content}</p>
                    <div className='buttonContainer'>
                        <h4>Author {author}</h4>
                        <h4>{timeAgo}</h4>
                        <button>Comments {comments}</button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default PostCard;