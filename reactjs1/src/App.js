import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
     <Employee salary={1000} position="Candidate" company="X" />
     <Employee salary={6000} position="Junior" company="Y" />
     <Employee salary={10000} position="Manager" company="Z" />
    </div>
  );
}

const Employee = (probs) => {
  return (
    <div >
      <h1>{probs.salary}</h1>
      <h1>{probs.position}</h1>
      <h1>{probs.company}</h1>
   </div>
  );
}

export default App;
