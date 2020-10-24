/*eslint no-unused-expressions: "error"*/

import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App Components
import Header from './Header';
import Home from './Home';
import About from './About';
import Books from './Books';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/books" component={Books} />
    </div>
  </BrowserRouter>
);

export default App;