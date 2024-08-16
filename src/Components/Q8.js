// 1. Write program using this keyword when we click on button, it should be disappear.
// 2. Invoke a function using call() and apply(). Also Spot the difference between them.
// 3. Write a program for COUNTER. Whenever we click on a "Count" button, value
// should increment.
// 4. Create a Counter with the help of getter and setter accessors.
// 5. Add some more properties to an existing function using object prototypes.

import React, { useState } from "react";
import PrototypeFunction from './PrototypeFunction'

const Q8 = () => {
  const [newName, setnewName] = useState("none");
  const [html, setHtml] = useState();
  const [html1, setHtml1] = useState();
  const [count, setcount] = useState(0);
  const obj = {
    Name: "",
    abc: function () {
      return this.Name;
    },
  };

  const handleClick = () => {
    obj.Name = newName;
    const name = obj.abc();
    //console.log(obj.abc());
    setHtml(<div>{name}</div>);
  };

  const handleReset = () => {
    obj.Name = "";
    const name = obj.abc();
    //console.log(obj.abc());
    setHtml(<div>{name}</div>);
  };

  const handleChange = (e) => {
    setnewName(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    function greet(greeting, punctuation) {
        const sentence = (greeting + ', ' + this.name + ' from ' + this.location + punctuation);
        setHtml1(sentence);
      }

    const stuff= new FormData(e.target);
    const formData = Object.fromEntries(stuff);
    //console.log("this is the formData =", formData);
  
    greet.call(formData,"hello","!!!");
    greet.apply(formData,["hello","!!!"]);
}
    const handleIncrement = () =>{
        setcount(count+1);
    }
  

  return (
    <div
      style={{
        color: "blue",
        height: "100vh",
      }}
    >
      <h3>Using 'this' keyword and also making text disappear</h3>
      <label htmlFor="name">Enter the New Name</label>
      <input type="text" name="name" onChange={handleChange} required={true} />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
        }}
        onClick={handleClick}
      >
        Add Name
      </button>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
        }}
        onClick={handleReset}
      >
        Remove Name
      </button>
      <div>Name = {html}</div>

      {/*Call and Apply*/}
      <div>
        <h3>ENTER THE NAME AND LOCATION TO GET THE SENTENCE</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter the Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required={true}
          />
          <label htmlFor="location">Enter the Location</label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            required={true}
          />
        <button type="submit">Submit</button>
        </form>
        {html1}
      </div>
      {/*Click the button to increment*/}
      <div>
      <h3>PRESS BUTTON TO INCREMENT COUNTER</h3>
      <button type="button" onClick={handleIncrement}>Increment</button>
      <button type="button" style={{backgroundColor:'red'}} onClick={()=>{setcount(0)}}>Reset</button>
      <h5>Counter - {count}</h5>
      </div>
      <div>
      <PrototypeFunction/>
      </div>
    </div>
  );
};

export default Q8;
