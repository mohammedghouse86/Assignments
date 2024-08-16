import React, { useEffect, useState } from 'react';

const PrototypeFunction = () => {
  const [containsThre, setContainsThree] = useState(false);
  const [containsTen, setContainsTen] = useState(false);
  const [sqAverage, setsqAverage] = useState(0);

  useEffect(() => {
    console.log('this is useeffect')
    // Polyfill for Array.prototype.includes
    if (!Array.prototype.includes) {
      Array.prototype.includes = function(searchElement, fromIndex) {
        // Convert 'this' to an object
        console.log('before converting to an object =',this)
        //const list = Object(this);
        const list = this;
        console.log('this has been converted to object =',list)
        // Get the length of the array
        const length = list.length >>> 0;

        // If length is zero, return false
        if (length === 0) return false;

        // Convert fromIndex to an integer
        const n = fromIndex | 0;
        // Calculate the start index
        const k = Math.max(n >= 0 ? n : length - Math.abs(n), 0);

        // Iterate over the array
        for (let i = k; i < length; i++) {
          if (list[i] === searchElement) return true;
        }

        return false;
      };
    }
    if(!Array.prototype.sqAverage){
        Array.prototype.sqAverage = function() {
            // Convert 'this' to an object
        const list = Object(this);
        var result = 0;
        const length = list.length >>> 0;
        if (length === 0) return false;
        for (let i = 0; i < length; i++) {
            result = result + (list[i]*list[i])           
        }
        result = result/length;
        return result
    }}

    // Example usage
    const array = [1, 3, 5, 7, 9, 11];

    // Use the polyfilled includes method
    setContainsThree(array.includes(3));
    setContainsTen(array.includes(10));
    setsqAverage(array.sqAverage());
  }, []);


  console.log(name);
var name = "dude";

  return (
    <div>
      <h3>Polyfill Example</h3>
      <div>Array: [1, 3, 5, 7, 9, 11]</div>
      <div>Contains 3: {containsThre.toString()}</div>
      <div>Contains 10: {containsTen.toString()}</div>
      <div>Average of Squares: {sqAverage}</div>
    </div>
  );
};

export default PrototypeFunction;
