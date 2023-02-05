
import React from "react";


const CardComponent = (props) => {
    return (
      <div>
        <img src={props.imageUrl} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    );
  };
  
  export default CardComponent;