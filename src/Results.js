import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {

  if (props.details) {
    return (
    <div className="Results">
      <h2>{props.details[0].word}</h2>
      <Phonetics phoneticDetails={props.details[0].phonetics}/>
      {props.details[0].meanings.map(function(meaning, index) {
        return <div key={index}>
          <Meaning meaning={meaning} />
          </div>
      })
      }
    </div>);
  } else {
    return null;
  }
}