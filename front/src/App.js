import React, { useState } from 'react';
import './App.css';

import Login from './Components/Login'
import Like from './Components/Like'

function App() {
  const [token, setToken] = useState(window.localStorage.getItem('likeit_token'))

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Like counter
        </p>
      </header>
      {
        token !== null ? (
          <Like />
        ) : (
          <Login setToken={setToken} />
        )
      }
    </div>
  );
}

export default App;
