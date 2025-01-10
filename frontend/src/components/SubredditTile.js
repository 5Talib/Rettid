import React from "react";
import "../styles/SubredditTile.css";

export default function SubredditTile({name, newPosts}) {
  return (
    <div className="tile">
      <div className="subreddit-name">
        <div>
          <img
            alt="name"
            src="https://styles.redditmedia.com/t5_2t8ga/styles/communityIcon_xy82jtlunw8e1.jpg?format=pjpg&s=e6c6085d542c6a27e55006d5f4abcfb0ab6ea867"
            width="25"
            height="25"
          />
        </div>
        <div>{name}</div>
      </div>
      {newPosts!==0 && <div className="new-post">{newPosts}</div>}
    </div>
  );
}
