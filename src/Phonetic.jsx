import React from "react";
import "./Phonetic.css";
import { FaVolumeUp } from "react-icons/fa"; // speaker icon from react-icons

const Phonetic = (props) => {
  function playAudio() {
    if (props.phonetic.audio) {
      const audio = new Audio(props.phonetic.audio);
      audio.play();
    }
  }

  return (
    <div className="phonetic">
      <button
        onClick={playAudio}
        className="listen-button"
        aria-label={`Play pronunciation for ${props.phonetic.text}`}
      >
        <FaVolumeUp size={20} /> {/* Speaker icon */}
      </button>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
};

export default Phonetic;
