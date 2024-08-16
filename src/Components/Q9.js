// 1. Create a table and recieve the contents from JSON file, sort it using filters. Show the
// usage of $index, $odd and $even.
// 2. Create a select element with some options. Spot the difference between ng-options
// and ng-repeat by using both inside the program.

import React, { useEffect, useState } from "react";
import "./Q9.css";

const Q9 = () => {
  /*THE DEFAULT JSON FROM WHICH THE TABLE IS DERIVED*/
  const [json, setJson] = useState([
    {
      StudentID: "S-01",
      StudentName: "Jack Soyer",
      Maths: "89",
      Physics: "72",
      Chemistry: "91",
    },
    {
      StudentID: "S-02",
      StudentName: "Mike Myers",
      Maths: "78",
      Physics: "83",
      Chemistry: "95",
    },
    {
      StudentID: "S-03",
      StudentName: "Tom Johnson",
      Maths: "67",
      Physics: "90",
      Chemistry: "56",
    },
    {
      StudentID: "S-04",
      StudentName: "Rahul Mehta",
      Maths: "87",
      Physics: "89",
      Chemistry: "92",
    },
    {
      StudentID: "S-05",
      StudentName: "Prakash Gupta",
      Maths: "74",
      Physics: "79",
      Chemistry: "100",
    },
    {
      StudentID: "S-06",
      StudentName: "Kamal Khan",
      Maths: "81",
      Physics: "89",
      Chemistry: "94",
    },
  ]);

  /*INORDER TO ITERATE WE ARE STORING THE DATA IN THIS ARRAY*/
  const [FullArray, setFullArray] = useState([]);

  /*DECLARING THE HTML STATE FROM WHICH WE ARE GETTING THE HTML ELEMENT*/
  const [html, setHtml] = useState();

  /*FUNCTION TO INSERT NEW ENTRIES IN THE TABLE */
  const handleForm = (e) => {
    e.preventDefault();
    const stuff = new FormData(e.target);
    const obj = Object.fromEntries(stuff);
    setJson((previous) => [...previous, obj]);
  };

  /*USE-EFFECT HOOK TO SET THE STATE OF THE HTML ELEMENT */
  useEffect(() => {
    if (FullArray.length > 0) {
      setFullArray([]);
    }
    const arr = [];
    setHtml(
      json.map((element, index) => {
        const dummy1 = Object.values(element);
        const total = Number(dummy1[2]) + Number(dummy1[3]) + Number(dummy1[4]);
        dummy1.push(total);
        arr.push(dummy1);
        return (
          <tr key={index}>
            {dummy1.map((y, i) => {
              return <td key={i}>{y}</td>;
            })}
          </tr>
        );
      })
    );
    setFullArray(arr);
  }, [json]);

  /*FUNCTION TO SORT THE TABLE AS PER MARKS SECURED*/
  const handleSort = (status) => {
    const sortedarray = [];
    const maxarr = [];
    FullArray.map((element, index) => {
      maxarr.push(element[5]);
    });
    /** */
    maxarr.map((element, index)=>{
    });
    let newarr;
    if(status){
    newarr = maxarr.sort((a, b) => a - b);}
    else{
    newarr = maxarr.sort((a, b) => b - a);
    }
    
    for (let index = 0; index < newarr.length; index++) {
      FullArray.map((element) => {
        if (element[5] === newarr[index]) {
          sortedarray.push(element);
        }
      });
    }
    
    updateHTML(sortedarray);
  };

  const updateHTML = (sortedarray) =>{
    setHtml(sortedarray.map((element,index)=>{
      return (<tr key={index}>
      {element.map((y, i) => {
        return <td key={i}>{y}</td>;
    })}
    </tr>)}))}

  return (
    <div>
      <h2>Enter the Students Details</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="StudentID">Student ID</label>
        <input
          type="text"
          name="StudentID"
          id="StudentID"
          required={true}
          maxLength="4"
        />
        <label htmlFor="StudentName">Student Name</label>
        <input
          type="text"
          name="StudentName"
          id="StudentName"
          required={true}
          minLength="5"
        />
        <label htmlFor="Maths">Maths</label>
        <input type="number" name="Maths" id="Maths" required={true} min="0" />
        <label htmlFor="Physics">Physics</label>
        <input
          type="number"
          name="Physics"
          id="Physics"
          required={true}
          min="0"
        />
        <label htmlFor="Chemistry">Maths</label>
        <input
          type="number"
          name="Chemistry"
          id="Chemistry"
          required={true}
          min="0"
        />
        <button type="submit">Enter Student Details</button>
      </form>
      <button onClick={()=>{handleSort(true)}}>Sort by Total Marks in acending order</button>
      <button onClick={()=>{handleSort(false)}}>Sort by Total Marks in decending order</button>
      <table style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Maths</th>
            <th>Physics</th>
            <th>Chemistry</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>{html}</tbody>
      </table>
    </div>
  );
};

export default Q9;
