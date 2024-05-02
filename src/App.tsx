import { useState } from "react";
import words from "./data/wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  console.log(wordToGuess);

  return (
    <>
      <h1>hello, world</h1>
    </>
  );
}

export default App;
