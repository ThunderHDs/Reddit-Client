//import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import PostCard from './components/postcard/PostCard.js';
import Navbar from './components/navbar/Navbar.js';
import { useGetFeedQuery } from './features/api/apiSlice.js';



function App() {
  
  //Including logic to show the filtered posts based on the searchterm
  const searchTerm = useSelector((state) => state.feed.searchTerm);
  const selectedSubreddit = useSelector((state) => state.feed.selectedSubreddit);
  
  //Calling the hook to obtain the data from API
  const { 
    data: posts = [],
    isLoading,
    isError,
  } = useGetFeedQuery(selectedSubreddit);


  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  const subredditsForFilter = ['popular', 'pics', 'programming', 'reactjs', 'gaming'];

  //Debugin temporal
  console.log("searchTerm",searchTerm);
  console.log("filteredPosts",filteredPosts);
  console.log("subreddits",selectedSubreddit);
  console.log("posts data",posts);
  console.log("is loading?", isLoading);
  console.log("is error?", isError);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div className="App">
      <div className='strangeContainer'></div>
      <Navbar subreddit={subredditsForFilter}/>
        <div className='postContainer'> 
          {filteredPosts.map((post) => (
            <PostCard key={post.id} {...post}/>
          ))}
        </div>
    </div>
  );
}

export default App;
