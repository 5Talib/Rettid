import React from "react";
import "../styles/Error.css";

const Error = ({ message, onClose }) => {
  return (
    <div className="error-message">
      <div className="error-content">
        <p>Something went wrong. Please try again later</p>
        <button onClick={onClose} className="close-btn">
          X
        </button>
      </div>
    </div>
  );
};

export default Error;
