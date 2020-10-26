import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import BookOne from './books/BookOne';
import BookTwo from './books/BookTwo';
import BookThree from './books/BookThree';


const Books = () => {
  return (
    <div className="main-content courses">
      <div className="books-header group">
        <h2>Books</h2> 
        <ul className="books-nav">
          <li><NavLink to='/books/bookone'>Book 1</NavLink></li>
          <li><NavLink to='/books/booktwo'>Book 2</NavLink></li>
          <li><NavLink to='/books/bookthree'>Book 3</NavLink></li>
        </ul>
      </div>
      <Route path="/books/BookOne" component={BookOne} />
      <Route path="/books/BookTwo" component={BookTwo} />
      <Route path="/books/BookThree" component={BookThree} />

    </div>
  )  
}

export default Books;