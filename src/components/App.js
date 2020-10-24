import React from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" component={Home} />
        <header className="App-header">
          
        </header>
        <button>
          Section 1.10.32
        </button>
        <button>
          Section 1.10.33
        </button>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
