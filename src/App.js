import React, {useEffect} from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Q1_Q2_Q3 from "./Components/Q1";
import Q4 from "./Components/Q4";
import Q6 from "./Components/Q6";
import Q7 from "./Components/Q7";
import Q8 from "./Components/Q8";
import Q9 from "./Components/Q9";
import Q10 from "./Components/Q10";
import Q11 from "./Components/Q11";
import Q12 from "./Components/Q12";
import Q13 from "./Components/Q13";
import Q14 from "./Components/Q14";
import Q15 from "./Components/Q15";
import FiltersExample from "./Components/Q5 Components/FiltersExample";
import ServicesExample from "./Components/Q5 Components/ServicesExample";
import HttpMethodsExample from "./Components/Q5 Components/HttpMethodsExample";
import TextTransformExample from "./Components/Q5 Components/TextTransformExample";
import { Link, useLocation } from 'react-router-dom';

const Q5 = () => {
  let location = useLocation();
    useEffect(() => {
        //console.log(location)
    }, [location]);
  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{backgroundColor:'red', display:'flex', flexDirection:'row', height:'50px', width:'80vw'}}>
        <strong>Links</strong>
        <Link className={`${location.pathname === "/Q5/FiltersExample" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q5/FiltersExample" style={{fontSize:'15px'}}>Filters Example</Link>

        <Link className={`${location.pathname === "/Q5/ServicesExample" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q5/ServicesExample" style={{fontSize:'15px'}}>Services Example</Link>
        
        <Link className={`${location.pathname === "/Q5/HttpMethodsExample" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q5/HttpMethodsExample" style={{fontSize:'15px'}}>Http Methods Example</Link>
        
        <Link className={`${location.pathname === "/Q5/TextTransformExample" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q5/TextTransformExample" style={{fontSize:'15px'}}>Text Transform Example</Link>
      </div>
      <Routes>
        <Route path="FiltersExample" element={<FiltersExample />} />
        <Route path="ServicesExample" element={<ServicesExample />} />
        <Route path="HttpMethodsExample" element={<HttpMethodsExample />} />
        <Route path="TextTransformExample" element={<TextTransformExample />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Q1_Q2_Q3" element={<Q1_Q2_Q3 />} />
          <Route path="/Q4" element={<Q4 />} />
          <Route path="/Q5/*" element={<Q5 />} />
          <Route path="/Q6" element={<Q6 />} />
          <Route path="/Q7" element={<Q7 />} />
          <Route path="/Q8" element={<Q8 />} />
          <Route path="/Q9" element={<Q9 />} />
          <Route path="/Q10" element={<Q10 />} />
          <Route path="/Q11" element={<Q11 />} />
          <Route path="/Q12" element={<Q12 />} />
          <Route path="/Q13" element={<Q13 />} />
          <Route path="/Q14" element={<Q14 />} />
          <Route path="/Q15" element={<Q15 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
