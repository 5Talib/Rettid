import React, { useState } from "react";
import "../styles/Main.css";
import Posts from "./Posts";
import {PulseLoader} from "react-spinners"
import Error from "./Error";

export default function Main({
  onSortChange,
  posts,
  onLoadMore,
  loading,
  after,
  subreddit,
  setActiveSort,
  activeSort,
  error,
  handleCloseError,
}) {

    const handleSortChange = (sort) => {
      setActiveSort(sort); 
      onSortChange(sort);  
    };

  return (
    <div className="main">
      <div className="heading">
        <div className="title">{subreddit}</div>
        <div className="options">
        {["hot", "new", "controversial", "rising", "top"].map((sort) => (
            <div
              key={sort}
              className={`option ${activeSort === sort ? "active" : ""}`}
              onClick={() => handleSortChange(sort)}
            >
              {sort.charAt(0).toUpperCase() + sort.slice(1)}
            </div>
        ))}
        </div>
      </div>
      {error && <Error message={error} onClose={handleCloseError} />}
      {posts.map((post, index) => (
        <Posts key={`${post.data.id}-${index}`} post={post} />
      ))}

      <div className="load-more">
        {loading ? (
          <PulseLoader color="rgb(249, 52, 52)" className="loader" />
        ) : after ? (
          <button onClick={onLoadMore}>Load More</button>
        ) : (
          <p>No more posts</p>
        )}
      </div>
    </div>
  );
}
