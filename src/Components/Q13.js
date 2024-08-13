// 1. Fetch the data from mysql database table to AngularJS program.
// 2. What is DOM(Document Object Model). Use ng-show, ng-hide and ng-disabled into
// your program.
// 3. Program that performs various events using ng-click, ng-mousemove and $event

import React, {useEffect, useState} from 'react';

const Q13 = () => {
  const [users, setUsers] = useState([]);
  const [html, sethtml] = useState();
  const [visible, setVisible] = useState(true);
  const [Apicall, setApicall] = useState(false);
  const [x,setX] = useState('255px');
  const [y,setY] = useState('477px');

  const handleMouse = (e) =>{
    console.log(e.clientX,e.clientY);
    console.log(x,y);
    setTimeout(()=>{
      if(e.clientX<700){
      setX(e.clientX+'px');}
      else{setX('700px')}
      if(e.clientY<477){
        setY(e.clientY+'px');}
        else{setY('477px')}
    },300)
  }

  const handleAPI = async () => {
    
    try {
      const response = await fetch("http://localhost:3001/Users");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      for (let index = 0; index < data.usersList.length; index++) {
        const element = data.usersList[index];
        const arr = Object.values(element);
        setUsers(previous => [...previous,arr])
      }
      setApicall(true);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(()=>{
    if(visible){
    sethtml(users.map((element,index)=>{
      return <tr key={index}>
        {element.map((y,i)=>{
          if(i===0||i===1||i===2){
          return (
            <td key={i}>
              {y}
            </td>)
          }
        })}
      </tr>
    }))}
    else{
      sethtml(<h3>THE TABLE IS HIDDEN</h3>)
    }
    //console.log(users);
  },[users, visible])
  return (
    <>
      <button disabled={Apicall} onClick={handleAPI}>Fetch Users</button>
      <button  onClick={()=>{setVisible(!visible)}}>Hide Table</button>
      <table>
          <thead>
            <tr>
              <th>Employee Number</th>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>{html}</tbody>
        </table>
      <div className='mousepointer' onMouseMove={handleMouse}>
        <div className='circle' style={{ position: 'absolute', top:y,left:x}}></div>
        The Circle moves where the pointer goes within the box with a delay.

      </div>
    </>
  );
};

export default Q13;
