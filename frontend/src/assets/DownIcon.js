import React from "react";

export default function DownIcon({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      id="down"
    >
      <path
        fill={color}
        d="M5.305 8.306a1.046 1.046 0 0 0 0 1.478l5.904 5.91c.228.228.536.33.834.302.27 0 .539-.101.744-.306l5.907-5.907a1.044 1.044 0 1 0-1.477-1.477l-5.22 5.22-5.216-5.22a1.043 1.043 0 0 0-1.476 0Z"
      ></path>
    </svg>
  );
}