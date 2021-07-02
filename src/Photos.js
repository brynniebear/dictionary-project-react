import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props);
  if (props.photoDetails) {
  return (
    <div className="Photos">
      <div className="row">
        {props.photoDetails.map(function (photo, index) {
          return (
          <div className="col-3" key={index}>
            <a href={photo.src.original} target="_blank" rel="noreferrer">
              <img src={photo.src.tiny} alt={props.photoAlt}/>
            </a>
          </div>);
        })}
      </div>
    </div>);
  } else {
    return null;
  }
}