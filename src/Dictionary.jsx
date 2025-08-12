import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePixelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // Dictionary API
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // SheCodes Images API
    let pixelsApiKey = "41b39faeco43443c5c35d963td510b86";
    let pixelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pixelsApiKey}`;
    axios.get(pixelsApiUrl).then(handlePixelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Results results={results} />
        <section className="photos">
          {photos.map((photo, index) => (
            <img key={index} src={photo.src.landscape} alt={keyword} />
          ))}
        </section>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
