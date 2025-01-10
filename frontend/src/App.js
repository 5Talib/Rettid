import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import AdSection from "./components/AdSection";

const backendUrl = "https://rettid-backend.onrender.com"

function App() {
  const [subreddit, setSubreddit] = useState("popular"); 
  const [sort, setSort] = useState("hot"); 
  const [posts, setPosts] = useState([]);
  const [after, setAfter] = useState(null); 
  const [limit, setLimit] = useState(10); 
  const [activeSort, setActiveSort] = useState("hot");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBackendError = (errorMessage) => {
    setError(errorMessage);
  };

  const handleCloseError = () => {
    setError(null);
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${backendUrl}/api/${subreddit}/${sort}`,
        {
          params: { limit, after },
        }
      );

      setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
      // console.log(response.data);
      setAfter(response.data.after); // Update the `after` token for the next page
    } catch (error) {
      console.error("Error fetching posts:", error.message);
      handleBackendError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPosts([]); 
    setAfter(null); 
    fetchPosts();
  }, [subreddit, sort]);

  return (
    <div className="container">
      <Navbar
        subreddit={subreddit}
        onSubredditChange={setSubreddit}
        setSort={setSort}
        setActiveSort={setActiveSort}
      />
      <div className="hero">
        <Sidebar />
        <Main
          subreddit={subreddit}
          onSortChange={setSort}
          posts={posts}
          onLoadMore={fetchPosts}
          loading={loading}
          after={after}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          error={error}
          handleCloseError={handleCloseError}
        />
        <AdSection />
      </div>
    </div>
  );
}

export default App;
