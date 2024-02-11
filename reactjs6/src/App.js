import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Info } from "./pages/Info";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Info" element={<Info />} />
          <Route path="*" element={<h3> error: not a valid page!</h3>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;