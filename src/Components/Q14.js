// CSS Compatibility
// 1. Create a table and apply table-layout as fixed and none
// 2. Create a list and change its list-style-type
// 3. Create a grid with of different types
// 4. Create a hero image
// 5. Write a program of view-port for grid, media queries, image and video.

import React from "react";
const array = [...Array(64)].map((_, i) => i + 1);
const html = array.map((i)=>{
  if(i%2===0){
  return <div key={i} class="grid-item" style={{
    backgroundColor:"black",color:"gray"
  }}>{i}</div>}
  else{
    return <div key={i} class="grid-item" style={{
      backgroundColor:"gray",color:"black"
    }}>{i}</div>}
  }
)

const Q14 = () => {
  return (
    <div className="main">
      <h4>JavaScript type conversions (table-Auto)</h4>
      <table>
        <thead>
          <tr>
            <th>left operand</th>
            <th>operator</th>
            <th>right operand </th>
            <th>result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[] (empty array)</td>
            <td>+</td>
            <td>[] (empty array)</td>
            <td>"" (empty string)</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>[] (empty array)</td>
            <td>+</td>
            <td>{} (empty object)</td>
            <td>"[object Object]" (string)</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>false (boolean)</td>
            <td>+</td>
            <td>[] (empty array)</td>
            <td>"false" (string)</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>"123"(string)</td>
            <td>+</td>
            <td>1 (number)</td>
            <td>"1231" (string)</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>"123"(string)</td>
            <td>-</td>
            <td>1 (number)</td>
            <td>122 (number)</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>"123"(string)</td>
            <td>-</td>
            <td>1 (number)</td>
            <td>NaN (number)</td>
          </tr>
        </tbody>
      </table>

      <h4>JavaScript type conversions (table-Fixed)</h4>
      <table style={{ tableLayout: "fixed", width: "560px" }}>
        <thead>
          <tr>
            <th>left operand</th>
            <th>operator</th>
            <th>right operand </th>
            <th>result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[] (empty array)</td>
            <td>+</td>
            <td>[] (empty array)</td>
            <td>"" (empty string)</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>[] (empty array)</td>
            <td>+</td>
            <td>{} (empty object)</td>
            <td>"[object Object]" (string)</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>false (boolean)</td>
            <td>+</td>
            <td>[] (empty array)</td>
            <td>"false" (string)</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>"123"(string)</td>
            <td>+</td>
            <td>1 (number)</td>
            <td>"1231" (string)</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>"123"(string)</td>
            <td>-</td>
            <td>1 (number)</td>
            <td>122 (number)</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>"123"(string)</td>
            <td>-</td>
            <td>1 (number)</td>
            <td>NaN (number)</td>
          </tr>
        </tbody>
      </table>
      <div className="boxDisplay">

        <strong>Ordered List</strong>
        <ol>
          <li className="Q14listItem">
            Website authors cannot perfectly conceal how their JavaScript
            operates because the raw source code must be sent to the client.
          </li>
          <li className="Q14listItem">
            The code can be obfuscated, but obfuscation can be
            reverse-engineered.
          </li>
        </ol>
      </div>
      <div className="boxDisplay darkBG">
        <strong>UnOrdered List</strong>
        <ul className="Q14UOlistItem">
          <li>
            JavaScript form validation only provides convenience for users, not
            security.
          </li>
          <li>
            If a site verifies that the user agreed to its terms of service, or
            filters invalid characters out of fields that should only contain
            numbers, it must do so on the server, not only the client.
          </li>
        </ul>
      </div>
      <h4 style={{textAlign:'left'}}>Grid</h4>
      <div class="grid-container">
        {html}
      </div>
      <div>
      <iframe width="640" height="360" src="https://www.youtube.com/embed/fOd16PT1S7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Q14;
