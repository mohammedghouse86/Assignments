// 1. Develop a web page with non-semantic elements <div> and <span>
// 2. Develop a web page with the semantic elements <form>, <table> and <article>
// 3. Use all the HTML5 tags and develop a web page
// article, aside, figcaption, figure,footer,header, hgroup,mark,nav, section,time

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Q11 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Dummy data for the table
    const dummyData = [
      [1, 'John Doe', 'Software Engineer'],
      [2, 'Jane Smith', 'Product Manager'],
      [3, 'Alice Johnson', 'Designer'],
      [4, 'Bob Brown', 'Developer'],
    ];
    setUsers(dummyData);
  }, []);

  return (
    <>
      <header>
        <h1>Welcome to My Web Page</h1>
        <p>Random data in header: Today's date is {new Date().toLocaleDateString()}</p>
      </header>

      <nav>
        <ul>
          <Link to="/Home">Home</Link>
        </ul>
      </nav>

      <article>
        <h2>Main Content</h2>
        <div>
          <p>This section uses non-semantic <span>span</span> and <div>div</div> elements.</p>
        </div>

        <section>
          <h3>Table of Users</h3>
          <table>
            <thead>
              <tr>
                <th>Employee Number</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  {user.map((item, i) => (
                    <td key={i}>{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>

      <footer>
        <p>Footer Content: This is the Footer</p>
      </footer>
    </>
  );
};

export default Q11;
