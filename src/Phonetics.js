import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phoneticDetails.map(function (phonetics, index){
        return (
          <div key={index}>
            <span className="phonetic-text">{phonetics.text}</span>
            <figure className="phonetic-audio">
              <audio controls src={phonetics.audio}><p>Your browser doesn't support HTML5 audio. Here is a 
                <a href={phonetics.audio}>link to the audio</a> instead.</p></audio>          
            </figure>  
          </div>
        );
      })}
    </div>
  );
}