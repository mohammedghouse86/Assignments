import React, { useState } from 'react';

const HttpMethodsExample = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result);
      setStatus(response.status);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const postData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
      });
      const result = await response.json();
      setData(result);
      setStatus(response.status);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h2>HTTP Methods Example</h2>
      <button onClick={getData}>Get Data</button>
      <button onClick={postData}>Post Data</button>
      <p>Response Status: {status}</p>
      <p>Data: {data ? JSON.stringify(data) : 'No Data'}</p>
    </div>
  );
};

export default HttpMethodsExample