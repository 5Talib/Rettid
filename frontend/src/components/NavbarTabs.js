import React from "react";
import "../styles/NavbarTabs.css";

export default function NavbarTabs({ Icon, TabName }) {
  return (
    <div className="tab">
      <div className="svg">
        <Icon />
      </div>
      <div>{TabName}</div>
    </div>
  );
}
