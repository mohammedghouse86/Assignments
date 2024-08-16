import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();
    useEffect(() => {
        //console.log(location)
    }, [location]);
  return (
    <div className='Navbar' >
      <h3>Jalal Assingment</h3>
      <Link className={`${location.pathname === "/Home" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Home">Home</Link>
      <Link className={`${location.pathname === "/Q1_Q2_Q3" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q1_Q2_Q3">Question 1 2 3</Link>
      <Link className={`${location.pathname === "/Q4" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q4">Question 4</Link>
      <Link className={`${location.pathname === "/Q5" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q5">Question 5</Link>
      <Link className={`${location.pathname === "/Q6" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q6">Question 6</Link>
      <Link className={`${location.pathname === "/Q7" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q7">Question 7</Link>
      <Link className={`${location.pathname === "/Q8" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q8">Question 8</Link>
      <Link className={`${location.pathname === "/Q9" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q9">Question 9</Link>
      <Link className={`${location.pathname === "/Q10" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q10">Question 10</Link>
      <Link className={`${location.pathname === "/Q11" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q11">Question 11</Link>
      <Link className={`${location.pathname === "/Q12" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q12">Question 12</Link>
      <Link className={`${location.pathname === "/Q13" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q13">Question 13</Link>
      <Link className={`${location.pathname === "/Q14" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q14">Question 14</Link>
      <Link className={`${location.pathname === "/Q15" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q15">Question 15</Link>
    </div>
  )
}

export default Navbar
