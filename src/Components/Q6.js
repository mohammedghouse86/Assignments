// 1. A page which specify a black border for table and if hover on it, page should change
// it's colour.
// 2. Apply different visibility by an element (visibility: hidden, visible, collapse) and use
// different types of display for an element (display: none, inline, block, contents, list-item)
// 3. A long page which should have two links "click to go to bottom of page" and "click to
// go to top of page" . Also set their scroll-behavior to scroll smoothly.
// 4. Add padding and margin with different size and understand the difference between
// them.
// 5. A page with multiple background images for an webpage or element and define their
// adjustable sizes.

import React from 'react';
import './Q6.css';

const Q6 = () => {
  return (
    <div className="webpage-container">
      {/* Task 1: Table with black border and hover effect */}
      <h1>Interactive Table with Hover Effect</h1>
      <table className="interactive-table">
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
          </tr>
        </tbody>
      </table>

      {/* Task 2: Visibility and Display properties */}
      <h2>Visibility and Display Properties</h2>
      <div className="visibility-display">
        <div className="hidden-div">This div is hidden (visibility: hidden)</div>
        <div className="visible-div">This div is visible (visibility: visible)</div>
        <div className="collapse-div">This div is collapsed (visibility: collapse)</div>
        <div className="none-div">This div is none (display: none)</div>
        <div className="inline-div">This div is inline (display: inline)</div>
        <div className="block-div">This div is block (display: block)</div>
        <div className="contents-div">This div is contents (display: contents)</div>
        <div className="list-item-div">This div is list-item (display: list-item)</div>
      </div>

      {/* Task 3: Smooth scrolling */}
      <h2>Smooth Scrolling Example</h2>
      <a href="#bottom" className="scroll-link">Click to go to bottom of page</a><br />
      <a href="#top" className="scroll-link">Click to go to top of page</a>

      {/* Task 4: Padding and Margin */}
      <h2>Padding and Margin Example</h2>
      <div className="padding-box">This box has padding.</div>
      <div className="margin-box">This box has margin.</div>

      {/* Task 5: Multiple Background Images */}
      <h2>Multiple Background Images</h2>
      <div className="multiple-backgrounds">
        This div has multiple background images with adjustable sizes.
      </div>

      <div id="bottom" style={{ marginTop: '1000px' }}>Bottom of the page</div>
    </div>
  );
};

export default Q6;
