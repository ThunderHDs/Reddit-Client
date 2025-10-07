import React from 'react';
import './PostDetailPage.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetPostDetailsQuery } from '../../features/api/apiSlice.js';

const PostDetailPage = () => {
    const { postId } = useParams();

    const {
        data,
        isLoading,
        isError
    } = useGetPostDetailsQuery(postId);

    if (isLoading) {
        return <div>Loading post details...</div>;
    }

    if (isError) {
        return <div>Error loading post.</div>;
    }

    const { post, comments } = data;

    return (
        <div>
            <Link to={`/`} className="back-link">
                &larr; Volver
            </Link>

            <div className='post-content'>
                <h1>{post.title}</h1>
                <p className='post-author'>by {post.author}</p>
                {post.imageUrl && post.imageUrl.match(/\.(jpeg|jpg|gif|png)$/) && (
                    <img src={post.imageUrl} alt={post.title} className="post-image" />
                )}
                {post.content && <p>{post.content}</p>}
            </div>

            <div className="comments-section">
                <h2>Comentarios</h2>
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <p className="comment-author">{comment.author}</p>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostDetailPage;