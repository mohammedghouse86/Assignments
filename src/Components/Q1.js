// Write a program to evaluate expressions using {{ and }}. Create a text box and
// change the background of text box when we give a color value.
// 2. Understand a module and program to include a directive and a controller inside a
// module from external js file.
// 3. Write a program to bind the data using ng-model directive. Use ng-init, ng-repeat and
// ng-include directives inside your program.
// 4. What is a scope and program with $scope and $rootScope.

import React, {useState} from 'react';

const Q1_Q2_Q3 = () => {
  const [bgColor, setBgColor] = useState('');

  const handleChange = (e) => {
    setBgColor(e.target.value);
  };
  return (
    <>
      <div>
      <h2>Enter a Color:</h2>
      <input
        type="text"
        value={bgColor}
        onChange={handleChange}
        style={{ backgroundColor: bgColor }}
        placeholder="Type a color (e.g., red, blue, #123456)"
      />
    </div>
    </>
  )
}

export default Q1_Q2_Q3
