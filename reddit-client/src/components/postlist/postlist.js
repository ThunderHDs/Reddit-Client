import { useSelector } from 'react-redux';
import PostCard from '../postcard/PostCard.js';
import { useGetFeedQuery } from '../../features/api/apiSlice.js';


const PostList = () => {
  //Including logic to show the filtered posts based on the searchterm
  const searchTerm = useSelector((state) => state.feed.searchTerm);
  const selectedSubreddit = useSelector((state) => state.feed.selectedSubreddit);
  
  //Calling the hook to obtain the data from API
  const { 
    data: posts = [],
    isLoading,
    isError,
  } = useGetFeedQuery(selectedSubreddit);

  //Filtering posts based on the search term
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Handling loading and error states
  if (isLoading) {
    return <div  className="text-center py-8 text-gray-500">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center py-8 text-red-500">Error: {isError.message}</div>;
  }

  return(
    <div className="max-w-3xl mx-auto pt-20 px-2"> 
      {filteredPosts.map((post) => (
        <PostCard key={post.id} {...post}/>
      ))}
    </div>
  )
};

export default PostList;