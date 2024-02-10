import './App.css';
import { useState } from "react";

function App() {
const [age, setAge] = useState(0);
const [inputValue, setInputValue] = useState("");
const [showText, setShowText] = useState(true);
const [textColor, setTextColor] = useState("red");

const increaseAge = () => {
 setAge(age+1);
};

const handleChange = (event) => {
  setInputValue(event.target.value);
 };

 const showHideText = (event) => {
  setShowText(!showText);
 };

  return (
    <div className="App">
      <button onClick = {showHideText}> Show or Hide Text </button>
      {showText && <h1> Show or Hide the text</h1>}
      
      <button onClick = {() => {
        setTextColor(textColor==="red" ? "green" : "red")}}
        >
           Change Color </button>
      <h1 style={{color: textColor}}> Change the Text Color </h1>

      {age}
      <button onClick = {increaseAge}> Increase Age </button>

      <input type = "text" onChange = {handleChange}></input>
      {inputValue}
    </div>
  );
}

export default App;
