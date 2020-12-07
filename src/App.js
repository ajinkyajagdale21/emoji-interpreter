import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐶": "Unconditional Loyality & attention(Dog Face)",
  "🐱":
    "They symbolize wisdom, luck, individuality as well as affection and tenderness(Cat Face)",
  "🐭":
    "An unremarkable, shy and modest person is referred to as a mousy person(Mouse face)",
  "🐹": "I like you! (Hamster Face)",
  "🐰": "family spirit (Bunny Face)",
  "🐻": " Is considered cuddly.(Bear)",
  "🐼":
    "when You find something totally cute or as an expression of affection within friendships(Panda)",
  "🐨":
    "The koala stands for cuteness or amiability and awakens protective instincts(Koala)",
  "🐯":
    "The magnificent animal stands for strength, felinity and appetite(Tiger Face)",
  "🐵": "Can also be used in a playful way, while fooling around(Monkey Face)",
  "🙈": "ignoring bad things(See No Evil Monkey)"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, meaningFunction] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have that on our database";
    }

    meaningFunction(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    meaningFunction(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt</h1>

      <input onChange={emojiInputHandler}></input>

      <h2>Meaning: {meaning}</h2>

      <h3>Emojis we know</h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
            {""}
          </span>
        );
      })}
    </div>
  );
}
