import React from "react";
import "../styles/Posts.css";
import UpIcon from "../assets/UpIcon";
import DownIcon from "../assets/DownIcon";
import MssgIcon from "../assets/MssgIcon";
import ShareIcon from "../assets/ShareIcon";
import MoreIcon from "../assets/MoreIcon";

export default function Posts({ post }) {
  const {
    thumbnail,
    title,
    author,
    ups,
    num_comments,
    created_utc,
    permalink,
    subreddit_name_prefixed,
  } = post.data;

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  function formatNumberToK(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  }

  // Convert the UTC timestamp to a readable date format
  const postDate = new Date(created_utc * 1000).toLocaleString("en-US", {
    dateStyle: "medium", 
    timeStyle: "short", 
  });

  const handleImgError = (event) => {
    // Set fallback image if original image fails to load
    event.target.src = "https://via.placeholder.com/100";
  };

  return (
    <div className="post">
      <div className="post-img">
        <img
          src={
            thumbnail.startsWith("http")
              ? thumbnail
              : "https://via.placeholder.com/100"
          }
          alt="thumbnail"
          width="100"
          onError={handleImgError}
        />
      </div>
      <div className="post-description">
        <div className="post-title">{truncateText(title, 100)}</div>
        <div className="post-footer">
          <div className="author">Posted by {author}</div>
          <div className="date">{postDate}</div>
        </div>
      </div>
      <div className="post-influence">
        <div className="post-influence-buttons">
          <MssgIcon height={20} width={20} />
          <div>{formatNumberToK(num_comments)} Comments</div>
        </div>
        <div className="post-influence-buttons">
          <ShareIcon />
          <div>Share</div>
        </div>
        <div className="post-influence-buttons">
          <MoreIcon />
          <div>More</div>
        </div>
      </div>
      <div className="upvotes">
        <div className="svg">
          <UpIcon />
        </div>
        <div className="upvote-count">{formatNumberToK(ups)}</div>
        <div className="svg">
          <DownIcon color={"red"} />
        </div>
      </div>
    </div>
  );
}
