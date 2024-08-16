import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesExample = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));

    setTimeout(() => {
      console.log('This message is shown after 2 seconds');
    }, 2000);
  }, []);

  const goToNewPage = () => {
    navigate('/newpage');
  };

  return (
    <div>
      <h2>Services Example</h2>
      <p>Data from API: {data ? data.title : 'Loading...'}</p>
      <button onClick={goToNewPage}>Go to New Page</button>
    </div>
  );
};

export default ServicesExample;
