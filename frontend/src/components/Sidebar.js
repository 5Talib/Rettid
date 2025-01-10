import React from "react";
import DownIcon from "../assets/DownIcon";
import "../styles/Sidebar.css";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="filter">
        <div>Filter By</div>
        <div className="svg">
          <DownIcon color={"#5c6d74"} />
        </div>
      </div>
      <SidebarContent heading={"FAVOURITES"}/>
      <SidebarContent heading={"REDDIT FEEDS"}/>
      <SidebarContent heading={"COMMUNITY"}/>
    </div>
  );
}
