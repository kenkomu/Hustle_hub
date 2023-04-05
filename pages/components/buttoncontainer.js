import React from "react";

const BackButton = (props) => {
  return (
    <img src={props.src} alt="Back Button" onClick={() => window.history.back()} />
  );
}

export default BackButton;