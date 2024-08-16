import React, { useState } from 'react';

const TextTransformExample = () => {
  const [text, setText] = useState('Example Text');

  const toLowerCase = (str) => str.toLowerCase();
  const toUpperCase = (str) => str.toUpperCase();

  return (
    <div>
      <h2>Text Transform Example</h2>
      <p>Original Text: {text}</p>
      <p>Lowercase: {toLowerCase(text)}</p>
      <p>Uppercase: {toUpperCase(text)}</p>
    </div>
  );
};


export default TextTransformExample 