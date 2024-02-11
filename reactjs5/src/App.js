import Axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
const [randomExcuse, setRandomExcuse] = useState(null);

const fetchExcuse = (excuse) => {
  Axios.get('https://excuser-three.vercel.app/v1/excuse/' + excuse).then(
    (res) => {
      setRandomExcuse(res.data[0].excuse);
    }
  );
};

  return (
    <div className="App">
     <h1> Generate a Random Excuse </h1>
     <button onClick={() => fetchExcuse("party")}> party </button>
     <button onClick={() => fetchExcuse("family")}> family </button>
     <button onClick={() => fetchExcuse("office")}> office </button>
     <button onClick={() => fetchExcuse("college")}> college </button>
     <button onClick={() => fetchExcuse("gaming")}> gaming </button>
     <button onClick={() => fetchExcuse("unbelievable")}> unbelievable </button>
     <button onClick={() => fetchExcuse("funny")}> funny </button>
     <button onClick={() => fetchExcuse("children")}> children </button>

     <h2>{randomExcuse}</h2>
    </div>
  );
}

export default App;
