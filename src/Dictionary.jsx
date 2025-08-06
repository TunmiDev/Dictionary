import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
const Dictionary = () => {
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);
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
    </div>
  );
};

export default Dictionary;
