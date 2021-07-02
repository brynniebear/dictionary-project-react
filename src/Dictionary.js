import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [searchTerm, setSearchTerm] = useState(props.defaultTerm);
  const [definitionDetails, setDefinitionDetails] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  

  function handleDictionaryResponse(response) {
    setDefinitionDetails(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    // documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey = `563492ad6f9170000100000111208a7f1ede4d34a72cd516d3eeaef7`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=12`;
    let headers = { "Authorization": `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
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
      <input className="type-search" type="search" autoFocus={true} placeholder="What does it mean?" onChange={handleChange} />
      <input className="btn-dark submit-button" type="submit" value="Find the definition"/>
    </form>
    <Results details={definitionDetails} />
    <Photos photoDetails={photos} photoAlt={searchTerm}/>
  </div>);
  } else {
    load();
  }
}