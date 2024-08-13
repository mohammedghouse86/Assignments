import React, {useState} from 'react';

const Q1 = () => {
    const [newName, setnewName] = useState("none");
    const [html, setHtml] = useState()
    const obj = {
        Name:"Ghouse Mohammed",
        abc:function(){
            return (this.Name);
        }
    }
    
    const handleClick = () => {
        obj.Name = newName;
        const name = obj.abc();
        console.log(obj.abc());
        setHtml(<div>{name}</div>)
    }

    const handleReset = () => {
        obj.Name = "";
        const name = obj.abc();
        console.log(obj.abc());
        setHtml(<div>{name}</div>)
    }

    const handleChange = (e) =>{
        setnewName(e.target.value);
    }
  return (
    <div
      style={{
        color: "blue",
        height: "100vh",
      }}
    >
        <h3>Q1 Using 'this' keyword and also making text disappear</h3>
        <label htmlFor="name">Enter the New Name</label>
        <input type="text" name="name" onChange={handleChange}/>
        <button style={{
            backgroundColor: "blue",
            color: "white",
        }} onClick={handleClick}>Add Name</button>
        <button style={{
            backgroundColor: "red",
            color: "white",
        }} onClick={handleReset}>Remove Name</button>
        <div>Name = {html}</div>
    </div>
  )
}

export default Q1
