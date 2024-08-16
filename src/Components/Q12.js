// 1. Add an event listener to a button. When we click on it it should display current date
// and time.
// 2. Show the javascript validation. When you click submit, the text box doesn't need to
// be empty.
// 3. How console.log() can be used for Debugging.
// 4. Write functions to set a cookie, get a cookie and check a cookie in a single program.
// 5. Create a JSON object and access it using dot notation.

import React, { useState } from "react";

const Q12 = () => {
  const [html, setHtml] = useState();
  const getDate = () => {
    const obj = new Date();
    const date = obj.toISOString();
    //console.log(date);
    setHtml(
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          margin: "10px",
          height: "50px",
          width: "150px",
          border: "3px solid blue",
          borderRadius: "10%",
        }}
      >
        {date}
      </div>
    );
  };
  const handleSubmit = (e) => {
    // alert("Submitted!!!");
    // setCookie("UserName")
    e.preventDefault();
    const formdata = new FormData(e.target);
    const name = Object.fromEntries(formdata);
    console.log(name.name);
    setCookie('name', name.name, 1);
    checkCookie("name");
    };
  // Function to set a cookie
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Calculate expiration date
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    getCookie(name);
  }

  // Function to get a cookie
  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";"); // Split the cookies string into individual cookies
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1); // Remove any leading spaces
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length); // Find and return the cookie value
    }
    return null;
  }

  // Function to check if a cookie exists
  function checkCookie(name) {
    let cookie = getCookie(name); // Get the cookie value
    if (cookie) {
      console.log("Cookie found:", cookie);
    } else {
      console.log("Cookie not found");
    }
  }

  const json = {"name":"Mark", "Age":21};
  const string = JSON.stringify(json);
  const json1 = JSON.parse(string);
  console.log(typeof(json),typeof(string));
  console.log(typeof(json1),json1.name, json1.Age);


  return (
    <div>
      <button onClick={getDate}>Get Date</button>
      {html}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          name="name"
          type="text"
          required={true}
          placeholder="Enter Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Q12;
