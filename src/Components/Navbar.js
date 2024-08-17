import React, { useEffect, useState} from "react";
import { Link, useLocation,} from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      //console.log('width =', window.innerWidth);
      if (window.innerWidth > 1492) {
        setmobileMenu("none");
      } 
    };
  
    // Set initial state
    handleResize();
  
    // Add event listener
    window.addEventListener('resize', handleResize);
  
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [location]);
  

  const [mobileMenu, setmobileMenu] =useState("none");
  const handleMobileMenu = () =>{
    //console.log("menu changed")
    if(mobileMenu==="none"){
    setmobileMenu("flex")}
    else{setmobileMenu("none")}
  }
  
  return (
    <>
    {/*mobileNav*/}
      
        
      
      <div className="Navbar" style={{ }}>
      <h3>Jalal Assingment</h3>
              
        <Link
          className={`${
            location.pathname === "/Home" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Home"
        >
          Home
        </Link>
        <Link
          className={`${
            location.pathname === "/Q1_Q2_Q3" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q1_Q2_Q3"
        >
          Question 1 2 3
        </Link>
        <Link
          className={`${
            location.pathname === "/Q4" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q4"
        >
          Question 4
        </Link>
        <Link
          className={`${
            location.pathname === "/Q5" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q5"
        >
          Question 5
        </Link>
        <Link
          className={`${
            location.pathname === "/Q6" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q6"
        >
          Question 6
        </Link>
        <Link
          className={`${
            location.pathname === "/Q7" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q7"
        >
          Question 7
        </Link>
        <Link
          className={`${
            location.pathname === "/Q8" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q8"
        >
          Question 8
        </Link>
        <Link
          className={`${
            location.pathname === "/Q9" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q9"
        >
          Question 9
        </Link>
        <Link
          className={`${
            location.pathname === "/Q10" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q10"
        >
          Question 10
        </Link>
        <Link
          className={`${
            location.pathname === "/Q11" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q11"
        >
          Question 11
        </Link>
        <Link
          className={`${
            location.pathname === "/Q12" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q12"
        >
          Question 12
        </Link>
        <Link
          className={`${
            location.pathname === "/Q13" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q13"
        >
          Question 13
        </Link>
        <Link
          className={`${
            location.pathname === "/Q14" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q14"
        >
          Question 14
        </Link>
        <Link
          className={`${
            location.pathname === "/Q15" ? "ActivePage hideonMobile" : "InActivePage hideonMobile"
          }`}
          aria-current="page"
          to="/Q15"
        >
          Question 15
        </Link>

        <img className='hideonPC' src="./MenuButton.svg" style={{marginRight:'20px', marginLeft:'auto'}} onClick={handleMobileMenu}/>
      
      <div className="MobileNavbar hideonPC" style={{ display:mobileMenu}}>
      {/*<h3>Jalal Assingment</h3>*/}
              
        <Link
          className={`${
            location.pathname === "/Home" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Home" style={{margin:'2px'}}
        >
          Home
        </Link>
        <Link
          className={`${
            location.pathname === "/Q1_Q2_Q3" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q1_Q2_Q3" style={{margin:'2px'}}
        >
          Question 1 2 3
        </Link>
        <Link
          className={`${
            location.pathname === "/Q4" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q4" style={{margin:'2px'}}
        >
          Question 4
        </Link>
        <Link
          className={`${
            location.pathname === "/Q5" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q5" style={{margin:'2px'}}
        >
          Question 5
        </Link>
        <Link
          className={`${
            location.pathname === "/Q6" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q6" style={{margin:'2px'}}
        >
          Question 6
        </Link>
        <Link
          className={`${
            location.pathname === "/Q7" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q7" style={{margin:'2px'}}
        >
          Question 7
        </Link>
        <Link
          className={`${
            location.pathname === "/Q8" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q8" style={{margin:'2px'}}
        >
          Question 8
        </Link>
        <Link
          className={`${
            location.pathname === "/Q9" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q9" style={{margin:'2px'}}
        >
          Question 9
        </Link>
        <Link
          className={`${
            location.pathname === "/Q10" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q10" style={{margin:'2px'}}
        >
          Question 10
        </Link>
        <Link
          className={`${
            location.pathname === "/Q11" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q11" style={{margin:'2px'}}
        >
          Question 11
        </Link>
        <Link
          className={`${
            location.pathname === "/Q12" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q12" style={{margin:'2px'}}
        >
          Question 12
        </Link>
        <Link
          className={`${
            location.pathname === "/Q13" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q13" style={{margin:'2px'}}
        >
          Question 13
        </Link>
        <Link
          className={`${
            location.pathname === "/Q14" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q14" style={{margin:'2px'}}
        >
          Question 14
        </Link>
        <Link
          className={`${
            location.pathname === "/Q15" ? "ActivePage hideonPC" : "InActivePage hideonPC"
          }`}
          aria-current="page"
          to="/Q15" style={{margin:'2px'}}
        >
          Question 15
        </Link>
        </div>
        </div>
    </>
  );
};

export default Navbar;


