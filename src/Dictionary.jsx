import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";
const Dictionary = () => {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "41b39faeco43443c5c35d963td510b86";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Result results={results} />
    </div>
  );
};

export default Dictionary;
