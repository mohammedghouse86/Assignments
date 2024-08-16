// Design the web page using all the below input attributes
// type =text, password, submit, reset, radio, checkbox, button,
// 2. HTML5 input Types
// type=number, range, color, date, file, time, month, week, email
// 3. Apply all of the below input restrictions
// disabled, max, maxlength, min, readonly, required, size, value
// 4. Develop a web page using target attribute.
// 5. Use I-frames and Marquee in your webpage.

import React from 'react';

const Q7 = () => {
  return (
    <div>
      <h1>Comprehensive Web Form</h1>

      <form>
        {/* Basic Input Types */}
        <label htmlFor="text-input">Text:</label>
        <input type="text" id="text-input" required maxLength="10" size="20" /><br />

        <label htmlFor="password-input">Password:</label>
        <input type="password" id="password-input" required maxLength="8" /><br />

        <label htmlFor="submit-input">Submit:</label>
        <input type="submit" value="Submit" /><br />

        <label htmlFor="reset-input">Reset:</label>
        <input type="reset" value="Reset" /><br />

        <label>Radio:</label>
        <input type="radio" name="radio-group" value="Option 1" /> Option 1
        <input type="radio" name="radio-group" value="Option 2" /> Option 2<br />

        <label>Checkbox:</label>
        <input type="checkbox" name="checkbox-group" value="Checkbox 1" /> Checkbox 1
        <input type="checkbox" name="checkbox-group" value="Checkbox 2" /> Checkbox 2<br />

        <label htmlFor="button-input">Button:</label>
        <button type="button" id="button-input">Click Me</button><br />

        {/* HTML5 Input Types */}
        <label htmlFor="number-input">Number:</label>
        <input type="number" id="number-input" min="1" max="10" /><br />

        <label htmlFor="range-input">Range:</label>
        <input type="range" id="range-input" min="0" max="100" /><br />

        <label htmlFor="color-input">Color:</label>
        <input type="color" id="color-input" /><br />

        <label htmlFor="date-input">Date:</label>
        <input type="date" id="date-input" /><br />

        <label htmlFor="file-input">File:</label>
        <input type="file" id="file-input" /><br />

        <label htmlFor="time-input">Time:</label>
        <input type="time" id="time-input" /><br />

        <label htmlFor="month-input">Month:</label>
        <input type="month" id="month-input" /><br />

        <label htmlFor="week-input">Week:</label>
        <input type="week" id="week-input" /><br />

        <label htmlFor="email-input">Email:</label>
        <input type="email" id="email-input" required /><br />

        {/* Input Restrictions */}
        <label htmlFor="restricted-input">Disabled Input:</label>
        <input type="text" id="restricted-input" value="Disabled" disabled /><br />

        <label htmlFor="readonly-input">Read-Only Input:</label>
        <input type="text" id="readonly-input" value="Read-Only" readOnly /><br />

        <label htmlFor="size-input">Sized Input:</label>
        <input type="text" id="size-input" size="30" value="Sized Input" /><br />
      </form>

      {/* Target Attribute */}
      <h2>Target Attribute Example</h2>
      <a href="https://www.google.com" target="_blank">Open Google in New Tab</a><br />
      <a href="https://www.wikipedia.org" target="_self">Open Wikipedia in Same Tab</a><br />
      <a href="https://www.bing.com" target="_parent">Open Bing in Parent Frame</a><br />
      <a href="https://www.yahoo.com" target="_top">Open Yahoo in Full Window</a><br />

      {/* I-frame Example */}
      <h2>I-Frame Example</h2>
      <iframe
        src="https://www.example.com"
        title="Example I-Frame"
        width="600"
        height="400"
      ></iframe><br />

      {/* Marquee Example */}
      <h2>Marquee Example</h2>
      <marquee behavior="scroll" direction="left">This is a scrolling text example using Marquee.</marquee>
    </div>
  );
};

export default Q7;
