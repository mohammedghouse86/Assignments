import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Q1 from "./Components/Q1";
import Q13 from "./Components/Q13";
import Q14 from "./Components/Q14";
import Q15 from "./Components/Q15";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Q1" element={<Q1/>} />
          <Route path="/Q13" element={<Q13/>} />
          <Route path="/Q14" element={<Q14/>} />
          <Route path="/Q15" element={<Q15/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
