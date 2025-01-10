import React from "react";
import RedditLogo from "../assets/RedditLogo";
import "../styles/AdOnReddit.css";

export default function AdOnReddit() {
  return (
    <div className="reddit-ad">
      <RedditLogo />
      <div>Advertise on Reddit</div>
      <div className="get-started">Get Started</div>
    </div>
  );
}
