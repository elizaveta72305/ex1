import React from "react";

const HeaderComponent = (props) => {
    return (
      <header>
        <img src={props.imageUrl} alt={props.title} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </header>
    );
  };
  
  export default HeaderComponent;