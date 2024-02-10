import './App.css';
import { useState } from "react";

function App() {
const [inputValue, setInputValue] = useState("");
const [showText, setShowText] = useState(true);
const [textColor, setTextColor] = useState("red");
const [count, setCount] = useState(0);

const handleChange = (event) => {
  setInputValue(event.target.value);
 };

 const showHideText = (event) => {
  setShowText(!showText);
 };

const increaseCount = () => {
 setCount(count + 1);
};

const decreaseCount = () => {
  setCount(count - 1);
};

const resetCount = () => {
  setCount(0);
};

  return (
    <div className="App">
      <button onClick = {showHideText}> Show or Hide Text </button>
      {showText && <h1> Show or Hide the text</h1>}
      
      <button onClick = {() => {
        setTextColor(textColor==="red" ? "green" : "red")}}> Change Color </button>
      <h1 style={{color: textColor}}> Change the Text Color </h1>

      <input type = "text" onChange = {handleChange}></input>
      {inputValue}

      {count}
      
      <button onClick = {increaseCount}> Increase </button>
      <button onClick = {decreaseCount}> Decrease </button>
      <button onClick = {resetCount}> Reset </button>
     
    </div>
  );
}

export default App;
