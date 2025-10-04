//import logo from './logo.svg';
import './App.css';
import PostCard from './components/postcard/PostCard.js';
import Navbar from './components/navbar/Navbar.js';

const posts =[
  {
    id: "1",
    title: "Getting paid on the Wall of Death in Rajkot, India",
    author: "mohitsman",
    subreddit: "r/nextfuckinglevel",
    timeAgo: "7 hours ago",
    upvotes: 35800,
    comments: 690,
    imageUrl: "https://images.unsplash.com/photo-1681679260852-9e3655858c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjB3YWxsfGVufDF8fHx8MTc1OTM0MzExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "This incredible stunt performer shows amazing skill and courage while working on the Wall of Death in India."
  },
  {
    id: "2",
    title: "California skies. A month until my due date and my world is red.",
    author: "sunset_mama",
    subreddit: "r/pics",
    timeAgo: "12 hours ago",
    upvotes: 12800,
    comments: 234,
    imageUrl: "https://images.unsplash.com/photo-1618133269015-47769f465d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBza3klMjBzdW5zZXR8ZW58MXx8fHwxNzU5MzQzMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "The wildfire smoke has created these surreal red skies. Due in a month and watching this from my window."
  },
  {
    id: "3",
    title: "Just finished my first full-stack application after 6 months of learning",
    author: "newbie_dev",
    subreddit: "r/programming",
    timeAgo: "1 day ago",
    upvotes: 8900,
    comments: 156,
    imageUrl: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU5MzA0MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "Started with zero programming knowledge, now I've built a React app with Node.js backend. The journey was challenging but worth it!"
  },
  {
    id: "4",
    title: "Hiked 15 miles to capture this sunrise in the Rockies",
    author: "mountain_explorer",
    subreddit: "r/EarthPorn",
    timeAgo: "2 days ago",
    upvotes: 45200,
    comments: 892,
    imageUrl: "https://images.unsplash.com/photo-1498855926480-d98e83099315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzU5MjMxODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "Started the hike at 3 AM to catch this incredible sunrise. The early wake-up was absolutely worth it for this view."
  },
  {
    id: "5",
    title: "My 90-year-old grandmother just learned to use a smartphone",
    author: "proudgrandkid",
    subreddit: "r/MadeMeSmile",
    timeAgo: "3 days ago",
    upvotes: 28500,
    comments: 445,
    content: "She called me today using video chat for the first time. Seeing her face light up when she realized she could see me was priceless. Technology bringing families together across generations."
  },
  {
    id: "6",
    title: "Local bakery gives free bread to anyone who needs it",
    author: "community_hero",
    subreddit: "r/HumansBeingBros",
    timeAgo: "4 days ago",
    upvotes: 67800,
    comments: 1234,
    content: "This small business in my neighborhood has a 'take what you need' basket outside every day. During tough times, they've been feeding families who are struggling."
  }
];

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className='postContainer'> 
          {posts.map((post) => (
            <PostCard title={post.title} author={post.author} imageUrl={post.imageUrl} content={post.content} comments={post.comments} upvotes={post.upvotes} timeAgo={post.timeAgo}/>
          ))}
        </div>
    </div>
  );
}

export default App;
