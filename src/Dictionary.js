import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState(null);
  

  function handleResponse(response) {
    console.log(response.data);
  }

  // documentation: https://dictionaryapi.dev/
  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${searchTerm}`);
  }

  return (
  <div className="Dictionary">
    <form onSubmit={Search}>
      <input type="search" autoFocus={true} placeholder="What does it mean?" onChange={handleSearchTerm} />
      <input type="submit" value="Find the definition" className="btn-dark"/>
    </form>
  </div>);
}