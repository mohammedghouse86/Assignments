// 1. Write a program which consist of single line and multiline comments.
// 2. Create an array consisting of fruits names and when we click on a button sort it in
// descending order.
// 3. Write a program with FOR/IN loop.
// 4. Create an object "person" with properties firstname and lastname. Display these
// properties using 2 different ways of accessing.
// 5. Write a program with variable hoisting(initialization first then declaration).
// 6. Use strict mode in your program and understand why variable not declared causes
// error.

import React, { useEffect, useState } from "react";

const Q4 = () => {
  const [array, setarray] = useState(["apple", "banana", "orange", "kiwi"])
  const [html, setHtml] = useState();
  useEffect(()=>{
    setHtml(array.map((element, index)=>{
      return <div key={index}>{element}</div>
    }))
  },[array])
  /*FUNCTION CALLED BY PRESSING THE Add Fruit BUTTON*/
  const handleClick = (e) => {
    e.preventDefault();
    const stuff = new FormData(e.target);
    const formdata = Object.fromEntries(stuff);
    setarray(p=>[...p,formdata.fruit]);
    // console.log(array);
    // setTimeout(()=>{editHtml()},1500);
    
  };

  // const editHtml = () =>{
  //   setHtml(array.map((element, index)=>{
  //     return <div key={index}>{element}</div>
  //   }))
  // };

  const handleSort = () =>{
    const sortedarray = [...array].sort().reverse();
    console.log(sortedarray);
    setarray(sortedarray);
  }
  
  const handleSort_des = () =>{
    const sortedarray = [...array].sort();
    console.log(sortedarray);
    setarray(sortedarray);
  }
  const [htmlname, sethtmlname] = useState();
  const object = {
    firstName : 'Ghouse',
    lastName : 'Mohammed',
    printName : function (){
      sethtmlname(<div>Name = {this.firstName}{this.lastName} </div>);
    }
  }

  /*Hoisting example*/
  let appleQuantity;
  var applePrice;
  const [htmlapple, sethtmlapple] = useState();
  const apple = () =>{
    appleQuantity = '2kg';
    applePrice = 'INR 400';
    sethtmlapple(<div>{appleQuantity} apple cost {applePrice}</div>) 
  }
  return (
    <>
      <div>
        <form onSubmit={handleClick}>
          <label htmlFor="fruit">Enter Fruit Name</label>
          <input type="text" name="fruit" />
          <button type="submit">Add Fruit</button>
        </form>
        <div style={{display:'flex', flexDirection:'row', margin:'5px'}}>
        <button onClick={handleSort}>sort in ascending order</button>
        <button onClick={handleSort_des}>sort in descending order</button></div>
        <div style={{display:'flex', flexDirection:'column', border:'1px red solid', width:'200px', margin:'10px'}}>{html}</div>
      </div>
      <button onClick={object.printName.bind(object)}>Get Name</button>
      {htmlname}
      <button onClick={apple}>Get Price</button>
      {htmlapple}

    </>
  );
};

export default Q4;
