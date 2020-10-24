import React from 'react';

const Books = () => {
  return (
    <div className="main-content courses">
      <div className="books-header group">
        <h2>Books</h2> 
        <ul className="books-nav">
          <li><a href='/books/bookone'>Book 1</a></li>
          <li><a href='/books/booktwo'>Book 2</a></li>
          <li><a href='/books/bookthree'>Book 3</a></li>
        </ul>
      </div>
    </div>
  )  
}

export default Books;