import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {

  return (
  <div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(meaning, index){
      return (
      <div key={index}>
        <div className="definition">{meaning.definition}</div>
        <div className="example"><em>{meaning.example}</em></div>
        <Synonyms synonyms={meaning.synonyms} />
      </div>);
    })}

  </div>);
}