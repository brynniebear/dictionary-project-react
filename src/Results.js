import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  console.log(props);
  if (props.details) {
    return (
    <div className="Results">
      <h2>{props.details[0].word}</h2>
       <Phonetics phoneticDetails={props.details[0].phonetics}/>
      {props.details.map(function (definition, index) {
      return (
      <div key={index}>
        {definition.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>);
        })}
      </div>);
      })}

    </div>);
  } else {
    return null;
  }
}