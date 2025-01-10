import React from "react";
import "../styles/SidebarContent.css";
import SubredditTile from "./SubredditTile";

export default function SidebarContent({heading}) {
  return (
    <div className="sidebar-content">
      <div className="section-name">
        <div style={{ "color": "#21272a" }}>{heading}</div>
        <div style={{ "color": "rgb(194 194 200)" }}>All</div>
      </div>
      <div className="subreddit-list">
        <SubredditTile name={"r/funnymore"} newPosts={156} />
        <SubredditTile name={"r/breakingnews"} newPosts={12} />
        <SubredditTile name={"r/lovestory"} newPosts={0} />
        <SubredditTile name={"r/gamingfun"} newPosts={8} />
      </div>
    </div>
  );
}
