//import './PostDetailPage.css';
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
        return <div  className="text-center py-8 text-gray-500">Loading post details...</div>;
    }

    if (isError) {
        return <div  className="text-center py-8 text-red-500">Error loading post.</div>;
    }

    const { post, comments } = data;

    return (
        <div className="max-w-2xl mx-auto pt-24 px-4">
            <Link to={`/`} className="inline-block mb-4 text-blue-600 hover:underline font-medium">
                &larr; Volver
            </Link>

            <div className="bg-white rounded-xl shadow p-6 mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h1>
                <p className="text-sm text-gray-500 mb-4">by {post.author}</p>
                {post.imageUrl && post.imageUrl.match(/\.(jpeg|jpg|gif|png)$/) && (
                    <img src={post.imageUrl} alt={post.title} className="max-w-full rounded-lg mx-auto mb-4" />
                )}
                {post.content && <p>{post.content}</p>}
            </div>

            <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Comentarios</h2>
                {comments.length === 0 && (
                    <p className="text-gray-500">No hay comentarios aún.</p>
                )}
                {comments.map(comment => (
                    <div key={comment.id} className="mb-4 border-b border-gray-100 pb-4 last:border-b-0">
                        <p className="font-semibold text-gray-700 mb-1">{comment.author}</p>
                        <p className="text-gray-600">{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostDetailPage;