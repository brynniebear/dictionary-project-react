import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("contact");
  const [definitionDetails, setDefinitionDetails] = useState(null);
  

  function handleResponse(response) {
    setDefinitionDetails(response.data);
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  // documentation: https://dictionaryapi.dev/
  function search (event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
  <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" autoFocus={true} placeholder="What does it mean?" onChange={handleChange} />
      <input type="submit" value="Find the definition" className="btn-dark"/>
    </form>
    <Results details={definitionDetails} />
  </div>);
}