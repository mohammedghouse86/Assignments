// 1. Apply CSS shadow effects like for image box and hover a cursor.
// 2. Use CSS animations (name,duration,iteration-count & delay) and
// paginations(Hoverable,with and without spaces).
// 3. Add positions to CSS block (static, relative, fixed, absolute and sticky).
// 4. Handling Overflow using scroll.
// 5. Adding Opacity to a image

import './Q10.css'; 
import React, { useEffect, useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faDoorOpen } from '@fortawesome/free-solid-svg-icons'


const Q10 = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const url = `https://api.slingacademy.com/v1/sample-data/photos?limit=${limit}&offset=${offset}`;
  useEffect(() => {
    const fun_call_api = async () => {
      const response = await fetch(url);
      const data1 = await response.json();
      setData(data1.photos);
    }
    fun_call_api();
  }, [url])
  const paginatedItem = useMemo(() => data.slice(count, count + 1),[count,data])
  const html = paginatedItem.map(item =>
  (<div className='Container my-1' key={item.id} style={{ width: '500px', height: '350px' }}>
    <img src={item.url} alt={item.title} width='400px' height='250px'/>
    <h1 style={{ fontFamily: 'cursive', fontSize:'30px' }}><p>{item.title}</p></h1>
  </div>))

  const fun_setCout = (item) => {
    setCount(item + 1)
  }

  useEffect(()=>{
    if(paginatedItem.length>0){
    setNum(paginatedItem[0].id)
    console.log(paginatedItem[0].id);  
  }
  },[paginatedItem])

  const pages = useMemo(() => Math.ceil(data.length), [data.length]);
  

const htmlPages = useMemo(() =>{
  const pageArr = [...Array(pages).keys()]
  return ( pageArr.map(item => (
  <div
    className='Container my-1 mx-2'
    style={{ fontFamily: 'cursive' }}
    key={item}
    onClick={() => {
      //setNum(item + offset);
      fun_setCout(item-1);
      //console.log('this is the page you are on =', item + offset);
    }}
  >
    {num === Number(item)+offset+1? <p style={{color:'blue'}}>{Number(item) + offset+1}</p>:<p>{Number(item) + offset+1}</p>}
  </div>
)))}, [offset, num, pages]);

  const fun_leftclick = () => {
    //console.log('this is the page you are on  =', num);
    if (count > 0) {
      setCount(count - 1)
      setNum(num-1)
    }
  }
  const fun_rightclick = () => {
    
    if (count < data.length - 1) {
      setCount(count + 1)
      setNum(num+1)
    }
    //console.log('this is the page you are on  =', num);
  }
  const fun_turnpageRight = () => {
    //console.log("paginatedItem.id =",paginatedItem[0].id);
    if (paginatedItem[0].id < 132) {
      setOffset(offset + 10);
      setCount(0)
    }
  }
  const fun_turnpageLeft = () => {
    //console.log("paginatedItem.id =",paginatedItem[0].id);
    if (paginatedItem[0].id >9) {
      setOffset(offset - 10);
      setCount(0)
    }
  }

  return (
    <>
      <h1>Pagination Example</h1>
      <div className='Container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'10px', flexDirection:'row' }}>
        {count === 0 && offset !==0? <FontAwesomeIcon icon={faDoorOpen} style={{ color: 'blue', height: '60px', width: '100px', cursor: 'pointer' }} onClick={fun_turnpageLeft} />:
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'blue', height: '60px', width: '100px', cursor: 'pointer' }} onClick={fun_leftclick} />
        
        }
        {html}
        {count < 9 ?
          <FontAwesomeIcon icon={faArrowRight} style={{ color: 'blue', height: '60px', width: '100px', cursor: 'pointer' }} onClick={fun_rightclick} /> :
          <FontAwesomeIcon icon={faDoorOpen} style={{ color: 'blue', height: '60px', width: '100px', cursor: 'pointer' }} onClick={fun_turnpageRight} />
        }
      </div>

      <div className='Container' style={{ display: 'flex', cursor: 'pointer', justifyContent: 'center', fontSize: '30px', color: 'red', flexDirection:'row' }}>{htmlPages} </div>

      
      <div className="box">Box with Shadow</div>

      <h1>CSS Positioning Examples</h1>
      <div className='rectangle'>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div className="static-box">Static Positioning</div>
      <div className="relative-box">Relative Positioning</div>
      </div>
      <div className="fixed-box">Fixed Positioning</div>
      <div className="absolute-box">Absolute Positioning</div>
      <div className="sticky-box">Sticky Positioning</div>
      </div>  

      <div className="overflow-box">
        <p>
        The MERN stack is a powerful and popular full-stack development framework that combines four key technologies to build dynamic, modern web applications. MERN stands for MongoDB, Express.js, React, and Node.js. MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it easy to handle complex data structures. Express.js is a minimalistic web application framework for Node.js, facilitating the creation of robust and scalable server-side applications. React, developed by Facebook, is a front-end library for building interactive user interfaces with reusable components and a virtual DOM, ensuring high performance. Node.js, a JavaScript runtime built on Chrome's V8 engine, allows developers to run JavaScript on the server side, enabling the use of a single language throughout the stack. Together, these technologies provide a seamless development experience, allowing for the creation of efficient, high-performance web applications with a consistent JavaScript-based approach across both client and server sides.
        </p>
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
      <img className="opaque" src='/logo192.png' width='300px' height='300px'/>
      <img src='/logo192.png' width='300px' height='300px'/>
      </div>
    </>
  )
}

export default Q10
