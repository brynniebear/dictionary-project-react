import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photoDetails) {
  return (
    <div className="Photos">
      <div className="row">
        {props.photoDetails.map(function (photo, index) {
          return (
          <div className="col-md-3" key={index}>
            <a href={photo.src.original} target="_blank" rel="noreferrer">
              <img className="img-fluid" src={photo.src.tiny} alt={props.photoAlt}/>
            </a>
          </div>);
        })}
      </div>
    </div>);
  } else {
    return null;
  }
}
