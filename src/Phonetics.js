import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phoneticDetails.map(function (phonetics, index){
        return (
          <div key={index}>
            <a href={phonetics.audio} target="_blank" rel="noreferrer">Listen</a>            
            <span className="phonetic-text">{phonetics.text}</span>
          </div>
        );
      })}
    </div>
  );
}