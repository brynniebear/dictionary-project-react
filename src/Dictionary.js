import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [searchTerm, setSearchTerm] = useState(props.defaultTerm);
  const [definitionDetails, setDefinitionDetails] = useState(null);
  const [loaded, setLoaded] = useState(false);
  

  function handleResponse(response) {
    setDefinitionDetails(response.data);
  }

  // documentation: https://dictionaryapi.dev/
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit (event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function load() {
    setLoaded(true);
    search(searchTerm);
  }

  if (loaded) {
  return (
  <div className="Dictionary">
    <form onSubmit={handleSubmit}>
      <input type="search" autoFocus={true} placeholder="What does it mean?" onChange={handleChange} />
      <input type="submit" value="Find the definition" className="btn-dark"/>
    </form>
    <Results details={definitionDetails} />
  </div>);
  } else {
    load();
  }
}