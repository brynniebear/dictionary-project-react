import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState(null);

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${searchTerm}`);
  }

  return (
  <div className="Dictionary">
    <form onSubmit={Search}>
      <input type="search" autoFocus={true} placeholder="What does it mean?" onChange={handleSearchTerm} />
      <input type="submit" value="Find the definition" />
    </form>
  </div>);
}