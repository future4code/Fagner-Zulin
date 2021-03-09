import React from "react";
import "./CardPequeno.css";

export default function CardPequeno(props) {
  return (
    <div className="smallcard-container">
      <img src={props.img} />
      <p>
        <strong>{props.tipoInfo + ": "}</strong>
        {props.info}
      </p>
    </div>
  );
}
