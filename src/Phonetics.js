import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetics">
      {props.phoneticDetails.map(function (phonetics, index){
        return (
          <div key={index}>
            <div className="phonetic-text">{phonetics.text}</div>
            <a href={phonetics.audio} target="_blank" rel="noreferrer">Listen</a>
          </div>
        );
      })}
    </div>
  );
}