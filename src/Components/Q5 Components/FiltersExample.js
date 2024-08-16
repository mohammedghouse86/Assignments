import React, { useState } from 'react';

const FiltersExample = () => {
  const [text, setText] = useState('Example Text');
  const [date, setDate] = useState('2024-08-15');
  const [number, setNumber] = useState(1234.5678);

  const customFilter = (str) => {
    return str.split('').reverse().join('');
  };

  return (
    <div>
      <h2>Filters Example</h2>
      <div>
        <p>Uppercase: {text.toUpperCase()}</p>
        <p>Lowercase: {text.toLowerCase()}</p>
        <p>Date: {new Date(date).toLocaleDateString()}</p>
        <p>Number: {number.toFixed(2)}</p>
        <p>Custom Filter (Reverse String): {customFilter(text)}</p>
      </div>
    </div>
  );
};

export default FiltersExample