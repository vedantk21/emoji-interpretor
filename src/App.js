import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🚣": "Person Rowing Boat",
  "🗾": "Map of Japan",
  "🏔️": "Snow-Capped Mountain",
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
  "🏕️": "Camping",
  "🏖️": "Beach with Umbrella",
  "🏜️": "Desert",
  "🏝️": "Desert Island",
  "🏞️": "National Park",
  "🏟️": "Stadium",
  "🏛️": "Classical Building",
  "🏗️": "Building Construction"
};
export default function App() {
  var [meaning, setMeaning] = useState("");
  var emojisWeKnow = Object.keys(emojiDictionary);
  function emojiHandler(event) {
    var userInput = event.target.value;
    // console.log(event.target.value);
    var meaning = emojiDictionary[userInput];
    // console.log(meaning);

    if (meaning === undefined) {
      meaning =
        "We do not have this in our database yet, please try again later.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Out</h1>

      <input onChange={emojiHandler} />
      <div>
        <strong>Interpretation:</strong> {meaning}
      </div>
      <h4>Emojis in the database: </h4>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
