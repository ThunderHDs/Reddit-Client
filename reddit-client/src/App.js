import {lazy} from 'react';
import Navbar from './components/navbar/Navbar.js';
import { Routes, Route} from 'react-router-dom';
import PostList from './components/postlist/postlist.js';


const PostDetailPage = lazy(() => import('./pages/PostDetailPage/PostDetailPage.js'));

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
