import React from 'react';
import logo from './logo.svg';
import './App.css';

const io = require("socket.io-client");
let socket = null;

function App() {
  React.useEffect(() => {
      socket = io.connect('http://192.168.1.23:8080/', {rejectUnauthorized: false});
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button style={{fontSize: '24px'}} onClick={() => socket.emit('kiriman', 'hola')}>Hola !</button>
      </header>
    </div>
  );
}

export default App;
