// AngularJS Elements and Validations
// 1. Include different form elements into your program like textbox, selectbox, checkbox
// and radiobutton.
// 2. Validate the form using required and email. Also apply a custom validation.
// 3. Program to apply animations to ng-show and ng-hide.
// 4. Program to show routing using ng-route. Also include $routeProvider and otherwise()
// into your program.

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Q15 = () => {
  const [allDetails, setAllDetails] = useState([]);
  const [html, sethtml] = useState();
  const [visible, setVisible] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData); // Convert FormData to a plain object
    const stuff = Object.values(data);
    setAllDetails((oldArray) => [...oldArray, stuff]);
  };
  useEffect(() => {
    console.log("visibility =", visible);
    if (allDetails.length > 0) {
      if (visible === true) {
        sethtml(
          allDetails.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value[0]}</td>
                <td>{value[1]}</td>
                <td>{value[2]}</td>
                <td>{value[3]}</td>
              </tr>
            );
          })
        );
      } else if (visible === false) {
        sethtml(() => {
          return <></>;
        });
      }
    }

    //console.log(html);
  }, [allDetails, visible]);
  const handleRadio = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "Show") {
      setVisible(true);
    }
    if (e.target.value === "Hide") {
      setVisible(false);
    }
  };
  return (
    <>
    <Link style={{
        marginTop: "80px"}} className={`${location.pathname === "/Home" ? "ActivePage" : "InActivePage"}`} aria-current="page" to="/Home">Go back to Home</Link>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "20px"
      }}
    >
        
      <div style={{marginLeft:'50px', marginRight:'50px'}}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            paddingLeft: "50px",
          }}
        >
          <label htmlFor="Name">Username:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            required={true}
            minLength="10"
          />
          <label htmlFor="Qualification">Qualification:</label>
          <select id="Qualification" name="Qualification">
            <option>Doctorate</option>
            <option>Post Graduate</option>
            <option>Graduate</option>
            <option>High School</option>
          </select>
          <label htmlFor="Email">Email:</label>
          <input type="email" id="Email" name="Email" required={true} />
          <label htmlFor="DateOfBirth">DateOfBirth:</label>
          <input
            type="date"
            id="DateOfBirth"
            name="DateOfBirth"
            required={true}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Submit Form
          </button>
        </form>
      </div>

      <div style={{marginLeft:'50px', marginRight:'50px'}}>
        <form onClick={handleRadio}>
          <label htmlFor="Show">
            <input type="radio" name="choice" value="Show" />
            Show Entries
          </label>
          <label htmlFor="Hide">
            <input type="radio" name="choice" value="Hide" />
            Hide Entries
          </label>
        </form>
      </div>

      <div style={{marginLeft:'50px', marginRight:'50px'}}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qualification</th>
              <th>Email</th>
              <th>DateOfBirth</th>
            </tr>
          </thead>
          <tbody>{html}</tbody>
        </table>
      </div>
      
    </div>
    </>
  );
};

export default Q15;
