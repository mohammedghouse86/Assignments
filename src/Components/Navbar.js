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
      <Link className={`${location.pathname === "/Q1" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q1">Question 1</Link>
      <Link className={`${location.pathname === "/Q13" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q13">Question 13</Link>
      <Link className={`${location.pathname === "/Q14" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q14">Question 14</Link>
      <Link className={`${location.pathname === "/Q15" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Q15">Question 15</Link>
    </div>
  )
}

export default Navbar
