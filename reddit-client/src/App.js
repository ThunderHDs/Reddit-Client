//import logo from './logo.svg';
//import './App.css';
import { useSelector } from 'react-redux';
import PostCard from './components/postcard/PostCard.js';
import Navbar from './components/navbar/Navbar.js';
import { useGetFeedQuery } from './features/api/apiSlice.js';
import { Routes, Route} from 'react-router-dom';
import PostDetailPage from './pages/PostDetailPage/PostDetailPage.js';


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


  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Debugin temporal
  /*
  console.log("searchTerm",searchTerm);
  console.log("filteredPosts",filteredPosts);
  console.log("subreddits",selectedSubreddit);
  console.log("posts data",posts);
  console.log("is loading?", isLoading);
  console.log("is error?", isError);*/

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
}

function App() {
  
  const subredditsForFilter = ['popular', 'pics', 'programming', 'reactjs', 'gaming'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 w-full h-16 bg-white/70 backdrop-blur z-40"></div>
      <Navbar subreddit={subredditsForFilter}/>
      <Routes>
        <Route path='/' element={<PostList/>}/>
        <Route path='/post/:postId' element={<PostDetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
