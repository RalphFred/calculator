import MidBar from "./components/MidBar";
import Screen from "./components/Screen";
import Keyboard from "./components/Keyboard";

import { useState } from "react";

export default function App() {

  const [currentInput, setCurrentInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');
  const [result, setRsult] = useState('');

  const handleButtonClick = (buttonContent) => {
    console.log(buttonContent);
  }

  const handleEqualsClick = () => {
    console.log("Equals")
  }

  const handleClearClick = () => {
    console.log("Clear")
  }

  return (
    <div className="">
      <Screen />
      <MidBar />
      <Keyboard 
        onButtonClick={handleButtonClick}
        onEqualsClick={handleEqualsClick}
        onClearClick={handleClearClick}
      />
    </div>
  );
}
