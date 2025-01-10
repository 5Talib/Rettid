import React, { useState } from "react";
import RedditLogo from "../assets/RedditLogo";
import "../styles/Navbar.css";
import SunIcon from "../assets/SunIcon";
import SearchIcon from "../assets/SearchIcon";
import MssgIcon from "../assets/MssgIcon";
import MailIcon from "../assets/MailIcon";
import UserIcon from "../assets/UserIcon";

export default function Navbar({ subreddit, onSubredditChange, setSort, setActiveSort }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInput = (event) => {
    return setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      onSubredditChange(searchQuery.trim()); 
      setSort("hot");
      setActiveSort("hot");
    }
    setSearchQuery("");
  };
  return (
    <div className="navbar">
      <div className="left-nav">
        <SunIcon />
        <RedditLogo />
      </div>
      <div className="middle-nav">
        <div className="tabs">Home</div>
        <div className="tabs">Popular</div>
        <div className="tabs">All</div>
        <div className="search-bar">
          <div className="svg">
            <SearchIcon />
          </div>
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              className="search-input"
              type="text"
              placeholder="Find Community"
              id="search"
              value={searchQuery}
              onChange={handleInput}
            />
          </form>
        </div>
        <div className="create-post">Create Post</div>
      </div>
      <div className="right-nav">
        <div className="svg"><MssgIcon width={30} height={30} /></div>
        <div className="svg"><MailIcon /></div>
        <div className="svg"><UserIcon /></div>
      </div>
    </div>
  );
}
